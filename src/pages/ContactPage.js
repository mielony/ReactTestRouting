import React, {Component} from 'react';
import '../styles/ContactPage.css'


class ContactPage extends Component {
    state = { 
        value: "",
        email: "",
     } 

     handleFromChange = (e) => {
        if (e.target.type === "textarea") {
            this.setState({
                value: e.target.value,
            })
        }
        if (e.target.type === "email") {
            this.setState({
                email: e.target.value,
            })
        }
     }

     handleSendBtn = (e) => {
        e.preventDefault();
        this.setState({
            value:"",
            email:"",
        })
     }

    render() { 
        return (
            <form>
            <div className="mb-3">
                <label for="MessageInput" className="form-label">Send me a message.</label>
                <textarea 
                    className="form-control" 
                    value={this.state.value} 
                    onChange={this.handleFromChange} 
                    placeholder="Type your message here " />
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    name="email"
                    value={this.state.email} 
                    onChange={this.handleFromChange}
                    placeholder="enter your email address here"
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
            </form>
        );
    }
}
 
export default ContactPage;

