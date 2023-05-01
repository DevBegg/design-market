import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface Layout {
  isNavExpanded: boolean;
}

const initialState: Layout = {
  isNavExpanded: false,
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleNavigation: (state) => {
      state.isNavExpanded = !state.isNavExpanded;
    },
    setNavigationExpanded: (state) => {
      state.isNavExpanded = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleNavigation, setNavigationExpanded } = layoutSlice.actions;

export const layoutSelector = (state: RootState) => state.layout;

export default layoutSlice.reducer;
