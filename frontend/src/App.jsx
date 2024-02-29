import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState();
  const url = 'http://127.0.0.1:8000';

  const GetData = () => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };

  return (
    <>
      <header className='text-gray-700 border-b border-gray-700'>
        <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
          <a href="#" className='font-mediam text-gray-900 mb-4 md:mb-0'>
            <span className='text-xl ml-3'>実験用</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
            <a href="#About" className='mr-5 hover:text-blue-400 duration-300'>About</a>
          </nav>
        </div>
      </header>

      <section className='text-gray-700' id='home'> 
        <div>
          <div>ここに処理</div>
          <button onClick={GetData}>データを取得</button>
          {data && <div>{data.Hello}</div>}
        </div>
      </section>
    </>
  );
}

export default App
