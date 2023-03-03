import "./LeftSidebar.css";
import { Users } from "../../dummyData";
import { FaCommentDots, FaVideo, FaUsers, FaBookmark, FaQuestion, FaBriefcase, FaCalendarWeek } from 'react-icons/fa';
import Message from "../Messages/Message";

export default function LeftSidebar(){
    return(
        <div id="leftSidebarContainer" className="leftSidebarContainer">
            <div className="leftsidebarWrapper">
                <ul className="list">
                    <li className="listitem">
                        <FaCommentDots className="listitemLogo"/>
                        <span className="listitemtext">Chats</span>
                    </li>

                    <li className="listitem">
                        <FaVideo className="listitemLogo"/>
                        <span className="listitemtext">Videos</span>
                    </li>

                    <li className="listitem">
                        <FaUsers className="listitemLogo"/>
                        <span className="listitemtext">Groups</span>
                    </li>

                    <li className="listitem">
                        <FaBookmark className="listitemLogo"/>
                        <span className="listitemtext">Bookmarks</span>
                    </li>

                    <li className="listitem">
                        <FaQuestion className="listitemLogo"/>
                        <span className="listitemtext">Questions</span>
                    </li>

                    <li className="listitem">
                        <FaBriefcase className="listitemLogo"/>
                        <span className="listitemtext">Jobs</span>
                    </li>

                    <li className="listitem">
                        <FaCalendarWeek className="listitemLogo"/>
                        <span className="listitemtext">Events</span>
                    </li>
                </ul>

                <button className="sidebarbutton">Show More</button>
                <hr className="sidebarhr" />

                <ul className="friendList">
                    <li className="Chats">Your Messages</li>
                    <hr className="sidebarhr"/>
                    {Users.map((u) => (
                        <Message key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
};