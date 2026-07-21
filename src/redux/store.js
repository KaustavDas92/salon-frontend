import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/RootReducer'


console.log("root reducer= ",rootReducer)
const store=configureStore({
    reducer:rootReducer
})

export default store;
