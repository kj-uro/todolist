import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../Data/Data";

const Insert = () => {
  const { dispatch } = useContext(DataContext);
  const [ip,setIp] = useState('');
  const navi = useNavigate();

  const addList = (e) => {
    window.event.preventDefault();
    dispatch({type : 'insert', data:ip});
    navi("/");
  };
  return (
    <div className="todo">
      <h2>Write</h2>
      <form onSubmit={addList}>
        <input type="text" onChange={(e)=>setIp(e.target.value)} />
        <input type="submit" value="등록"/>
      </form>
    </div>
  );
};

export default Insert;
