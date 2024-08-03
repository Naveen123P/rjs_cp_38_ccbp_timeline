// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {items} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = items
  return (
    <div className="course-container">
      <div className="img-con">
        <img src={imageUrl} alt="project" className="image" />
      </div>
      <div className="title-con">
        <h1 className="title">{projectTitle}</h1>
        <div className="calender-con">
          <AiFillCalendar className="calender" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="projectUrl">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
