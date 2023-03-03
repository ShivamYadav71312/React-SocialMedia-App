import "./Home.css";
import Topbar from "../../Components/Topbar/Topbar";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import Feed from "../../Components/Feed/Feed";
import RightSidebar from "../../Components/RightSidebar/RightSidebar";
import ToggleLeftSideBar from "../../Components/ToggleLeftSideBar/ToggleLeftSideBar";
import { useState } from "react";


export default function Home(){
    const [active, setactive] = useState(false);
    const activehandler = () => {
        setactive(!active);
    }
    return(
        <>
        <Topbar active={active} click={activehandler} className="topbar"/>
        <div className="homecontainer">
        <ToggleLeftSideBar active={active}/>   
        <LeftSidebar className="leftsidebar"/>
        <Feed className="feed"/>
        <RightSidebar className="rightsidebar"/>
        </div> 
        </>
    )
};