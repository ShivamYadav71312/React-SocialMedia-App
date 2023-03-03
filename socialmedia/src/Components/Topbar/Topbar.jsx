import "./Topbar.css";
import { FaUser, FaBell, FaComment, FaSearch, FaToggleOn, FaBars, FaTimes } from 'react-icons/fa';


export default function Topbar({click, active}){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <FaBars onClick={click} className={active ? "NavLogoOpenHide" : "NavLogoOpen"}/>
                <FaTimes onClick={click} className={active ? "NavLogoCloseHide" : "NavLogoClose"}/>
                <span className="logo">SocialMedia</span>
            </div>

            <div className="topbarCenter">
                <div className="Searchbar">
                    <FaSearch className="searchIcon"/>
                    <input type="search" id="" className="searchInput" placeholder="Search for Friends/Post/Video"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    {/* <FaToggleOff className="modeSwitch"/> */}
                    <button className="modeSwitchBtn"><FaToggleOn className="modeSwitch"/></button>
                    <button className="ThemeSwitch">Dark Mode</button>
                </div>

                <div className="topbarIcons">
                    <div className="topbarIcon">
                        <FaComment className="topbarIconLogo"/>
                        <span className="iconBadge">1</span>
                    </div>

                    <div className="topbarIcon">
                        <FaBell className="topbarIconLogo"/>
                        <span className="iconBadge">1</span>
                    </div>

                    <div className="topbarIcon">
                        <FaUser className="topbarIconLogo"/>
                        <span className="iconBadge">6</span>
                    </div>

                    <img src="https://cdn.pixabay.com/photo/2023/01/24/13/23/viet-nam-7741017_640.jpg" alt="Girl Pic" className="profilePic" />
                </div>
            </div>
        </div>
    )
}