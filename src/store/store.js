import {configureStore} from '@reduxjs/toolkit'
import todoSlice from './Slice'

const store = configureStore({
  reducer: todoSlice,
})

export default store