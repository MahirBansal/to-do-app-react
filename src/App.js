import React, {useState} from 'react';
import './App.css';
import ToList from './components/ToDoList/ToList';
import NewWork from './components/NewWork/NewWork';



// function App() {
//   return (
//     <div className="">
      
//     </div>
//   );
// }

const App = () =>{
  const [arr, setArr] = useState([
    // { id: "id1", text: "Complete MERN Stack Course" },
    // { id: "id2", text: "Complete Cloud Course" },
    // { id: "id3", text: "Complete Devops Course" },
  ]);

  const addNewWorkHandler = (newWork) =>{
    //setArr(arr.concat(newWork));
    setArr((prevArr) => {
      return prevArr.concat(newWork);
    });
  };

  return (
    <div className='main'>
      <h2>To-Do List: </h2>
      <NewWork onAddWork = {addNewWorkHandler}/>
      <ToList toDos = {arr}/>
    </div>
  )
}

export default App;
