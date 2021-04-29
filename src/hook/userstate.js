import React,{useState} from 'react';

// function UseFunc()
// {
//     const [user,setUser]=useState("abc");

//     return(
//         <div>
//             <h1>{user}</h1>
//         </div>
//     )
// }

function UseFunc()
{
    const [user,setUser]=useState([
        {name: "Pradipta",age:23},
        {name: "Deanjan",age:25}
    ]);

    return(
        <div>
            {user.map((obj,index)=>(<h1 key={index}>{obj.name} {obj.age}</h1>))}
            {/* or we can use for of / for in loop */}
        </div>
    )
}

export default UseFunc