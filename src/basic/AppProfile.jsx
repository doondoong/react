import './App.css';
import React, {useState} from 'react';
import Profile from './components/Profile';

function AppProfile() {

  return (
  <>
  <button>버튼</button>
  <form onSubmit={(e)=>{console.log(e)}}>
    <input type="text" />
  </form>
    <Profile img='notebook.jpg' name='노트북' price={2000} isNew />
    <Profile img='blender.jpg' name='믹서기' price={3000}  />
    <Profile img='washer.jpg' name='세탁기' price={7000}  />
  </>
  ) 
}

export default AppProfile;
