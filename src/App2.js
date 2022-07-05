// 7.5 🖤성능최적화🖤 hook - useMemo()
import React, { useMemo, useState } from 'react';

const calculate = (number) => {
    console.log("복잡한 계산");
    for(let i=0; i<1000000000; i++) {}          //그냥 시간 좀 많이걸리게!!(시간 많이걸리는 계산처럼 보이게!)
    return number + 10000;
}
const calculate2 = (number) => {
    console.log("단순한 계산");
    return number + 1;
}

const App2 = (props) => {
    const [ number1, setNumber1 ] = useState(1);
    const [ number2, setNumber2 ] = useState(1);
    //useMemo(콜백함수, 연관배열)
    const sum1 = useMemo(()=>{
        return calculate(number1);
    },[number1])
    // const sum1 = calculate(number1);
    const sum2 = calculate2(number2);
    return (
        <div>
            <h3>복잡한 계산기</h3>
            {/* parseInt해줘야 숫자로 돼서 계산이됨! */}
            <input type="number" value={number1} onChange={(e)=> setNumber1(parseInt(e.target.value))} />
            <span>+ 10000 = {sum1}</span>
            <h3>단순 계산기</h3>
            <input type="number" value={number2} onChange={(e)=> setNumber2(parseInt(e.target.value))} />
            <span>+ 1 = {sum2}</span>
        </div>
    );
};

export default App2;