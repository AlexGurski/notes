import { useEffect, useState } from "react";
import './assets/style/header.css'
import {MdOutlineCreate} from "react-icons/md";
export const Header = () =>{
   
  return (
    <header>
      <div className="header_content">
        <input type="text" placeholder="Поиск по #тегу"/>
        <span><MdOutlineCreate/></span>
      </div>
    </header>
  );
}


