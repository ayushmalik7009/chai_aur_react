import {configureStore} from '@reduxjs/toolkit';

import bookreducer from '../features/todo/todoSlice'

export const  store = configureStore({
    reducer : bookreducer
})
