import React from 'react'
import { useLocation , useNavigate  } from 'react-router-dom'

export default function Details() {
    let navigate = useNavigate();
    let location = useLocation()
    console.log(location, "location ")
    let userdata = location.state;
    console.log(userdata, "userdata ")
  return (
    <div className='detailspage'>
    <h3 className='detailhead'> user Details </h3>
    <div className='details'> 
    <div className='titles'>
      <p>  <b> First Name : </b> </p>
  <p>  <b> Last Name : </b>  </p>
  <p>  <b> Email ID : </b>  </p>
  <p>  <b> Designation  : </b>  </p>
  <p>  <b> Office location  : </b>  </p>
  <p>  <b> Address : </b>  </p>
        </div>
        <div className='discription'>
        <p>   { userdata.Fname} </p>
  <p>   { userdata.Lname} </p>
  <p>   { userdata.Email} </p>
  <p>  { userdata.Design} </p>
  <p>  { userdata.Location} </p>
  <p>   { userdata.Address} </p>

        </div>
    </div>
      
     
  
<div className='gobackbutton'>
    <button className='gobackbtn'
     onClick={() => navigate("/")}> Go Back </button>
</div>

    </div>
  )
}


