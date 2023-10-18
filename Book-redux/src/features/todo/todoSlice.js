import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    book :[
        {
            numbers : 0
        }
    ]
}

export const books = createSlice({
    name : 'Book',
    initialState,
    reducers :{
        reduceBooks : (state, action) => {
            if(state.book[0].numbers <10){
            return{
                book :[
                   { numbers : state.book[0].numbers +1}
                ]
            }   
            
            }
        }
    }
})

export const {reduceBooks} = books.actions

export default books.reducer