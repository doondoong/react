import './App.css';
import React, {useState} from 'react';
import Counter from './components/Counter';

function AppCounter() {
  const [allCount, setAllCount] = useState(0)

  return (
  <>

  <b style={{fontSize: '50px', color:'blue'}}>총 수량: {allCount}</b> <span>{allCount < 11 ? '' : '❤' }</span>
  <br></br>
    <Counter setAllCount={setAllCount} allCount={allCount} />
    <Counter setAllCount={setAllCount} allCount={allCount} />
  </>
  ) 
}

export default AppCounter;
