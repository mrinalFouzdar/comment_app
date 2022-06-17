import React, { useContext, useState } from 'react'
import { CommentContext } from '../Context/CommentContext'
import GifSelect from './GifSelect'
import PostComment from './PostComment'
import {AiOutlineFileGif} from "react-icons/ai"
import {ImCross} from "react-icons/im"
const API ="https://api.giphy.com/v1/gifs/search?api_key=WeRoVYaF3OM76Psc051gj5rpgsj9xFVC&limit=20&offset=0&q="



export default function CommentForm() {
    const {handleGifShow,gifShow,handleGiflist,giflist,handleGifSelect,selectgifImg,commentList,handleCommentList}=useContext(CommentContext)
    const [comment,setComment]=useState("")
    const [gifsearchInput ,setGifsearchInput]=useState("")
    

    const handlegipySearch=()=>{
        if(gifsearchInput.length<1){
            return 
        }
        console.log(gifsearchInput)
        fetch(API+gifsearchInput)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res.data)
            if(res.data.length===0){
                alert("Not avilable")
            }
            handleGiflist(res.data)
        })
        .catch((err)=>{
            console.log(err)
            alert(err)
        })

        
    }
    const handleSubimt=(e)=>{
        e.preventDefault()
        if(!selectgifImg && comment==="" ){
            alert("Pleasse Comment")
            return
        }
        const comment_data={
            Name:"user",
            comment,
            gif_img:selectgifImg,
            id:Date.now()
        }
        handleCommentList([...commentList,comment_data])
        handleGifSelect(null)
        setComment("")
        handleGifShow()
        
    }
  return (
    <div className='main-div-container'>
        {
          selectgifImg && <div className='gif-single-select-main-div'>
            <span onClick={()=> handleGifSelect(null)} className="select-span"> <ImCross/></span>
            <img src={selectgifImg} alt="img" className='single-img'/>
          </div>  
        
        }
        <label >Comment App</label>
        <form className='comment_form' onSubmit={handleSubimt}>
            <textarea name="" id="" rows="10" onChange={(e)=>setComment(e.target.value)} placeholder="Comment..." value={comment}/>

           
            <div onClick={handleGifShow} className="gif-div-logo"><AiOutlineFileGif/> GIF</div>
        

         <input type="submit" value="Submit" className='input-submit'/>

        </form>
        {
                gifShow && <div className='gif-search-main-div'> 
                    <input type="text" onChange={(e)=>setGifsearchInput(e.target.value)} className="input-gifsow-search-text" />
                    <button onClick={handlegipySearch} className="search-api-data">Search</button>
                    {giflist.length>0 && <GifSelect />}
                </div>
        }
        <PostComment/>
    </div>
  )
}
