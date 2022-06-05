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
          <li onClick={()=>searchTags(el)}>{el}</li>
          <FcCancel style={{fontSize:"25px"}} className='removeTag' onClick={()=>{text.tags.splice(text.tags.indexOf(el),1); addText({...text, tags:text.tags})}}/>
          </>):null
        }
       <input type="text"  placeholder='Добавить тег' ref={divInput} onKeyPress={e=>
          {
            if ((e.key == 'Enter' || e.key == ' ') && e.target.value!==''){            
              addText({...text, tags:[...text.tags, e.target.value]})
              e.target.value=''             
            }
          }
        }/>
        <Popup
          trigger={<button className="button"> Open Modal </button>}
          modal
          nested
        >
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header">  Вы действительно хотите удалить тег </div>             
              <div className="actions">
              <button
                  className="button"
                  onClick={() => {
                    close();
                  }}
                >
                  Удалить 
                </button>
                <button
                  className="button"
                  onClick={() => {
                    close();
                  }}
                >
                  Закрыть
                </button>
              </div>
            </div>
          )}
        </Popup>
      </ul>
    ) 
}