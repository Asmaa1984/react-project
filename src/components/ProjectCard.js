
export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="proj-box">
        <img src={imgUrl} alt="project img" />
          <div className="proj-txt">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>

      </div>
        
    </div>
      )
}