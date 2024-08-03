// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="bg-container">
      <p className="journey">MY JOURNEY OF</p>
      <h1 className="ccbp">CCBP 4.0</h1>
      <div className="chrono-container">
        <Chrono mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(eachItem =>
            eachItem.categoryId === 'COURSE' ? (
              <CourseTimelineCard key={eachItem.id} items={eachItem} />
            ) : (
              <ProjectTimelineCard key={eachItem.id} items={eachItem} />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}

export default TimeLineView
