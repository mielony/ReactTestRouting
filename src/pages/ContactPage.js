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
        if (e.target.type === "text") {
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
            <div className="contact">
                <form onSubmit={this.handleSendBtn} >
                    <h2>Send me a message.</h2>
                    <textarea 
                        value={this.state.value} 
                        onChange={this.handleFromChange} 
                        placeholder="Type your message here " 
                    />
                    <br />
                    <label>
                        Leave your email: 
                        <input 
                            type="text" 
                            name="email" 
                            value={this.state.email} 
                            onChange={this.handleFromChange}
                            placeholder="enter your email address here"
                        />
                    </label>
                    <br />
                    <button >Send</button>
                </form>
                
            </div>
        );
    }
}
 
export default ContactPage;

