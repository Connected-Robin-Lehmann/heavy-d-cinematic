import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY as string;
const CHANNEL_HANDLE = "HeavyDSparks";
const BASE = "https://www.googleapis.com/youtube/v3";

// YouTube Shorts are capped at 3 minutes — anything longer cannot be a Short
const MIN_DURATION_SECONDS = 180;

export interface YoutubeVideo {
  id: string;
  title: string;
  views: string;
}

function formatViews(count: string): string {
  const n = parseInt(count, 10);
  if (isNaN(n)) return "";
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M views`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K views`;
  return `${n} views`;
}

function parseDuration(iso: string): number {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  const h = parseInt(match[1] ?? "0", 10);
  const m = parseInt(match[2] ?? "0", 10);
  const s = parseInt(match[3] ?? "0", 10);
  return h * 3600 + m * 60 + s;
}

export function useYoutubeFeed() {
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchVideos() {
      try {
        // 1. Get uploads playlist ID from channel handle
        const channelRes = await fetch(
          `${BASE}/channels?part=contentDetails&forHandle=${CHANNEL_HANDLE}&key=${API_KEY}`,
        );
        const channelData = await channelRes.json();
        const uploadsPlaylistId: string =
          channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // 2. Fetch more than 3 so we have enough after filtering out Shorts
        const playlistRes = await fetch(
          `${BASE}/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=15&key=${API_KEY}`,
        );
        const playlistData = await playlistRes.json();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const items: any[] = playlistData.items;
        const videoIds = items
          .map((item) => item.snippet.resourceId.videoId as string)
          .join(",");

        // 3. Get duration + view counts. Duration is the only reliable Short indicator
        // available via the API — Shorts are hard-capped at 3 minutes by YouTube.
        const statsRes = await fetch(
          `${BASE}/videos?part=statistics,contentDetails&id=${videoIds}&key=${API_KEY}`,
        );
        const statsData = await statsRes.json();
        const infoMap: Record<string, { views: string; duration: number }> = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        for (const v of statsData.items as any[]) {
          infoMap[v.id] = {
            views: v.statistics.viewCount ?? "0",
            duration: parseDuration(v.contentDetails.duration ?? ""),
          };
        }

        const result: YoutubeVideo[] = items
          .filter((item) => {
            const id = item.snippet.resourceId.videoId as string;
            return (infoMap[id]?.duration ?? 0) > MIN_DURATION_SECONDS;
          })
          .slice(0, 3)
          .map((item) => ({
            id: item.snippet.resourceId.videoId as string,
            title: item.snippet.title as string,
            views: formatViews(
              infoMap[item.snippet.resourceId.videoId]?.views ?? "0",
            ),
          }));

        setVideos(result);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  return { videos, loading, error };
}
