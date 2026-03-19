import { useEffect, useRef, useState } from "react"
import { clamp } from "./utils"

export default function TimelineEvent({
  event,
  scale,
  minYear,
  activeId,
  setActiveId
}) {
  const ref = useRef()
  const [style, setStyle] = useState({})

  const isActive = activeId === event.id

  const x = (event.startYear - minYear) * scale
  const width = event.endYear
    ? (event.endYear - event.startYear) * scale
    : 0

  const isTop = event.lane % 2 === 0
  const offset = Math.floor(event.lane / 2) * 140

  useEffect(() => {
    const update = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const center = window.innerWidth / 2
      const dist = Math.abs(rect.left + rect.width / 2 - center)

      const opacity = clamp(1 - dist / 600)
      const scaleVal = clamp(1 - dist / 2000, 0.8, 1)

      setStyle({
        opacity,
        transform: `scale(${scaleVal})`
      })
    }

    update()
    window.addEventListener("wheel", update)

    return () => window.removeEventListener("wheel", update)
  }, [])

  return (
    <div
      ref={ref}
      className="event"
      style={{
        left: x,
        top: isTop ? -offset - 100 : offset + 100,
        ...style
      }}
      onClick={() => setActiveId(isActive ? null : event.id)}
    >
      <div className="event-dot" />

      {event.endYear && (
        <div className="event-line" style={{ width }} />
      )}

      <div className={`event-box ${isActive ? "active" : ""}`}>
        <h4>{event.title}</h4>

        {event.images?.[0] && <img src={event.images[0]} />}

        {isActive && (
          <div className="event-content">
            <p>{event.description}</p>

            {event.images?.map((img, i) => (
              <img key={i} src={img} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}