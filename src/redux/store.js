import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '@/redux/slice/cartslice'
import historyCartSlice from '@/redux/slice/historyCart'

export default configureStore({
    reducer:{
        cart:cartSlice,
        historyCard: historyCartSlice
    }
})