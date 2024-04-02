import React,{useState} from "react";
import './App.css';
import Header from "./Header";
import AddContact from"./AddContact";
import ContactList from "./ContactList";


const App =()=> {
  const[contacts,setContacts]=useState([]);
 const addcontactHandler =(contact)=>{
  console.log(contact);
  setContacts([...contacts,contact]);
 }
 return (
<div className="ui_container">
  <Header/>
  <AddContact addcontactHandler={addcontactHandler}/>
  <ContactList contacts={contacts}/>
</div>
  );
}

export default App;
