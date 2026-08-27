"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const FADE_MS = 2200;
const FADE_LEAD_SEC = 2.2;

type HeroFilmProps = {
  sources: string[];
  poster: string;
  label: string;
};

type Layer = "a" | "b";

export default function HeroFilm({ sources, poster, label }: HeroFilmProps) {
  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);
  const [visibleLayer, setVisibleLayer] = useState<Layer>("a");
  const [activeLayer, setActiveLayer] = useState<Layer>("a");
  const sourceIndexRef = useRef(0);
  const transitioningRef = useRef(false);

  const getVideo = useCallback((layer: Layer) => {
    return layer === "a" ? videoA.current : videoB.current;
  }, []);

  useEffect(() => {
    if (sources.length === 0) return;

    const first = getVideo("a");
    const second = getVideo("b");
    if (!first) return;

    sourceIndexRef.current = 0;
    transitioningRef.current = false;
    setVisibleLayer("a");
    setActiveLayer("a");

    first.src = sources[0];
    first.loop = sources.length === 1;
    first.currentTime = 0;
    void first.load();
    void first.play().catch(() => {});

    if (second) {
      second.removeAttribute("src");
      second.load();
    }
  }, [getVideo, sources]);

  const crossfadeToNext = useCallback(async () => {
    if (sources.length <= 1) {
      transitioningRef.current = false;
      return;
    }

    const currentLayer = activeLayer;
    const nextLayer: Layer = currentLayer === "a" ? "b" : "a";
    const currentVideo = getVideo(currentLayer);
    const nextVideo = getVideo(nextLayer);
    if (!currentVideo || !nextVideo) {
      transitioningRef.current = false;
      return;
    }

    transitioningRef.current = true;

    const nextIndex = (sourceIndexRef.current + 1) % sources.length;
    nextVideo.src = sources[nextIndex];
    nextVideo.loop = false;
    nextVideo.currentTime = 0;

    try {
      nextVideo.load();
      await nextVideo.play();
    } catch {
      sourceIndexRef.current = nextIndex;
      setVisibleLayer(nextLayer);
      setActiveLayer(nextLayer);
      transitioningRef.current = false;
      return;
    }

    setVisibleLayer(nextLayer);

    window.setTimeout(() => {
      currentVideo.pause();
      sourceIndexRef.current = nextIndex;
      setActiveLayer(nextLayer);
      transitioningRef.current = false;
    }, FADE_MS);
  }, [activeLayer, getVideo, sources]);

  useEffect(() => {
    if (sources.length <= 1) return;

    const video = getVideo(activeLayer);
    if (!video) return;

    const onTimeUpdate = () => {
      if (transitioningRef.current || !Number.isFinite(video.duration)) return;

      const remaining = video.duration - video.currentTime;
      const lead = Math.min(FADE_LEAD_SEC, Math.max(video.duration * 0.12, 0.5));

      if (remaining <= lead && remaining > 0.05 && !transitioningRef.current) {
        transitioningRef.current = true;
        void crossfadeToNext();
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    return () => video.removeEventListener("timeupdate", onTimeUpdate);
  }, [activeLayer, crossfadeToNext, getVideo, sources.length]);

  const layerClass = (layer: Layer) =>
    layer === visibleLayer ? "heroFilm isVisible" : "heroFilm";

  return (
    <div className="heroFilmStack" aria-label={label} role="img">
      <video
        ref={videoA}
        className={layerClass("a")}
        autoPlay
        muted
        playsInline
        poster={poster}
        aria-hidden={visibleLayer !== "a"}
      />
      <video
        ref={videoB}
        className={layerClass("b")}
        muted
        playsInline
        aria-hidden={visibleLayer !== "b"}
      />
    </div>
  );
}
