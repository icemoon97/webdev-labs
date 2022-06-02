import React, {useEffect, useState} from 'react'

const Posts = () => {
    const [postIds, setPostIds] = useState({});
    
    return (
        <div>
            {postIds.map(postId => 
                <Post key={postId} postId={postId} /> )}
        </div>
    )
}

export default Posts;