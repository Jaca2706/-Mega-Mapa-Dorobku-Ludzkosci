import { useEffect, useState } from "react"
import TimelineEvent from "./TimelineEvent"
import { assignLanes, generateYearSteps } from "./utils"
import "./timeline.css"

export default function Timeline({ events }) {
  const [scrollX, setScrollX] = useState(0)
  const [activeId, setActiveId] = useState(null)

  const validEvents = events.filter(e => e && e.startYear !== undefined)

  const minYear = Math.min(...validEvents.map(e => e.startYear))
  const maxYear = Math.max(...validEvents.map(e => e.endYear || e.startYear))

  const scale = 6

  const processed = assignLanes(validEvents)
  const { years } = generateYearSteps(minYear, maxYear)

  // 🔥 dynamiczna szerokość
  const totalWidth = (maxYear - minYear) * scale + 500

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault()
      setScrollX(prev => prev + e.deltaY)
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [])

  return (
    <div className="timeline-wrapper">
      <div className="timeline">
        <div
          className="timeline-inner"
          style={{
            width: totalWidth,
            transform: `translateX(${-scrollX}px)`
          }}
        >
          {/* GŁÓWNA OŚ */}
          <div className="timeline-line" />

          {/* LATA W OSI */}
          {years.map((y) => (
            <div
              key={y}
              className="year"
              style={{ left: (y - minYear) * scale }}
            >
              {y}
            </div>
          ))}

          {/* EVENTY */}
          {processed.map((event) => (
            <TimelineEvent
              key={event.id}
              event={event}
              scale={scale}
              minYear={minYear}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>
      </div>
    </div>
  )
}