import { useEffect, useState } from "react";
import JoblyApi from "./api";
import JobComponent from "./JobComponent";

function  Jobs () {
    const[jobs,setJobs] = useState( null);

    useEffect(function companiesLoad() {
        JoblyApi.getJobs().then((result)=>{
            setJobs(result.jobs)
        }) 
    },[])

    return(
        <div>
            {jobs? 
            <JobComponent jobs={jobs} /> : 
            <h2>Loading..........</h2>}
        </div>
    )
}

export default Jobs;
