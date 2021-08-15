
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,incrementByAmount } from './redux/counter'
import { getUser } from './redux/user'

function App() {
  //ngambil dari reducer
  const {value} = useSelector(state=> state.counter)
  const {userList} = useSelector(state=> state.user)
  const {status} = useSelector(state=> state.user)

  //cara ngambil action
  const dispatch = useDispatch()

  useEffect(()=>{
    // dispatch(getUser())
  },[])

  console.log(userList)
  
  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={()=>dispatch(increment())}>Tambah</button>
      <button onClick={()=>dispatch(decrement())}>Kurang</button>
      <button onClick={()=>dispatch(incrementByAmount(33))}>Tambah 33</button>
      <br/>
      <br/>
      <h1>USERS</h1>
      <ol>
        { 
          userList.length !== 0 ?
          userList.map((res,i)=>
            <li key={i}>{res.name}</li>
          )
          : status
        }
      </ol>
      <button onClick={()=>dispatch(getUser())}>get user</button>

      
    </div>
  );
}

export default App;
