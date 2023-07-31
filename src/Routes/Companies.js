import JoblyApi from './api.js'
import React, { useState, useEffect } from 'react';
import CompanyComponent from './CompanyComponent.js';
 function  Companies () {
    const[companies,setCompanies] = useState( null);


useEffect(function companiesLoad() {
    JoblyApi.getCompanies().then((result)=>{
        setCompanies(result.companies)
    }) 
},[])
    return(
        <div>
            {companies? companies.map((company) => (
            <CompanyComponent 
            key={company.handle}
            handle={company.handle} 
            name={company.name}
            description={company.description}
            logoUrl={company.logoUrl}
            numEmployees={company.numEmployees} />)) : <h2>Loading..........</h2>}
        </div>
    )
}
export default Companies;