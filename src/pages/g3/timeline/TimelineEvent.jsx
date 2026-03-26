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

  // 🔥 większy dystans boxów
  const offset = laneIndex * 120 + 60

  const color = event.color || `hsl(${(event.id * 47) % 360}, 70%, 50%)`

  useEffect(() => {
    const update = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const center = window.innerWidth / 2
      const dist = Math.abs(rect.left + rect.width / 2 - center)

      const opacity = isActive ? 1 : clamp(1 - dist / 600)
      const scaleVal = isActive ? 1.05 : clamp(1 - dist / 2000, 0.85, 1)

      const box = ref.current.querySelector(".event-box")

      if (box) {
        box.style.opacity = opacity
        box.style.transform = `translateX(-50%) scale(${scaleVal})`
      }
    }

    update()
    window.addEventListener("wheel", update)
    return () => window.removeEventListener("wheel", update)
  }, [isActive])

  return (
    <div
      ref={ref}
      className={`event ${isTop ? "top" : "bottom"} ${isActive ? "active" : ""}`}
      style={{
        left: x,
        top: isTop
          ? `calc(50% - ${offset}px)`
          : `calc(50% + ${offset}px)`
      }}
      onClick={() => setActiveId(isActive ? null : event.id)}
    >
      <div className="event-dot" style={{ borderColor: color }} />

      {event.endYear && (
        <div
          className="event-line"
          style={{ width, background: color }}
        />
      )}

      {/* BOX */}
      <div
        className={`event-box ${isActive ? "active" : ""}`}
        style={{
          border: `2px solid ${color}`,
          backgroundImage: !isActive && event.images?.[0]
            ? `url(${event.images[0]})`
            : "none"
        }}
      >
        <div className="event-header">
          <h4>{event.title}</h4>
          <span className="years">
            {event.startYear}
            {event.endYear ? ` - ${event.endYear}` : ""}
          </span>
        </div>

        {isActive && (
          <div className="event-content">
            {event.images?.[0] && (
              <img src={event.images[0]} alt="" />
            )}

            <p>{event.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}