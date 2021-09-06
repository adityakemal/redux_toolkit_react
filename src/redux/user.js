import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk('user/getUser', async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response)
    return response.data
})


const userSlice = createSlice({
    name : 'user',
    initialState : {
        userList :[],
        status : null,
        error: {}
    },
    extraReducers : {
        [getUser.pending]: (state, action)=>{
            state.status = 'loading'
        }, 
        [getUser.fulfilled]: (state, {payload})=>{
            state.status = 'success'
            //mean action.payload
            state.userList = payload
        }, 
        [getUser.rejected]: (state, action)=>{
            state.status = 'failed'
            state.error = action.payload
           console.error(action.payload)
        },  
    }

})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default userSlice.reducer