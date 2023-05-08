import { useState } from "react";
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

export default function Form() {

const [dataArr,setDataArr] = useState([
  {txt: 'Coder avec react', id: uuidv4()},
  {txt: 'Apprendre tailwind', id: uuidv4()},
  {txt: 'Sortir le chien', id: uuidv4()}
]);



const deleteElement = id => {
  // console.log(id);

  const filteredState = dataArr.filter(item => {
    return item.id !== id;
  })
  setDataArr(filteredState);
}


  return (
    <div className="pt-16 pb-20 px-4 max-w-7xl mx-auto sm:px-6 lg:pb-28 lg:px-8"> 

      <form className="mb-3 max-w-lg mx-auto">
        <label htmlFor="todo" className="form-label text-sm font-medium text-slate-700">
          Chose à faire
        </label>
        <input 
        type="text" 
        className="form-input max-w-lg mx-auto mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
        id="todo" />
        <button className="btn p-1 rounded bg-blue-400 block mt-3 hover:bg-blue-500 active:bg-blue-600 focus:outline-none focus:ring focus:ring-blue text-slate-900">Ajouter</button>
      </form>
        
      <h4 class="text-2xl tracking-tight font-extrabold text-gray-900 text-center ">Liste de chose à faire :</h4>

      <ul role="list" className="mt-10 max-w-lg mx-auto">

        {dataArr.map(item => {
          return (
            <Item
            txt = {item.txt}
            key = {item.id}
            id = {item.id}
            delFunction = {deleteElement}
            />
          )
        })}

        
      </ul>
    </div>
  );
}
