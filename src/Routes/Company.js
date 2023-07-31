import JoblyApi from './api.js'
import {useParams} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CompanyComponent from './CompanyComponent.js';

import JobComponent from "./JobComponent";
 function  Company () {
    const[company,setCompany] = useState( null);
    const{handle}=useParams();


useEffect(function companyChange() {
    JoblyApi.getCompany(handle).then((result)=>{
        setCompany({
        handle:result.handle,
        des:result.description,
        jobs:result.jobs,
        logoUrl:result.logoUrl,
        name:result.name,
        numEmployees:result.numEmployees,
    })
})
    
},[handle])
    return(
        <div>
            {company? <CompanyComponent 
            handle={company.handle} 
            name={company.name}
            description={company.description}
            jobs={company.jobs}
            logoUrl={company.logoUrl}
            numEmployees={company.numEmployees} /> : <h2>Loading..........</h2>}
            {company? <JobComponent jobs={company.jobs} handle={company.handle} />: <h2>Loading..........</h2>}
        </div>
    )
}
export default Company;