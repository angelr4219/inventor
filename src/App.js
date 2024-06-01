import './App.css';


function App() {
  return (
    <div className="App">
       
       <Start />
       <Info />
       <ButtonSystem />
       
    </div>
  );
}

function Start(){
 const title = "Welcome to my website";
 const is = false;

  return(
    <div >
      <header className = "title">
    {title}
      </header>
    </div>
  );
}

function ButtonSystem() {
  return (
    <form>
      <p className = "title">please type something </p>
      <count> </count>
    <input type = "number"/>
    </form>
      
  
  );
}

function Info() {
  return (
    <form>
      <h1>Inventor system</h1>
      <p>Managing things</p>
      <label for = "text-form"> Please put an input</label>
      <input type = "text"/>
    </form>
      
  
  );
}

export default App;
