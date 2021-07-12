import React, { useState, useRef } from 'react';

const Event = () => {
  const [user, setUser] = useState("")
    const userReference = useRef()
    const contentReference = useRef()

    const onClick = () => {
        if(userReference.current.value && contentReference.current.value){
            alert(contentReference.current.value);
        }
    }

    const checkFull = (e) => {
        if(e.key === 'Enter') {
            onClick();
        } 
    }

    const checkAlphabet = (e) => {
      let val = e.target.value.replace(/[^a-zA-Z]/ig, "");
      if(val.length){
        setUser(val);
      }
    }

    return (
      <div>
        <input 
          ref={userReference} 
          value={user}
          placeholder="사용자를 입력하세요" 
          onKeyPress={checkFull} 
          onChange={checkAlphabet}
          maxLength="15"
        ></input>
        <input ref={contentReference} placeholder="내용을 입력하세요" onKeyPress={checkFull}></input>
        <button onClick={onClick}>입력</button>
      </div>
    );
  }
  
  export default Event;
  