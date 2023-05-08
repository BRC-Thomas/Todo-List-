import { useState } from "react";
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

export default function Form() {

const [dataArr,setDataArr] = useState([
  {txt: 'Coder avec react', id: uuidv4()},
  {txt: 'Apprendre tailwind', id: uuidv4()},
  {txt: 'Sortir le chien', id: uuidv4()}
]);

const [stateInput, setStateInput]= useState();

const deleteElement = id => {
  // console.log(id);

  const filteredState = dataArr.filter(item => {
    return item.id !== id;
  })
  setDataArr(filteredState);
}

const linkedInput = e => {
  setStateInput(e);
}

const addTodo = e => {
  e.preventDefault();

  const newArray = [...dataArr];
  const newTodo = {};

  newTodo.txt = stateInput;
  newTodo.id = uuidv4();

  newArray.push(newTodo);
  setDataArr(newArray);
  setStateInput('');
}

  return (
    <div className="pt-16 pb-20 px-4 max-w-7xl mx-auto sm:px-6 lg:pb-28 lg:px-8"> 

      <form onSubmit={e => addTodo(e)} className="mb-3 max-w-lg mx-auto" >
        <div className="container mx-auto flex">
        <input 
        onInput={e => linkedInput(e.target.value)}
        value={stateInput}
        type="text" 
        className="form-input max-w-lg mx-auto px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-offset-0 outline-indigo-200  block w-full rounded-l-lg sm:text-sm" 
        id="todo" required placeholder="Ajoutez une tâche"/>
        <button className="btn px-6 rounded-r-lg bg-gray-200 block hover:bg-gray-300 active:bg-gray-600 focus:outline-offset-0 outline-indigo-200 text-slate-900">Ajouter</button>
        </div>
      </form>
        
      <h4 className="text-2xl tracking-tight font-extrabold text-gray-900 text-center ">Liste de chose à faire :</h4>

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
