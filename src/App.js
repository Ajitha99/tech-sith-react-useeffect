import { useState, useEffect } from 'react';
import './App.css';

let born = false;


function App() {
  const [growth, setGrowth] = useState(0);
  const[nirvana, setNirvana] = useState(false);
//

useEffect(()=>{
  if(born){
    document.title = 'nirvana attained';
  }
}, [nirvana])




  //function- which accepts call back function: this is run when component
  //is  mounted first time, updated
  //[] -component is mounted for the first time and component is born
  //This use effect runs on mounting
  useEffect(( )=>{
    console.log("I am born");
  },[])
//we can have multiple hooks
//this runs on mounting and update
  useEffect(() => {
    if(born){
      console.log("make mistake and learn");
    }
    else{
      born = true;
    }
    if(growth > 70 ){
      setNirvana(true);
      console.log('Nirvana State')
    }

    return function cleanUp() {
      console.log('cleanup after mistakes')
    }


  });

  


function growHandle(){
  setGrowth(growth + 10)
}
  return (
    <div className="App">
      <header className = "App-header">
        <h2> Use Effectt</h2>
        <h3>growth: {growth}</h3>
        <button onClick={growHandle}>Learn and grow</button>
      </header>
    </div>
  );
}

export default App;
