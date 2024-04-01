import React from "react";
// import styles from "./ContactList.css"
import ContactCard from "./ContactCard";
const ContactList =(props)=>{
    // console.log(props);
    const renderContactList=props.contacts.map((contact)=>{
        return(
           <ContactCard contact={contact}></ContactCard>
        );
    })
return( <div className="contact-list"> {renderContactList} </div>)

};

export default ContactList;