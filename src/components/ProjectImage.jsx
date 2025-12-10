import { useState } from "react";

function Image(props){
    const [greyscale, setGreyscale] = useState(true);

   function onImageHoverIn(){
      setGreyscale(false);
   }

   function onImageHoverOut(){
      setGreyscale(true);
   }
     
    return(
        <img onMouseOver={()=>onImageHoverIn()} onMouseOut={()=>onImageHoverOut()} src={props.url} alt={props.desc} style={{filter: greyscale ? "grayscale(100)": "grayscale(0)", width:"100%", height:"auto", display:'block', border:'1px solid #d9d9d9', transition:'filter 0.4s ease-in-out'}}></img>
    );
}

export default Image;