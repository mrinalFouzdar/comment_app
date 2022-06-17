import React, { memo, useContext } from 'react'
import { CommentContext } from '../Context/CommentContext';

 function PostComment() {
    const {commentList}=useContext(CommentContext)
    // console.log(commentList);
  return (
    <div>
        {
            commentList.length>0 && <ul>
               
                    {
                        commentList.map((data)=><li key={data.id}>
                            <h3><b>Name :</b> {data.Name}</h3>
                            {data.comment && <h3> <b>Comment :</b>  {data.comment}</h3>}
                            {data.gif_img && <img src={data.gif_img} alt="img" />}
                        </li>)

                    }
                
            </ul>
        }
    </div>
  )
}

export default memo(PostComment);
