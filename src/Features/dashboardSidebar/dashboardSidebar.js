import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: true,
  active: localStorage.getItem('activeSide')
    ? JSON.parse(localStorage.getItem('activeSide'))
    : ['1'],
}

const dashboardSidebarSlice = createSlice({
  name: 'dashboardSidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.open = !state.open
      // console.log(state.isOpen)
    },
    activeSidebar: (state, action) => {
      localStorage.setItem('activeSide', JSON.stringify(action.payload))
    },
  },
})

export const { toggleSidebar, activeSidebar } = dashboardSidebarSlice.actions
export default dashboardSidebarSlice.reducer
