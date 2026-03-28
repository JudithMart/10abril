"use client"

interface PixelCloudProps {
  className?: string
  style?: React.CSSProperties
}

export function PixelCloud({ className = "", style = {} }: PixelCloudProps) {
  return (
    <div
      className={`cloud-drift ${className}`}
      style={{
        position: "absolute",
        width: "140px",
        height: "45px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "25px 0 0 white, 50px 0 0 white, 12px -14px 0 white, 35px -14px 0 white",
        zIndex: 1,
        ...style,
      }}
    />
  )
}