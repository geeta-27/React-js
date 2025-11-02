import PropTypes, { string } from "prop-types";
function UserGreeting(props){
    // if(props.isLoggedIn){
    //    return <h2>Welcome {props.username} </h2>
    // }
    // else{
    //     return <h2>Please do login to continue</h2>
    // }

    // return(
    //     props.isLoggedIn ? <h2>Welcome {props.username} : Please do login to Continue</h2>
    // );

    const welcomemessage=<h2 className="welcome-mesage">Welcome {props.username}</h2>

    const loginprompt=<h2 className="login-prompt">Please do login to Continue</h2>

    return(props.isLoggedIn ? welcomemessage : loginprompt);
}
UserGreeting.proptypes={
    isLoggedIn:PropTypes.bool,
    username:string
}
UserGreeting.defaultProps={
    isLoggedIn:false,
    username:"Guest",
}
export default UserGreeting