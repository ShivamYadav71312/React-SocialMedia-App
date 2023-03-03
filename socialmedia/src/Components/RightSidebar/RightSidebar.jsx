import "./RightSidebar.css";
import { Users } from "../../dummyData";
import OnlineFriends from "../Online Friends/OnlineFriends";

export default function RightSidebar(){
        return(
            <>
        <div className="RightSidebarContainer">
            <div className="RightSidebarWrapper">
                <div className="birthdayNotification">
                    <img src="https://cdn.shopify.com/s/files/1/1758/8043/products/0026137_gourmet_coffee_chocolate_cake_385_288x288.jpeg?v=1529488000" className="birthdayIcon" alt="" />
                    <span className="birthdayText">
                    <b>Andrew Tate</b> & <b>3 other</b> have a birthday today!
                    </span>
                </div>

                <div className="ad">
                    <img src="https://cdn.pixabay.com/photo/2022/08/27/00/11/plant-7413415_640.png" className="adImg" alt="Plant" />
                    <span className="AdText">Ad</span>
                </div>
                <hr className="sidebarhr"/>
                <div className="activeFriendContainer">
                    <h2 className="activeHeading">Active friends</h2>
                    <hr className="sidebarhr"/>
                    <ul className="activefrndList">
                    {Users.map((u) => ( 
                            <OnlineFriends key={u.id} user={u}/>
                        ))}
                    </ul>
                </div>
            </div>            
        </div>
        </>
        )
    }
