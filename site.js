const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");

window.addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("scrolled", window.scrollY > 24);
  },
  { passive: true }
);

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

function mountVideo(container, src) {
  const video = document.createElement("video");
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.autoplay = true;
  video.setAttribute("aria-hidden", "true");
  video.addEventListener("error", () => {
    video.remove();
    container.classList.remove("has-video");
  });
  video.addEventListener("loadeddata", () => {
    container.classList.add("has-video");
    const flag = container.querySelector(".slot-flag");
    if (flag) flag.textContent = "Drone film";
  });
  video.src = src;
  const shade = container.querySelector(".hero-shade");
  if (shade) container.insertBefore(video, shade);
  else container.appendChild(video);
  video.play().catch(() => {});
}

async function attachVideo(container) {
  const src = container.dataset.video;
  if (!src) return;

  try {
    const response = await fetch(src, { method: "HEAD" });
    if (response.status === 404) return;
  } catch {
    // Some hosts reject HEAD. Try the file; the video error handler cleans up misses.
  }

  mountVideo(container, src);
}

document.querySelectorAll("[data-video]").forEach(attachVideo);
