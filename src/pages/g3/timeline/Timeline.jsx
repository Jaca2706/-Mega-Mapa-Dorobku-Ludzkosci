import { useEffect, useState } from "react"
import TimelineEvent from "./TimelineEvent"
import { assignLanes, generateYearSteps } from "./utils"
import "./timeline.css"

export default function Timeline({ events }) {
  const [scrollX, setScrollX] = useState(0)
  const [activeId, setActiveId] = useState(null)

  const minYear = Math.min(...events.map(e => e.startYear))
  const maxYear = Math.max(...events.map(e => e.endYear || e.startYear))

  const scale = 5

  const processed = assignLanes(events)
  const { years } = generateYearSteps(minYear, maxYear)

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault()
      setScrollX(prev => prev + e.deltaY)
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [])

  const scrollToYear = (year) => {
    const x = (year - minYear) * scale
    setScrollX(x)
  }

  return (
    <div className="timeline-wrapper">

      <div className="controls">
        <input
          type="number"
          placeholder="rok..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              scrollToYear(Number(e.target.value))
            }
          }}
        />
      </div>

      <div className="timeline">
        <div
          className="timeline-inner"
          style={{ transform: `translateX(${-scrollX}px)` }}
        >

          <div className="timeline-line" />

          {years.map((y) => (
            <div
              key={y}
              className="year"
              style={{ left: (y - minYear) * scale }}
            >
              {y}
            </div>
          ))}

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