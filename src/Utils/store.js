import { configureStore } from '@reduxjs/toolkit'
import dashboardSidebar from '../Features/dashboardSidebar/dashboardSidebar'
import sidebarSlice from '../Features/sidebar/sidebarSlice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    dashboardSidebar: dashboardSidebar,
  },
})
