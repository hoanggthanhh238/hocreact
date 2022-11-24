import {useState} from 'react'

function App() {

  const [batdau, hienthi] = useState(1)
  
  const tang = () =>{
    hienthi(batdau + 1)
  }
  return (
    <div className="App">
      <h1>{batdau}</h1>
      console.log(1);
      <button onClick={tang}>Tăng lên</button>
    </div>
  );
}
 
export default App;
