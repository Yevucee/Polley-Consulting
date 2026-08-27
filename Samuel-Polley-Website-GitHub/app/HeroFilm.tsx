"use client";

import { useEffect, useRef, useState } from "react";

type HeroFilmProps = {
  sources: string[];
  poster: string;
  label: string;
};

export default function HeroFilm({ sources, poster, label }: HeroFilmProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || sources.length === 0) return;

    video.src = sources[index] ?? sources[0];
    void video.load();
    void video.play().catch(() => {});
  }, [index, sources]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || sources.length <= 1) return;

    const onEnded = () => {
      setIndex((current) => (current + 1) % sources.length);
    };

    const onError = () => {
      setIndex((current) => (current + 1) % sources.length);
    };

    video.addEventListener("ended", onEnded);
    video.addEventListener("error", onError);
    return () => {
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("error", onError);
    };
  }, [sources.length]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || sources.length !== 1) return;

    video.loop = true;
  }, [sources.length]);

  return (
    <video
      ref={videoRef}
      className="heroFilm"
      autoPlay
      muted
      playsInline
      poster={poster}
      aria-label={label}
    />
  );
}
