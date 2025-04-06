import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { FeedViewType } from '@/types';

export interface Layout {
  isNavExpanded: boolean;
  feedView: FeedViewType;
}

const initialState: Layout = {
  isNavExpanded: false,
  feedView: FeedViewType.Article,
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
    setFeedView: (state, { payload }) => {
      state.feedView = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleNavigation, setNavigationExpanded, setFeedView } = layoutSlice.actions;

export const layoutSelector = (state: RootState) => state.layout;

export default layoutSlice.reducer;
