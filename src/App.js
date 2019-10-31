import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import InputNumber from './ui/InputNumber'
import confirm from './ui/confirm'

function App() {
    const [value, setValue] = useState('aaa')
    {
        /* */
    }
    useEffect(async() => {
        let res = await confirm("确定删除吗")
        if (res) {
            console.log("是")
        } else {
            console.log("否")
        }
    }, [])

    return (
        <div className="App">
          受控：  <InputNumber value={value} onChange={e => {
            // setValue(e.target.value)
        }}/>
           非受控：   <InputNumber defaultValue={value} onChange={e => {
        }}/>
            <confirm></confirm> 
    </div>
    );
}



export default App;
