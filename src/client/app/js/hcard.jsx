import React from 'react';

function Update(props) {
  return (
    <div className="details">
      <div className="card">
        <h2>Hcard Preview</h2>
        <div className="header">
          <div className="fullname">
            {props.name} {props.surname}  
          </div>
          <div id="avatar"><img src="./public/images/default_profile.jpg" /></div>
        </div>
        <div className="body">
          <div> 
            <label>Email</label>
            {props.email} 
          </div>
          <div>
            <label>Phone</label>
            {props.phone} 
          </div>
          <div> 
            <label>Address</label>
            {props.house} {props.street}
          </div>
          <div className="col-md-6">
            {props.suburb}
          </div>
          <div className="col-md-6">
            ,{props.state}
          </div>
          <div className="col-md-6"> 
            <label>Postcode</label>
            {props.postcode} 
          </div>
          <div className="col-md-6">
            <label>Country</label>
            {props.country}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Update;