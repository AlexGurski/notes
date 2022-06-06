import { useRef } from 'react'
import {FaSlackHash} from 'react-icons/fa'
import {FcCancel} from 'react-icons/fc'
import { randomID } from '../../modules/randomID';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const Tags = ({text, addText, searchTags}) =>{
    const divInput = useRef("")

    return (
      <div className='notes_text_tags'> 
        <FaSlackHash className='notes_text_tags_hash'  onClick={()=>searchTags(null)}/>
          <ul className="notes_text_tags_item">       
          {
            text? Object.values(text.tags).map(el=>< >
            <li  className='notes_text_tags_item_remove' >
              <div onClick={()=>searchTags(el)}>{el}</div>
              <FcCancel className='notes_text_tags_item_remove_button' onClick={()=>{
                            text.tags.splice(text.tags.indexOf(el),1); addText({...text, tags:text.tags})}
                            }/>            
            </li>
            </>):null
          }
        <input type="text"  placeholder='Добавить тег' ref={divInput} onKeyPress={e=>
            {
              if ((e.key == 'Enter' || e.key == ' ') && e.target.value!==''){            
                addText({...text, tags:[...text.tags, e.target.value.trim()]})
                e.target.value=''             
              }
            }
          }/>      
        </ul>
      </div>
    ) 
}