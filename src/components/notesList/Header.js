import {FiEdit} from "react-icons/fi";


export const Header = ({filterTags}) =>{   

  return (
    <header>
      <div className="header_content">
        <input type="text" placeholder="Поиск по #тегу" onKeyUp={e=>{
          if (e.key==="Enter"){filterTags(e.target.value)}
        }}/>
        <span onClick={()=>console.log('click')}><FiEdit/></span>
      </div>
    </header>
  );
}


