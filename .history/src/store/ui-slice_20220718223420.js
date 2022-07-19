import { createSlice } from '@reduxjs/toolkit'

const uiSlice=createSlice(
    {
        name: 'ui',
        initialState: { cartIsVisible: false },
        // map of all methods and actions
        reducers: {
            toggle(state) {
                 state.cartIsVisible = !state.cartIsVisible;
            }
        }
    }
)

expory default uiSlice;