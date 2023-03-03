import "./Post.css";
import { Users } from "../../dummyData";
import { FaHeart, FaComments, FaShareAlt } from 'react-icons/fa';

export default function Post({ post }){
    return(
        <div className="postContainer">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="topLeft">
                        <img className="postProfilepic" src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="Girl Pic" />
                        <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                        <span className="postTime">{post.time}</span>
                    </div>
                    <div className="topRight">
                        :
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img className="postImage" src={post.photo} alt="Nature" />
                </div>

                <div className="postBottom">
                    <div className="bottom">
                       <div className="bottomLeft">
                            <FaHeart className="postbottomHeart"/>
                            <span className="commentCount">{post.like}</span>
                       </div>
                        
                        <div className="bottomCenter">
                            <FaComments className="postbottomComment"/>
                            <span className="commentCount">{post.comment}</span>
                        </div>
                        
                        <div className="bottomRight">
                            <FaShareAlt className="postbottomShare"/>
                            <span className="share">Share Now</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};