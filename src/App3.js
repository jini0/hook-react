// 7.5 ๐ค์ฑ๋ฅ์ต์ ํ๐ค hook - useMemo()
import React,{ useEffect, useState, useMemo } from 'react';

const App3 = (props) => {
    const [ number, setNumber ] = useState(0);
    const [ isKorea, setIsKorea ] = useState(true);
    // 1.
    // const location = isKorea ? "ํ๊ตญ" : "์ธ๊ตญ";
    // ๋ฐ์์ฒ๋ผ ์ด๋ ๊ฒ ํ๋ฉด location์ด ๋ณ๊ฒฝ๋์ง ์์๋ useEffect๊ฐ ํธ์ถ๋จ..!(number๋ฅผ ๋ณ๊ฒฝํด๋ ํธ์ถ๋๋๊ฑฐ!)
    // 2. 
    // const location = {
    //     country: isKorea ? "ํ๊ตญ" : "์ธ๊ตญ"
    // }
    // 3. ๐useMemo()๋ฅผ ์ฐ๋ฉด number๋ฅผ ๋ณ๊ฒฝํด๋ ํธ์ถ๋์ง ์์! / location์ด ๋ณ๊ฒฝ๋  ๋๋ง ํธ์ถ๋จ!!!!
    const location = useMemo(()=>{
        return {
            country: isKorea ? "ํ๊ตญ" : "์ธ๊ตญ"
        }
    },[isKorea])
    useEffect(()=>{
        console.log("useEffect ํธ์ถ")
    },[location])               //number์ ๊ฐ๊ณผ๋ ์๊ด์์ด location์ด ๋ณ๊ฒฝ๋๋ฉด -> ์ฝ์์ฐฝ์ useEffect ํธ์ถ ์ด ๋ธ!
    return (
        <div>
          <h1>์ด๋ค ์ซ์๋ฅผ ์ข์ํ์ธ์?</h1>
          <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)} />
          <h1>์ด๋ ๋๋ผ์ ์์ด์?</h1>  
          {/* 1. */}
          {/* <p>๋๋ผ : {location}</p> */}
          {/* 2/3. */}
          <p>๋๋ผ : {location.country}</p>
          <button onClick={()=>setIsKorea(!isKorea)}>์ฌํ๊ฐ์</button>
        </div>
    );
};
export default App3;

//๐ค์ค๋ช
// - ์์ํ์ 
// const location = "ํ๊ตญ";
// - ๊ฐ์ฒดํ์
// const location = {
//     country: "ํ๊ตญ"
// }

//* ์์ํ์ : location์ด๋ผ๋ ๋ณ์์ ํ๊ตญ์ด ๋ฐ๋ก ๋ด๊น   --> ์๋ก ๋ณ๊ฒฝ๋์ด๋ ๊ทธ๋๋ก ๊ฐ์ ๊ฐ์ง! - ํ๊ตญ ์ด๋ผ๋ ๊ฐ
//* ๊ฐ์ฒดํ์ : ๊ฐ์ด ์๋๊ณ  ์ฐธ์กฐ๋ ์ฃผ์๋ฅผ ๊ฐ์ง๊ณ  ์์(์ด ์ฃผ์๋ ๊ณ์ํด์ ์ฐธ์กฐ๋ ๋๋ง๋ค ๋ฐ๋!)(์๊ฐ ๋ด๊ธด ๋ฉ๋ชจ๋ฆฌ์ ์ฃผ์๋ฅผ ๋ด๊ณ ์์) -->  ๋ค์ ํจ์๊ฐ ํธ์ถ๋๋ฉด
//            ์ฃผ์๊ฐ ๊ณ์ํด์ ๋ฐ๋ (location์ด ๊ทธ๋๋ก์ง๋ง ๋ฐ๊ผ๋ค๊ณ  ์๊ฐํจ!!) 
// ๊ทธ๋์ ๋ฐ์์ฒ๋ผ ์ด๋ ๊ฒ ๊ฐ์ฒด๋ก ์ฃผ๋ฉด -> ๊ทธ๋๋ก์ง๋ง ์ฃผ์๊ฐ ๋ฐ๋์ด ๋ฐ๊ผ๋ค๊ณ  ์๊ฐํจ
// const location = {
//     country: isKorea ? "ํ๊ตญ" : "์ธ๊ตญ"
// }                

// ** ์ฝ์์ฐฝ ์์ ** 
// const a = 10
// undefined
// const b = 10
// undefined
// a === b
// true                             // ์์ํ์์ ๊ฐ์!
// const obj1 = { name: "๊ทธ๋ฆฐ" }
// undefined
// const obj2 = { name: "๊ทธ๋ฆฐ" }
// undefined
// obj1 === obj2
// false                            // ๊ฐ์ฒดํ์์ ๋ค๋ฆ!