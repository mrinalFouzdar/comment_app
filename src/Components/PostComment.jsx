import React, { memo, useContext } from "react";
import { CommentContext } from "../Context/CommentContext";
import { AiFillDelete } from "react-icons/ai";

function PostComment() {
  const { commentList, handleDelete } = useContext(CommentContext);
  // console.log(commentList);
  return (
    <div>
      {commentList.length > 0 && (
        <ul>
          {commentList.map((data) => (
            <li key={data.id}>
              <h3>
                <b>Name :</b> {data.Name}
              </h3>
              {data.comment && (
                <h3>
                  {" "}
                  <b>Comment :</b> {data.comment}
                </h3>
              )}
              {data.gif_img && <img src={data.gif_img} alt="img" />}
              <button
                onClick={() => handleDelete(data.id)}
                className="delete_comment"
              >
                <AiFillDelete />
              </button>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default memo(PostComment);
