import { createSlice } from "@reduxjs/toolkit";
const totalUnread = (inboxData) => {
   
   const n= inboxData.filter(msg=>msg.read===false)
   return n.length;
  };
  
const initialState ={
    inboxData:[],
    unread:0,
    
}

const EmailReducer=createSlice({
    name:'email',
    initialState:initialState,
    reducers:{
        changeInbox(state,action){
            state.inboxData=action.payload
            state.unread=totalUnread(state.inboxData)
        },
        updateUnread(state,action){
            state.unread=0
        }
        

    }
})

export const EmailActions = EmailReducer.actions

export default EmailReducer.reducer