import React, { Component } from 'react';

class LogInDetails extends Component<any,any> {
    constructor(props:any){
        super(props);
        this.state= {firstName:"chaitali" , lastName:"Upadhyay"};
    }

    render() {
        return (
            <div>
                <form>
                    <label>First name:</label>
                    <input type="text" id="fname" name="fname" value={this.state.firstName} />
                    <label>Last name:</label>
                    <input type="text" id="lname" name="lname" value={this.state.lastName} />
                    <input type="submit" value="Submit" />

                </form>
            </div>
        )
    }
}

export default LogInDetails;
