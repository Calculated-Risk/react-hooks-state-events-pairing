import { useState } from "react";

export default function Buttons({video}) {
    const{upvotes, downvotes} = video
    const[upVoteCount, setUpVoteCount] = useState(upvotes)
    const[downVoteCount, setDownVoteCount] = useState(downvotes)
    
    function handleUpClick(){
        setUpVoteCount((upVoteCount) => upVoteCount+1)
    }

    function handleDownClick(){
        setDownVoteCount((downVoteCount) => downVoteCount+1)
    }

    return (
        <div>
            <button onClick={handleUpClick} className="thumbsUp"> {upVoteCount} 👍</button>
            <button onClick={handleDownClick} className="thumbsDown"> {downVoteCount} 👎</button>
            <div>
                <button style={{
                    "margin-top": "15px"
                    }} className="hide"> 
                    Hide Comments
                </button>
            </div>
          
                
        </div>
    );  
}