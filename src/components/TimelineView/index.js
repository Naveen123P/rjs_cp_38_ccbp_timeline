// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props
  const itemsTitle = timelineItemsList.map(eachObject => ({
    title: eachObject.title,
  }))
  console.log(itemsTitle)
  // {/* const courseObject = {title: eachItem.title, cardTitle: eachItem.courseTitle, cardSubTitle: eachItem.duration, cardDetailedText:[eachItem.description, eachItem.tagsList]} */}

  return (
    <div className="bg-container">
      <h1 className="journey">
        MY JOURNEY OF <span className="ccbp">CCBP 4.0</span>
      </h1>
      <div className="chrono-container">
        <Chrono mode="VERTICAL_ALTERNATING" items={itemsTitle}>
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
