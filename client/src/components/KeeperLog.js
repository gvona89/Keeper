/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
import LogForm from './LogForm.js'
import UserRegistration from './UserRegistrationForm.js'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */





export default class KeeperLog extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        KeeperLog: {
            hives:
                [{
                    name: "glenn",
                    imageLink: "url"
                }],
            log:
                [{
                    userId: "gvona89",
                    timeStamp: "11:11:11",
                    yearNumber: 9,
                    weekNumber: 1,
                    dayNumber: 1,
                    boxType: "Deep",
                    boxNumber: 1,
                    frameNumber: 5,
                    comments: "Transferred 5 nuc frames into main hive"
                },
                {
                    userId: "ablaine90",
                    timeStamp: "11:11:11",
                    yearNumber: 6,
                    weekNumber: 1,
                    dayNumber: 1,
                    boxType: "Deep",
                    boxNumber: 1,
                    frameNumber: 5,
                    comments: "Transferred 5 nuc frames into main hive"

                }],
            users:
                [{
                    userName: "gvona89",
                    password: "password",
                    firstName: "glenn",
                    lastName: "vona",
                    email: "gvona89@gmail.com",
                    phone: 404 - 643 - 7264,
                    zipCode: 30314
                }],
        },
        registration: false
    }
    componentDidMount = () => {
        this.getLogFromServer()
    }
    getLogFromServer = () => {
        console.log('getLogFromServer run')
        fetch('/log')
        .then(res => res.json())
        .then(keeperLogs => {
            this.setLogList(keeperLogs)
        })
        console.log(fetch('/log').then(res => res.json()))
    }

    setLogList = (list) => {
        console.log('setLogList - list', list)
        let keeperLog = {...this.state}

        keeperLog.KeeperLog.log = list

        this.setState(keeperLog)
    }
    sendNewLogToServer = (newLog) => {
        fetch('/log', 
        {
            method: 'POST',
            body: JSON.stringify(newLog),
            headers: {'Content-Type' : 'application/json'}
        })
        .then(() => this.getLogFromServer())
    }


    toggleRegistration = () => {
        const registration = !this.state.registration
        this.setState({ registration })
    }

    newLogInfo = (newInfo) => {
        let KeeperLog = { ...this.state.KeeperLog }

        KeeperLog.log.push(newInfo)

        this.setState({ KeeperLog })
    }
    newRegistrationInfo = (newInfo) => {
        let KeeperLog = { ...this.state.KeeperLog }

        KeeperLog.users.push(newInfo)

        this.setState({ KeeperLog })
    }

    render() {
        console.log(this.state.KeeperLog)
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>Keeper Log</h1>

                {this.state.KeeperLog.log.map(log => {
                    return (
                        <div class="log">
                            <p>User: {log.userId}</p>
                            <p>Year No. : {log.yearNumber}</p>
                            <p>Week No. : {log.weekNumber}</p>
                            <p>Day No. : {log.dayNumber}</p>
                            <p>Box Type : {log.boxType}</p>
                            <p>Box No. : {log.boxNumber}</p>
                            <p>Frame No. : {log.frameNumber}</p>
                            <p>Comments : {log.comments}</p>
                        </div>
                    )
                })}

                <LogForm
                    addNewLog={this.sendNewLogToServer} />
                <button onClick={this.toggleRegistration}>Admin</button>

                {this.state.registration ? <UserRegistration addNewRegister={this.newRegistrationInfo} /> : null}


            </div>
        )
    }
}
