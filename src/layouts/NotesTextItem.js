import { useEffect, useRef, useState } from 'react'
import {FaSlackHash} from 'react-icons/fa'
import {AiOutlineEdit, AiOutlineCheckSquare, AiOutlineCloseSquare} from 'react-icons/ai'
import {BiMessageSquareAdd} from 'react-icons/bi'

export const NotesTextItem = ({fullNotes, updates})=>{
  const divText = useRef("text")
  const divTitle = useRef("text")
  const divInput = useRef("text")
  const [text,setText] = useState(false);
  const [tags, setTags] = useState(null);
  const [editHeader, setEditHeader] = useState(false)
  const onSearch = (text, tags) =>{
    return text.split(" ").map((e) => e.includes(tags)?<span style={{fontWeight:900}}>{e} </span>:e+" ")
  }
  useEffect(()=>{
      setText(fullNotes)
      setTags(null)
  },[fullNotes])

return (
  <div className="notes_text">
  <div className="notes_text_container">
    {
    text?
    <div className="notes_text">
      <span className='notes_text_header'>
        <h2  contentEditable={editHeader} ref={divTitle}>{text.title}</h2>  
        <AiOutlineEdit onClick={()=>setEditHeader(true)} style={{display:!editHeader?'block':'none'}}/>  
        <AiOutlineCheckSquare style={{display:editHeader?'block':'none'}} onClick={()=>{setEditHeader(false); 
                                                                                        setText({...text, title:divTitle.current.textContent});
                                                                                        updates({...text, title:divTitle.current.textContent}, text.id)}} />  
        <AiOutlineCloseSquare style={{display:editHeader?'block':'none'}} onClick={()=>{setEditHeader(false); divTitle.current.textContent=text.title}}/>  
      </span>
      <div  className='notes_text_div' 
          contentEditable="false" ref={divText} 
          onKeyDown={()=>{
            divText.current.textContent=divText.current.textContent
          }}>
              {
              text?text.text.split("\n").map(e=><p>{onSearch(e, tags)}</p>):null
              }
      </div>
      <ul className="tags">
        <FaSlackHash style={{fontSize:'25px'}}/>
        {
          text? Object.values(text.tags).map(el=><li onClick={()=>setTags(el)}>{el}</li>):null
        }
         <span className='notes_text_addHashTag'>
         <BiMessageSquareAdd  style={{fontSize:'25px'}} onClick={()=>divInput.current.classList.add("animate")}/> 
         <BiMessageSquareAdd  style={{fontSize:'25px'}} onClick={()=>divInput.current.classList.remove("animate")}/> 
         <input type="text" className='disanimate' ref={divInput} onKeyPress={e=>
          {
            if ((e.key == 'Enter' || e.key == ' ') && e.target.value!==''){            
              setText({...text, tags:[...text.tags, e.target.value]})
              divInput.current.classList.remove("animate");
              updates({...text, tags:[...text.tags, e.target.value]},text.id )
              e.target.value=''             
            }
          }
        }></input>
        </span>  
      </ul>
    </div>
    :null
    }
  </div>
</div>
)
}

 