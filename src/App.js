import Header from './components/Header';
import AddTask from "./components/AddTask";
import ShowTask from './components/ShowTask';
import Footer from './components/Footer';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist"))||[]);
  const [update , setUpdate] = useState({});
 
  useEffect(() => {
    localStorage.setItem("tasklist",JSON.stringify(tasklist));
  }, [tasklist])
  
  return (
    <div className="App">
      <Header/>
      <AddTask 
       tasklist={tasklist} 
       setTasklist={setTasklist}
       update ={update}
       setUpdate ={setUpdate}
      />
      <ShowTask 
       tasklist={tasklist}
       setTasklist={setTasklist}
      update ={update}
      setUpdate ={setUpdate}
      />
      <Footer/>
    </div>
  );
}

export default App;
