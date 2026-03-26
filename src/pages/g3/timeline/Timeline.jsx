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

  const totalWidth = (maxYear - minYear) * scale + 800

  // 🔥 SCROLL KOŁKIEM
  useEffect(() => {
    const handleWheel = (e) => {
      if (e.target.closest(".event-content")) return // 🔥 blokada
      e.preventDefault()
      setScrollX(prev => prev + e.deltaY)
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [])

  // 🔥 SCROLL DO ROKU
  const scrollToYear = (year) => {
    const x = (year - minYear) * scale
    setScrollX(x - window.innerWidth / 2)
  }

  // 🔥 SCROLL DO EVENTU
  const scrollToEvent = (event) => {
    const x = (event.startYear - minYear) * scale
    setScrollX(x - window.innerWidth / 2)
  }

  return (
    <div className="timeline-wrapper">

      {/* 🔍 SEARCH */}
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
          style={{
            width: totalWidth,
            transform: `translateX(${-scrollX}px)`
          }}
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
              setActiveId={(id) => {
                const ev = processed.find(e => e.id === id)
                if (ev) scrollToEvent(ev)
                setActiveId(id)
              }}
            />
          ))}

        </div>
      </div>
    </div>
  )
}