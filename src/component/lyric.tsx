import React from "react";
import './../static/spinner.css';
 

export  const Lyric = (item : any)=>{  

  const replacejsr = (text : string)=>{
    if(text)
    return text.split('\n').map((item,idx)=>{
      return(  
        <React.Fragment key={idx}>
        {item}<br/> 
        </React.Fragment>
        );
    })
   return null;
   }

   // console.log(item);
  return(
    <p> 
      { item.lyric.lyric  && Object.keys(item.lyric.lyric).length>0  && ( 
        <div className="lyric">
           <h4 className='lyrics_title' ></h4>  
           <p className='lyrics_text lyrics'> { replacejsr(item.lyric.lyric)}</p>
       </div>
        )
       } 
    </p>
  )
 

}