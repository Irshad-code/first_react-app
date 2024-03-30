import React from "react";
import styles from "./ContactList.css"
const ContactList =(props)=>{
    console.log(props);
    const renderContactList=props.contacts.map((contact)=>{
        return(
            <div className="item">
                <div className="content">
               <div className="header">
               {contact.name}
               </div>
               <div>{contact.email}</div>
                </div>
                <i class="fa-solid fa-trash-can"></i>
                {/* <FontAwesomeIcon icon={faTrash} /> */}
                
                
            </div>
        );
    })
return( <div className="contact-list"> {renderContactList} </div>)

};

export default ContactList;