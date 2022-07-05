// 7.5 🖤성능최적화🖤 관련 hook - useCallback()
import './App.css';
import { useState, useEffect, useCallback } from 'react';

function App() {
  const [ number, setNumber ] = useState(0);
  const [ name, setName ] = useState("");
  const myFunction = useCallback(() => {
    console.log(`myFunction: number ${number} `);
    return
  }, [number])    // [] 그냥 빈배열로 해주면 -> 콘솔에 값이 변경돼도 안적힘!
  // // 🖤밑에 처럼 useCallback으로 안하고 그냥 함수로만 적어주면 값이 바뀔때마다 콘솔에 "myFunction이 변경되었습니다."이 찍힘 -> 이를 방지하기 위해 useCallback()해줌!(
  // // 🖤[]배열에 빈배열 하면 -> 전달 안됨
  // // 🖤) -> [number]을 연관성 배열을 주거나 하면 값이 변경될 때 마다 콘솔에 다시 뜨게 할 수 있음!!
  // // const myFunction = () => {
  // //   console.log(`myFunction: number ${number} `);
  // //   return
  // // };

  // const myFunction = () => {
  //   console.log(`myFunction: number ${number} `);       //input 중 number인거만 변경될 때! 해주고 싶은데!!!  --> 이렇게만 적어주면 --> 다른 input인 name에 값이 적혀도 콘솔이 찍힘("myFunction이 변경되었습니다.")
  //   return
  // };
  useEffect(()=>{
    console.log("myFunction이 변경되었습니다.")
  },[myFunction]);      //의존성배열에 myFunction을 넣음 -> myFunction이 변경될 때만 console.log("myFunction이 변경되었습니다.")이 실행됨!
  return (
    <div className="App">
      <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)} />
      <br/>
      <button onClick={myFunction}>함수호출</button>
      <br/>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
    </div>
  );
}

export default App;
