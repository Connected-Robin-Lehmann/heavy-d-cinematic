import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY as string;
const CHANNEL_HANDLE = "HeavyDSparks";
const BASE = "https://www.googleapis.com/youtube/v3";

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

        // 2. Get latest 3 video IDs + titles from the uploads playlist
        const playlistRes = await fetch(
          `${BASE}/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=3&key=${API_KEY}`,
        );
        const playlistData = await playlistRes.json();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const items: any[] = playlistData.items;
        const videoIds = items
          .map((item) => item.snippet.resourceId.videoId as string)
          .join(",");

        // 3. Get view counts
        const statsRes = await fetch(
          `${BASE}/videos?part=statistics&id=${videoIds}&key=${API_KEY}`,
        );
        const statsData = await statsRes.json();
        const statsMap: Record<string, string> = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        for (const v of statsData.items as any[]) {
          statsMap[v.id] = v.statistics.viewCount;
        }

        const result: YoutubeVideo[] = items.map((item) => ({
          id: item.snippet.resourceId.videoId as string,
          title: item.snippet.title as string,
          views: formatViews(statsMap[item.snippet.resourceId.videoId] ?? "0"),
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
