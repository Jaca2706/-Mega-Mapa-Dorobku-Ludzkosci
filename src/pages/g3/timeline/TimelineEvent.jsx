import { useEffect, useRef } from "react"
import { clamp } from "./utils"

export default function TimelineEvent({
  event,
  scale,
  minYear,
  activeId,
  setActiveId
}) {
  const ref = useRef(null)

  if (!event || event.startYear === undefined) return null

  const isActive = activeId === event.id

  const x = (event.startYear - minYear) * scale

  const width = event.endYear
    ? (event.endYear - event.startYear) * scale
    : 0

  const isTop = event.lane % 2 === 0
  const laneIndex = Math.floor(event.lane / 2)
  const offset = laneIndex * 70

  // 🔥 kolor eventu
  const color = event.color || `hsl(${(event.id * 47) % 360}, 70%, 50%)`

  useEffect(() => {
    const update = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const center = window.innerWidth / 2
      const dist = Math.abs(rect.left + rect.width / 2 - center)

      const opacity = clamp(1 - dist / 600)
      const scaleVal = clamp(1 - dist / 2000, 0.85, 1)

      const box = ref.current.querySelector(".event-box")

      if (box) {
        box.style.opacity = opacity
        box.style.transform = `translateX(-50%) scale(${scaleVal})`
      }
    }

    update()
    window.addEventListener("wheel", update)
    return () => window.removeEventListener("wheel", update)
  }, [])

  return (
    <div
      ref={ref}
      className={`event ${isTop ? "top" : "bottom"}`}
      style={{
        left: x,
        top: isTop
          ? `calc(50% - ${20 + offset}px)`
          : `calc(50% + ${20 + offset}px)`
      }}
      onClick={() => setActiveId(isActive ? null : event.id)}
    >
      {/* DOT */}
      <div className="event-dot" style={{ borderColor: color }} />

      {/* POD-OŚ */}
      {event.endYear && (
        <div
          className="event-line"
          style={{
            width,
            background: color
          }}
        />
      )}

      {/* BOX */}
      <div
        className={`event-box ${isActive ? "active" : ""}`}
        style={{
          border: `2px solid ${color}`
        }}
      >
        <h4>{event.title}</h4>

        {event.images?.[0] && (
          <img src={event.images[0]} alt="" />
        )}

        {isActive && (
          <div className="event-content">
            <p>{event.description}</p>

            {event.images?.map((img, i) => (
              <img key={i} src={img} alt="" />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}