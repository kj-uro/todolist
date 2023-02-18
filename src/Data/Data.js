import { createContext, useReducer, useState } from "react";
import React from "react";

export const DataContext = createContext(null);

const initialState = [
]

const reducer = (state,action)=>{
  switch (action.type) {
    case 'insert': return [...state, {id: Date.now(), todo:action.data, checked: true}];
    case 'update': return state.map(obj=> obj.id === action.data.id ? action.data : obj);
    case 'remove': return state.filter(obj=>obj.id !== action.id);
    
  }
}

const Data = ({ children }) => {
  const [list, setList] = useState([]);

  const [data,dispatch] = useReducer(reducer,initialState);

  return (
    <DataContext.Provider value={{list, setList,data, dispatch}}>
      {children}
    </DataContext.Provider>
  );
};

export default Data;
