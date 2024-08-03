import React from "react";
import person from "./assets/person.png";

const ContactCard = (props) =>{
    const {id,name,email} = props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" src={person} alt="user" />
          <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
            <i className="trash alternate outline icon" 
         style={{color:"grey", marginLeft:"1000px", marginTop:"0px"}}></i>
          </div>
         
       </div>
    );
}
export default ContactCard