import React from "react";
import styles from "./ContactCard.css" 
import user from "../images/user.png"
const ContactCard=(props)=>{
    const{id,name,email}=props.contact;
return(
    <div className="item">
        
    <div className="content">
    <img className="userimg" src={user} alt="user"/>
   <div className="details">
   <div className="header">
    
    {name}
    </div>
    <div>{email}</div>
     </div>
   </div>
    <i class="fa-solid fa-trash-can"></i>
</div>
);
}
export default ContactCard;