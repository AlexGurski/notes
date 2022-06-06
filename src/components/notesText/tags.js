import { useRef } from 'react'
import {FaSlackHash} from 'react-icons/fa'
import {BiMessageSquareAdd} from 'react-icons/bi'
import {FcCancel} from 'react-icons/fc'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const Tags = ({text, addText, searchTags}) =>{
    const divInput = useRef("")

    return (
        <ul className="notes_text_tags">
        <FaSlackHash style={{fontSize:'25px'}}/>
       {
          text? Object.values(text.tags).map(el=><>
          <li>
            <div onClick={()=>searchTags(el)}>{el}</div>
            <Popup
          trigger={<button className="button"><FcCancel style={{fontSize:"25px", cursor:"pointer"}} /></button>}position="bottom left" nested >
          <div>
            Удалить тег "{el}"
            <br></br>
            <button className="button" onClick={()=>{
                    text.tags.splice(text.tags.indexOf(el),1); addText({...text, tags:text.tags})}
                    }>
              Удалить
            </button>
          </div>
      </Popup>
            
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
    ) 
}