import "./OnlineFriends.css";

export default function onlineFriends({user}){
    return( 
        <li className="friends">
            <img src={user.profilePicture} className="friendPic" alt="Girl Pic" />
            <span className="activeOnline"></span>
            <span className="friendName">{user.username}</span>
        </li>       
    )
};