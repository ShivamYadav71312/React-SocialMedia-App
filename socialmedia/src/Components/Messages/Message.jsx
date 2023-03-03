import "./message.css";

export default function Message({user}){
    return(
        <li className="Friend">
        <img className="FriendPic" src={user.profilePicture} alt="Girl Pic" />
        <span className="FriendName">{user.username}</span>
    </li>
    )
};