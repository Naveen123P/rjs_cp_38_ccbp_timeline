// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'
import '../ProjectTimelineCard/index.css'

const CourseTimelineCard = props => {
  const {items} = props
  const {courseTitle, description, duration, tagsList} = items
  return (
    <div className="course-container">
      <div className="title-con">
        <h1 className="courseTitle">{courseTitle}</h1>
        <div className="calender-con">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      {tagsList.map(item => (
        <button key={item.id} type="button" className="button">
          {item.name}
        </button>
      ))}
    </div>
  )
}

export default CourseTimelineCard
