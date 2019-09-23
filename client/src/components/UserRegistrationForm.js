/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class UserRegistrationForm extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        register: {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            zipcode: ''
        }
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */

    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */

    handleInputValues = (evnt) => {
        let register = { ...this.state.register }

        register[evnt.target.name] = evnt.target.value

        this.setState({ register })
    }
    handleSubmit = (evnt) => {
        evnt.preventDefault()
        console.log(this.state)
        this.props.addNewRegister(this.state.register)
    }
    render() {
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>Registration</h1>
                <form onSubmit={this.handleSubmit} >
                    <label>Username:</label>
                    <input type="text" name="username" onChange={this.handleInputValues}/><br></br>
                    <label>Password:</label>
                    <input type="text" name="password" onChange={this.handleInputValues}/><br></br>
                    <label>First Name:</label>
                    <input type="text" name="firstname" onChange={this.handleInputValues}/><br></br>
                    <label>Last Name:</label>
                    <input type="text" name="lastname" onChange={this.handleInputValues}/><br></br>
                    <label>E-mail:</label>
                    <input type="text" name="email" onChange={this.handleInputValues}/><br></br>
                    <label>Phone:</label>
                    <input type="text" name="phone" onChange={this.handleInputValues}/><br></br>
                    <label>Zip Code:</label>
                    <input type="text" name="zipcode" onChange={this.handleInputValues}/><br></br>
                    <input type="submit" value="register" />


                </form>
            </div>
        )
    }
}
