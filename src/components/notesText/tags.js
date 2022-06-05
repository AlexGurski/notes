import { useRef } from 'react'
import {FaSlackHash} from 'react-icons/fa'
import {BiMessageSquareAdd} from 'react-icons/bi'
import {FcCancel} from 'react-icons/fc'

export const Tags = ({text, addText, searchTags}) =>{
    const divInput = useRef("")
    return (
        <ul className="notes_text_tags">
        <FaSlackHash style={{fontSize:'25px'}}/>
       {
          text? Object.values(text.tags).map(el=><li onClick={()=>searchTags(el)}>{el}</li>):null
        }
       <input type="text"  placeholder='Добавить тег' ref={divInput} onKeyPress={e=>
          {
            if ((e.key == 'Enter' || e.key == ' ') && e.target.value!==''){            
              addText({...text, tags:[...text.tags, e.target.value]})
              e.target.value=''             
            }
          }
        }/>
      </ul>
    ) 
}