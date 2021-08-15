import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk('user/getUser', async ()=>{
    return axios.get('https://jsonplaceholder.typicode.co/users').then(res=>{
        return  res.data
    })
})

const userSlice = createSlice({
    name : 'user',
    initialState : {
        userList :[],
        status : null
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
        },  
    }

})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default userSlice.reducer