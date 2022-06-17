import React, { useState } from "react";

export const CommentContext=React.createContext()

export function CommentContextProvider({children}){
    const [gifShow,setGifShow]=useState(false)
    const [giflist,setGiflist]=useState([])
    const [selectgifImg,setSelcegifImg]=useState(null)
    const [commentList,setCommentList]=useState([])

    const handleGifShow=()=>{
        setGifShow(!gifShow)
    }

    const handleGiflist=(value)=>{
        setGiflist(value)
    }

    const handleGifSelect=(value)=>{
        setSelcegifImg(value)
        setGiflist([])
    }

    const handleCommentList=(value)=>{
        setCommentList(value)
    }

    return(
        <CommentContext.Provider value={{gifShow,handleGifShow,giflist,handleGiflist,handleGifSelect,selectgifImg ,handleCommentList,commentList}}>
            {children}
        </CommentContext.Provider>
    )
}
