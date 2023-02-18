import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {DataContext} from "../Data/Data";
import Item from "./Item";
import '../Css/todo.scss'

const List = () => {
  const { data } = useContext(DataContext);
  
  return (
    <div className="todo">
        <h2>Todolist ({data.length})</h2>
        <Link to='/insert'>할일등록</Link>
    <ul>
      {data.map((obj)=>{
        return <Item key={obj.id} state={obj}/>
      })}
    </ul>
    </div>
  );
};

export default List;
