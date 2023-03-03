import "./ToggleLeftSideBar.css";
import { FaCommentDots, FaVideo, FaUsers, FaBookmark, FaQuestion, FaBriefcase, FaCalendarWeek } from 'react-icons/fa';

export default function ToggleLeftSideBar({active}){
    return(
        <div activeHandler  className={active ? "toggleLeftSideBarContainerOpen" : "toggleLeftSideBarContainer"}>
            <div className="toggleleftsidebarWrapper">

                <ul className="toggleList">
                    <li className="toggleListItem">
                        <FaCommentDots className="toggleListItemLogo"/>
                        <span className="toggleListItemText">Chats</span>
                    </li>

                    <li className="toggleListItem">
                        <FaVideo className="toggleListItemLogo"/>
                        <span className="toggleListItemText">Videos</span>
                    </li>

                    <li className="toggleListItem">
                        <FaUsers className="toggleListItemLogo"/>
                        <span className="toggleListItemText">Groups</span>
                    </li>

                    <li className="toggleListItem">
                        <FaBookmark className="toggleListItemLogo"/>
                        <span className="toggleListItemText">Bookmarks</span>
                    </li>

                    <li className="toggleListItem">
                        <FaQuestion className="toggleListItemLogo"/>
                        <span className="toggleListItemText">Questions</span>
                    </li>

                    <li className="toggleListItem">
                        <FaBriefcase className="toggleListItemLogo"/>
                        <span className="toggleListItemText">Jobs</span>
                    </li>

                    <li className="toggleListItem">
                        <FaCalendarWeek className="toggleListItemLogo"/>
                        <span className="toggleListItemText">Events</span>
                    </li>
                </ul>

                <button className="togglesidebarbutton">Show More</button>
            </div>
        </div>
    )
};