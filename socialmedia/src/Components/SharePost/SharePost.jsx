import "./SharePost.css";
import { FaPhotoVideo, FaTags, FaMapMarkerAlt, FaSmile } from 'react-icons/fa';


export default function SharePost(){
    return(
        <div className="SharePostContainer">
            <div className="SharePostwrapper">
                <div className="ShareTop">
                    <img className="ProfilePic" src="https://cdn.pixabay.com/photo/2023/01/24/13/23/viet-nam-7741017_640.jpg" alt="Girl Pic" />
                    <input placeholder="What's on your mind Mikasa" className="ShareInput"/>
                </div>
                <hr className="shareHR" />
                <div className="sharebottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <span className="shareoptionlogo"><FaPhotoVideo className="shareoptionPhoto"/></span>
                            <span className="shareoptiontext">Photo/Video</span>
                         </div>

                         <div className="shareOption">
                            <span className="shareoptionlogo"><FaTags className="shareoptionTag" /></span>
                            <span className="shareoptiontext">Tag</span>
                        </div>

                        <div className="shareOption">
                            <span className="shareoptionlogo"><FaMapMarkerAlt className="shareoptionLocation" /></span>
                            <span className="shareoptiontext">Location</span>
                        </div>

                        <div className="shareOption">       
                            <span className="shareoptionlogo"><FaSmile className="shareoptionFeelings"/></span>
                            <span className="shareoptiontext">Feelings</span>
                        </div>
                        <button className="shareBtn">Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
};