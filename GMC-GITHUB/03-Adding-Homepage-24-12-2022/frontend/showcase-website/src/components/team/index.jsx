import { teamData } from "../../data"
import TeamItem from "./team-item"
const Team =()=>{
    return (
       <section className="team p-5">
  <div className="container">
    <h1 className="fw-bold text-center text-blue">Our team</h1>
    <div className="row mt-5">
        {teamData && teamData.length>0 ? teamData.map(item=>(
            <div key={item.id} className="col-md-4 mb-3">
                <TeamItem item={item} />
            </div>
        )) :"No data to show"}
      
    </div>
  </div>
</section>

    )
}

export default  Team