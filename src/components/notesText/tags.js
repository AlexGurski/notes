import { useRef } from 'react'
import {FaSlackHash} from 'react-icons/fa'
import {BiMessageSquareAdd} from 'react-icons/bi'

export const Tags = ({text, addText, addTags}) =>{
    const divInput = useRef("")
    return (
        <ul className="notes_text_tags">
        <FaSlackHash style={{fontSize:'25px'}}/>
        {
          text? Object.values(text.tags).map(el=><li onClick={()=>addTags(el)}>{el}</li>):null
        }
         <span className='notes_text_addHashTag'>
         <BiMessageSquareAdd  style={{fontSize:'25px'}} onClick={()=>divInput.current.classList.add("animate")}/> 
         <BiMessageSquareAdd  style={{fontSize:'25px'}} onClick={()=>divInput.current.classList.remove("animate")}/> 
         <input type="text" className='disanimate' ref={divInput} onKeyPress={e=>
          {
            if ((e.key == 'Enter' || e.key == ' ') && e.target.value!==''){            
              addText({...text, tags:[...text.tags, e.target.value]})
              divInput.current.classList.remove("animate");
              e.target.value=''             
            }
          }
        }></input>
        </span>  
      </ul>
    ) 
}