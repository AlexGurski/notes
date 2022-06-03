import { useRef, useState } from "react";
import {AiOutlineEdit, AiOutlineCheckSquare, AiOutlineCloseSquare} from 'react-icons/ai'

export const Header = ({text,addText}) =>{
  const divTitle = useRef("")
  const [editHeader, setEditHeader] = useState(false)

    return (

    <span className='notes_text_header'>
      <h2  contentEditable={editHeader} suppressContentEditableWarning={true} ref={divTitle}>{text.title}</h2>  
      <AiOutlineEdit onClick={()=>setEditHeader(true)} style={{display:!editHeader?'block':'none'}}/>  
      <AiOutlineCheckSquare style={{display:editHeader?'block':'none'}} onClick={()=>{setEditHeader(false); 
                                                                                      addText({...text, title:divTitle.current.textContent});}} />  
      <AiOutlineCloseSquare style={{display:editHeader?'block':'none'}} onClick={()=>{setEditHeader(false); divTitle.current.textContent=text.title}}/>  
    </span>
    
    ) 
}