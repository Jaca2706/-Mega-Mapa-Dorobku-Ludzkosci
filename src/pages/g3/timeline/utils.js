export const clamp = (val, min = 0, max = 1) =>
  Math.max(min, Math.min(max, val))

export const generateYearSteps = (min, max) => {
  const range = max - min

  let step = 100
  if (range < 200) step = 10
  else if (range < 1000) step = 50
  else if (range < 5000) step = 100
  else step = 500

  const years = []
  for (let y = Math.ceil(min / step) * step; y <= max; y += step) {
    years.push(y)
  }

  return { step, years }
}

export const assignLanes = (events) => {
  const lanes = []
  const sorted = [...events].sort((a, b) => a.startYear - b.startYear)

  return sorted.map((event) => {
    let lane = 0

    while (true) {
      if (!lanes[lane]) {
        lanes[lane] = []
        break
      }

      const last = lanes[lane][lanes[lane].length - 1]

      if (!last || event.startYear > (last.endYear || last.startYear)) {
        break
      }

      lane++
    }

    lanes[lane].push(event)

    return { ...event, lane }
  })
}