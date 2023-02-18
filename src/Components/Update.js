import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { DataContext } from '../Data/Data';

const Update = () => {
    const { dispatch } = useContext(DataContext);
    const {state} = useLocation();
    const [ip,setIp] = useState(state.todo);
    const navi = useNavigate();
  
    const updateItem = (e) => {
      window.event.preventDefault();
      dispatch({type : 'update', data:{...state,todo : ip}});
      navi("/");
    };
  return (
    <div className="todo">
      <h2>Update</h2>
      <form onSubmit={updateItem}>
        <input type="text" value={ip} onChange={(e)=>setIp(e.target.value)} />
        <input type="submit" value="수정"/>
      </form>
    </div>
  )
}

export default Update