import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
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
    incrementByAmount: (state, action: PayloadAction<boolean>) => {
      state.isNavExpanded = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleNavigation, incrementByAmount } = layoutSlice.actions;

export const layoutSelector = (state: RootState) => state.layout;

export default layoutSlice.reducer;
