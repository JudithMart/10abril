"use client"

export function PixelCloud({ className = "", style = {} }) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        width: "120px",
        height: "40px",
        background: "white",
        borderRadius: "8px",
        boxShadow: "20px 0 white, 40px 0 white, 10px -10px white",
        ...style,
      }}
    />
  )
}