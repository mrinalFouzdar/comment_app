import React, { useContext } from 'react'
import { CommentContext } from '../Context/CommentContext'

export default function GifSelect() {
  const {giflist,handleGifSelect} =useContext(CommentContext)
  return (
    <div>
        {
            giflist.map((img)=><div key={img.id}>
                <img src={img.images.fixed_width.url} alt="img" onClick={()=>handleGifSelect(img.images.fixed_width.url)} style={{cursor:"pointer"}}/>

            </div>)
        }
    </div>
  )
}
