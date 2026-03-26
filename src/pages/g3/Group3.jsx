import Timeline from "./timeline/Timeline"
import { timelineData } from "../../baza/timelineData"

export default function Group3() {
  return (
    <div style={{ height: "100vh" }}>
      <Timeline events={timelineData} />
    </div>
  )
}