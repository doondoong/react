import './App.css';

function App() {
  const list = ['우유' , '딸기' , '바나나']
  return (
    <>
      <h1 className='title'>안녕</h1>
      <h2>하하</h2>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
          ))  
        }
      </ul>
      <img style={{width: '200px', height: '200px'}} src="notebook.jpg" alt="Error" />
    </>
  ) 
}

export default App;
