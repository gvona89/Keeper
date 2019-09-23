import React, { Component } from 'react'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class LogForm extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        log: {
            userId: "",
            timeStamp: "",
            yearNumber: 0,
            weekNumber: 0,
            dayNumber: 0,
            boxType: "",
            boxNumber: 0,
            frameNumber: 0,
            comments: ""
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
        let log = { ...this.state.log }

        log[evnt.target.name] = evnt.target.value

        this.setState({ log })
    }
    handleSubmit = (evnt) => {
        evnt.preventDefault()
        console.log(this.state)
        this.props.addNewLog(this.state.log)
    }
    render() {
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                {/* <h1>Log Form</h1> */}
                <form onSubmit={this.handleSubmit} >
                    <label>User:</label>
                    <input type="text" name="userId" onChange={this.handleInputValues} /><br></br>
                    {/* <label>Time:</label>
                    <input type="time" name="timeStamp" onChange={this.handleInputValues} /><br></br> */}
                    <label>Year:</label>
                    <input type="number" name="yearNumber" onChange={this.handleInputValues} /><br></br>
                    <label>Week:</label>
                    <input type="number" name="weekNumber" onChange={this.handleInputValues} /><br></br>
                    <label>Day:</label>
                    <input type="number" name="dayNumber" onChange={this.handleInputValues} /><br></br>
                    <label>Box Type:</label>
                    <select name="boxType" onChange={this.handleInputValues}>
                        <option value="Super">Super</option>
                        <option value="Shallow">Shallow</option>
                        <option value="Mid">Mid</option>
                        <option value="Deep">Deep</option>
                        <option value="Nuc">Nuc</option>
                    </select><br></br>
                    <label>Box:</label>
                    <input type="number" name="boxNumber" onChange={this.handleInputValues} /><br></br>
                    <label>Frame:</label>
                    <input type="number" name="frameNumber" onChange={this.handleInputValues} /><br></br>
                    <label>Comments:</label>
                    <input type="text" name="comments" onChange={this.handleInputValues} /><br></br>
                    <input type="submit" value="Add" />


                </form>
            </div>
        )
    }
}