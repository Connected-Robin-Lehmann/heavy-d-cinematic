const API_KEY = process.env.YOUTUBE_API_KEY ?? "";
const CHANNEL_HANDLE = "HeavyDSparks";
const BASE = "https://www.googleapis.com/youtube/v3";

// YouTube Shorts are hard-capped at 3 minutes by YouTube
const MIN_DURATION_SECONDS = 180;

function parseDuration(iso: string): number {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  const h = parseInt(match[1] ?? "0", 10);
  const m = parseInt(match[2] ?? "0", 10);
  const s = parseInt(match[3] ?? "0", 10);
  return h * 3600 + m * 60 + s;
}

function formatViews(count: string): string {
  const n = parseInt(count, 10);
  if (isNaN(n)) return "";
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M views`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K views`;
  return `${n} views`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  // s-maxage tells Vercel's CDN to cache once per 24h for all users.
  // stale-while-revalidate serves the cached version while refreshing in background.
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate=3600");

  try {
    const channelRes = await fetch(
      `${BASE}/channels?part=contentDetails&forHandle=${CHANNEL_HANDLE}&key=${API_KEY}`,
    );
    const channelData = await channelRes.json();
    const uploadsPlaylistId: string =
      channelData.items[0].contentDetails.relatedPlaylists.uploads;

    const playlistRes = await fetch(
      `${BASE}/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=15&key=${API_KEY}`,
    );
    const playlistData = await playlistRes.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const items: any[] = playlistData.items;
    const videoIds = items
      .map((item) => item.snippet.resourceId.videoId as string)
      .join(",");

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

    const videos = items
      .filter((item) => {
        const id = item.snippet.resourceId.videoId as string;
        return (infoMap[id]?.duration ?? 0) > MIN_DURATION_SECONDS;
      })
      .slice(0, 3)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((item: any) => ({
        id: item.snippet.resourceId.videoId as string,
        title: item.snippet.title as string,
        views: formatViews(
          infoMap[item.snippet.resourceId.videoId]?.views ?? "0",
        ),
      }));

    res.status(200).json(videos);
  } catch {
    res.status(500).json({ error: "Failed to fetch videos" });
  }
}
