
function User(props){
  return(
    <>
    <div className="card-container">
    <span className={props.online?"pro online":"pro offline"}>{props.online?"Online":"Offline"}</span>
    <img className='img' src={props.profile} alt="User picture" />
    <h4 className="name">{props.name}</h4>
    <h4 className="possition">{props.post}</h4>
    <h4 className="branch">{props.branch}</h4>
    <div className="button">
      <button className="buttonA">Message</button>
      <button className="buttonA following">Following</button>
    </div>
    <div className="skills">
      <h5>Skills</h5>
      <ul>
        {props.skills.map((skill,index)=>(
          <li key={index}>{skill}</li>
        ))}
      </ul>
      </div>
      </div>
    </>
  );
  
}

export const IdCard = () => {
  return (<>
      <User name="Japan" post="Front-End Developer" branch="Colombo" skills={["Front end development","Full Stack Development","HTML","CSS","Javascript","Bootstrap","React","Phyton"]} profile="/images/66.jpg" online={false}/>
      <User name="Japan" post="Front-End Developer" branch="Jakarta" skills={["Front end development","Full Stack Development","HTML","CSS","Javascript","Bootstrap","React","Phyton"]} profile="/images/66.jpg" online={true}/>
      <User name="Japan" post="Front-End Developer" branch="Mumbai" skills={["Front end development","Full Stack Development","HTML","CSS","Javascript","Bootstrap","React","Phyton"]} profile="/images/66.jpg" online={true}/>
      <User name="Japan" post="Front-End Developer" branch="Lahore" skills={["Front end development","Full Stack Development","HTML","CSS","Javascript","Bootstrap","React","Phyton"]} profile="/images/66.jpg" online={false}/>
      </>
  );

};