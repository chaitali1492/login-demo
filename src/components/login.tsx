import React, {useState} from 'react';

const LogIn = () => {
    const[logInDetails, setLogInDetails] = useState({firstName: "chaitali", lastName: "pathak"});
    const changeFirstName = (event:any) =>{
        // console.log(event);
        setLogInDetails({...logInDetails, firstName:event.target.value});
    }
    const changeLastName = (event:any) =>{
        setLogInDetails({...logInDetails, lastName:event.target.value});
    }
    React.useEffect(
        ()=>{
            console.log(logInDetails);
        },[logInDetails]

    )
    return (
        <div>
            <form>
                <label>First name:</label>
                <input type="text" id="fname" name="fname" value={logInDetails.firstName} onChange={changeFirstName} />
                <label>Last name:</label>
                <input type="text" id="lname" name="lname" value={logInDetails.lastName} onChange={changeLastName} />
                <input type="submit" value="Submit" />

            </form>
        </div>
    )
};

export default LogIn;