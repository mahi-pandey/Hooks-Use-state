import React , {useState} from 'react'

function Counter(){
    const intialCount=0
    const[count,setCount]=useState(intialCount)

    const increamentFive=()=>{
        for(let i=0;i<5;i++) {
            setCount(prevCount=>prevCount+1)
        }
    }


    return(
        <>

        Count:{count}
        <button onClick={()=>setCount(intialCount)}>Reset</button>
        <button onClick={()=>setCount(prevcount=>prevcount+1)}>Increment</button>
        <button onClick={()=>setCount(prevcount=>prevcount-1)}>Decrement</button>
        <button onClick={increamentFive}>Increment 5</button>
        

        
        </>

    )
}

export default Counter