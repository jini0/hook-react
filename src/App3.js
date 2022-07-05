// 7.5 🖤성능최적화🖤 hook - useMemo()
import React,{ useEffect, useState, useMemo } from 'react';

const App3 = (props) => {
    const [ number, setNumber ] = useState(0);
    const [ isKorea, setIsKorea ] = useState(true);
    // 1.
    // const location = isKorea ? "한국" : "외국";
    // 밑에처럼 이렇게 하면 location이 변경되지 않아도 useEffect가 호출됨..!(number를 변경해도 호출되는거!)
    // 2. 
    // const location = {
    //     country: isKorea ? "한국" : "외국"
    // }
    // 3. 💛useMemo()를 쓰면 number를 변경해도 호출되지 않음! / location이 변경될 때만 호출됨!!!!
    const location = useMemo(()=>{
        return {
            country: isKorea ? "한국" : "외국"
        }
    },[isKorea])
    useEffect(()=>{
        console.log("useEffect 호출")
    },[location])               //number의 값과는 상관없이 location이 변경되면 -> 콘솔창에 useEffect 호출 이 뜸!
    return (
        <div>
          <h1>어떤 숫자를 좋아하세요?</h1>
          <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)} />
          <h1>어느 나라에 있어요?</h1>  
          {/* 1. */}
          {/* <p>나라 : {location}</p> */}
          {/* 2/3. */}
          <p>나라 : {location.country}</p>
          <button onClick={()=>setIsKorea(!isKorea)}>여행가자</button>
        </div>
    );
};
export default App3;

//🖤설명
// - 원시타입 
// const location = "한국";
// - 객체타입
// const location = {
//     country: "한국"
// }

//* 원시타입 : location이라는 변수에 한국이 바로 담김   --> 새로 변경되어도 그대로 값을 가짐! - 한국 이라는 값
//* 객체타입 : 값이 아니고 참조된 주소를 가지고 있음(이 주소는 계속해서 참조될때마다 바뀜!)(얘가 담긴 메모리에 주소를 담고있음) -->  다시 함수가 호출되면
//            주소가 계속해서 바뀜 (location이 그대로지만 바꼈다고 생각함!!) 
// 그래서 밑에처럼 이렇게 객체로 주면 -> 그대로지만 주소가 바뀌어 바꼈다고 생각함
// const location = {
//     country: isKorea ? "한국" : "외국"
// }                

// ** 콘솔창 예시 ** 
// const a = 10
// undefined
// const b = 10
// undefined
// a === b
// true                             // 원시타입은 같음!
// const obj1 = { name: "그린" }
// undefined
// const obj2 = { name: "그린" }
// undefined
// obj1 === obj2
// false                            // 객체타입은 다름!