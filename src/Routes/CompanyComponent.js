import { Link } from "react-router-dom";
import "./CompanyComponent.css"

function CompanyComponent ({handle,name,description,logoUrl,numEmployees}) {

    return (
   
        <div className="company_component" > 
        <Link to={`/company/${handle}`}style={{textDecorationLine:'none', color:'black'}} >
            <h2 >{name}</h2>
            <p>{description}</p>
            {logoUrl?<img src={window.location.protocol + '//localhost:3001' + logoUrl}
             alt="URL" 
             style={{width:'50px'}}/>:<p>No logo</p>}
            <p>Number of employees:{numEmployees}</p>        
      
        </Link>  
        </div>
    )
}

export default CompanyComponent;