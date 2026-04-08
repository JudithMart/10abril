"use client";

import { createPortal } from "react-dom";

export function VideoOverlay({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  if (!show) return null;

  const root = document.getElementById("video-root");
  if (!root) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "black",
        zIndex: 999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <video
        src="/video.mp4"
        autoPlay
        muted
        controls
        playsInline
        style={{
          maxWidth: "90vw",
          maxHeight: "90vh",
        }}
      />

      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          fontSize: 32,
          color: "white",
        }}
      >
        ×
      </button>
    </div>,
    root
  );
}