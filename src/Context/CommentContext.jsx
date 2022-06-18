import React, { useState } from "react";

export const CommentContext = React.createContext();

export function CommentContextProvider({ children }) {
  const [gifShow, setGifShow] = useState(false);
  const [giflist, setGiflist] = useState([]);
  const [selectgifImg, setSelcegifImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [commentList, setCommentList] = useState([]);

  const handleGifShow = () => {
    setGifShow(!gifShow);
  };

  const handleGiflist = (value) => {
    setGiflist(value);
  };

  const handleGifSelect = (value) => {
    setSelcegifImg(value);
    setGiflist([]);
  };
  const handleLoading = (value) => {
    setLoading(value);
  };

  const handleCommentList = (value) => {
    setCommentList(value);
  };
  const handleDelete = (data) => {
    let value = commentList.filter((item) => item.id !== data);
    setCommentList(value);
  };

  return (
    <CommentContext.Provider
      value={{
        gifShow,
        handleGifShow,
        giflist,
        handleGiflist,
        handleGifSelect,
        selectgifImg,
        loading,
        handleLoading,
        handleCommentList,
        commentList,
        handleDelete,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
}
