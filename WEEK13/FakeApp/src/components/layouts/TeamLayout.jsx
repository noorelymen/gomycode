import Team from "../Team"
import { team } from '../../data/team.js'
import React from "react"

const TeamLayout = () => {
    return (
            <div className="team p-5">
                <div className="container">
                    <h1 className="fw-bold text-center text-blue">Our team</h1>
                    <div className="row mt-5">
                        {team ? team.map(item =>{
                            return(
                            <div className="col-md-4 mb-3" key={item.id}> 
                                < Team item={item} />
                            </div>
                            )
                            }) : "No Data"} 

                    </div>
                </div>
            </div>
    )
}

export default TeamLayout