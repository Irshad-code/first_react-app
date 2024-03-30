import React from "react";
import styles from "./AddContacts.css"
class AddContact extends React.Component {
    render() {
        return (
            <div>
                <h2>Add Contact</h2>
                <form className="form">
                    <div className="field">
                        <label >Name</label>
                        <input type="text" name="name" placeholder="name" />
                    </div>
                    <div className="field">
                        <label >Email</label>
                        <input type="text" name="email" placeholder="email" /></div>
                <button className="ui button">Add</button>
                </form>
            </div>
        );
    }
}
export default AddContact;