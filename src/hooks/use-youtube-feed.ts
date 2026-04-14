import { useState, useEffect } from "react";

export interface YoutubeVideo {
  id: string;
  title: string;
  views: string;
}

export function useYoutubeFeed() {
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/youtube-feed")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json() as Promise<YoutubeVideo[]>;
      })
      .then((data) => setVideos(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { videos, loading, error };
}
