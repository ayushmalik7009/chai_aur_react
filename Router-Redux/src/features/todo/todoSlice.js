import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {

    todos : [{id:1, text :"Hello World"}]
}


export const todoSlice = createSlice({
    name :'tod',           
    initialState,         /*harr slice ka intial state hota hai*/
    reducers:{
        addTodo :  (state,action) => {
            const todo = {
                id:nanoid(),
                text :action.payload
            }
            state.todos.push(todo)
        },    /*abhi jo intial state me value uska acess degi - state
                                            kuch values leni ho jaise ki id vo values action se milegi*/
        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },

    }
})


export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer