import './App.css';

function App() {
  return (
    <div className="App">
       
       <Start />
       <Info />
    </div>
  );
}

function Start(){
 const title = "this is it";
 const is = false;
 
  return(
    <div>
      <h1>
    
      </h1>
    </div>
  );
}




function Info() {
  return (
    <form>
      <h1>Inventory system</h1>
      <p>Managing things</p>
      <label for = "text-form"> Please put an input</label>
      <input type = "text"/>
    </form>
      
  
  );
}

export default App;
