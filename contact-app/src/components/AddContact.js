import React from "react";
import styles from "./AddContacts.css"
class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    };
    add=(e)=>{
        e.preventDefault();
        if(this.state.name === "" && this.state.email === ""){
            alert("All are compelserry");
            return
        }
        console.log(this.state);
    }
   
    render() {
        return (
            <div>
                <h2>Add Contact</h2>
                <form className="form" onSubmit={this.add}>
                    <div className="field">
                        <label >Name</label>
                        <input type="text" 
                        name="name" 
                        placeholder="name" 
                        value={this.state.name}
                        onChange={(e)=>this.setState({name:e.target.value})} />
                    </div>
                    <div className="field">
                        <label >Email</label>
                        <input type="text" 
                        name="email" 
                        placeholder="email"
                        value={this.state.email}
                        onChange={(e)=>this.setState({email:e.target.value})} /></div>
                    <button className="ui button">Add</button>
                </form>
            </div>
        );
    }
}
export default AddContact;