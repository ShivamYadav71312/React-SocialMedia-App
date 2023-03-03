import SharePost from "../SharePost/SharePost";
import Post from "../Post/Post";
import { Posts } from "../../dummyData";
import "./Feed.css";

export default function Feed(){
    return(
        <div className="FeedContainer">
            <div className="Feedwrapper">
                <SharePost/>
                {Posts.map((p) => <Post key={p.id} post={p}/>)}
            </div>
        </div>
    )
};