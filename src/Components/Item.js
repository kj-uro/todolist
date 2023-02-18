import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../Data/Data'

const Item = ({state}) => {
  const {dispatch} = useContext(DataContext);
  const navi = useNavigate();

  const dataChange = (id,type)=>{
    if(type==='update'){
      navi('/update',{state:id});
    }else{
      dispatch({type:'remove', id});
    }
  }

  return (
    <li>
      <input type='checkbox'/>{state.todo}
      <button onClick={()=>dataChange(state,'update')}>수정</button>
      <button onClick={()=>dataChange(state.id,'remove')}>삭제</button>
    </li>
  )
}

export default Item