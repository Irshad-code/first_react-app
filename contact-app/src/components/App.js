import React,{useState} from "react";
import './App.css';
import Header from "./Header";
import AddContact from"./AddContact";
import ContactList from "./ContactList";


const App =()=> {
  const[contacts,setContacts]=useState([]);
//   const contacts=[
// {
// id:"1",
// name:"irshad ev",
// email:"irshadev786@gmail.com"
// },
// {
//   id:"2",
//   name:"umma",
//   email:"ayishaap786@gmail.com"
//   },
//   ];
  return (
<div className="ui_container">
  <Header/>
  <AddContact/>
  <ContactList contacts={contacts}/>
</div>
  );
}

export default App;
