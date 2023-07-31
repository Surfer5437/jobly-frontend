import { Link } from "react-router-dom";
import "./JobComponent.css"
import JoblyApi from "./api";
import { useEffect, useState } from "react";
function JobComponent ({jobs, handle=undefined}) {
    const[applications,setApplications] = useState([])

    useEffect(function profileLoad() {
if(localStorage.getItem('username')){
    JoblyApi.getCurrentUser(localStorage.getItem('username')).then((result)=>{
           setApplications(result.user.applications)
        }) 
    }},[])
    function applyToJob (id){
        JoblyApi.applyToJob(localStorage.getItem('username'),id)
        
    }

    function applyBtnComponent(jobIdFromComponent) {
        if(applications.includes(jobIdFromComponent)===false){
            return (<button className="applyBtn" onClick={(e)=>{applyToJob(jobIdFromComponent);
                e.target.disabled = true;}}>Apply</button>)
        }else {
            return(
        <button className="applyBtn" disabled={true}>Applied</button>
        )
        }


        
    }
    return (
        <div className="job_component">
            <h3 style={{color:'whitesmoke'}}>{jobs.length}{jobs.length>1 ?  ` Jobs available.`:` Job available.` }</h3>
            <ul style={{padding:'0', justifyContent:'center', alignItems: 'center'}}>
            {jobs.map((job) => (
                
                <div className="job_list" key={job.id}>
                <Link to={handle!==undefined ? `/company/${handle}` : `/company/${job.companyHandle}`}style={{textDecorationLine:'none', color:'black'}} >
                <li style={{fontWeight:'bolder'}}>{job.title}</li>
                <p className="job_salary same">{job.salary?`Salary is: $${job.salary}/Year`:`No salary listed`}</p>
                <p className="job_equity same">{job.equity?`Equity is: ${job.equity}`:`No equity listed`}</p>
            </Link>
            <div>
            {localStorage.getItem('username') ?applyBtnComponent(job.id):null}
            </div>
            </div>
            ))}
            </ul>
        </div>
    )
}

export default JobComponent;