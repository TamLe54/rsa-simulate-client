import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

interface State {
  theme: 'light' | 'dark';
  loading: boolean;
  title: string;
  shouldPreventUnload: boolean;
  pathToBack: string;
  shouldShowUnloadModal: boolean;
}

// const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
// const userTheme = localStorage.getItem('theme') as State['theme'];

const initialState: State = {
  theme: 'light',
  loading: false,
  title: '',
  shouldPreventUnload: false,
  pathToBack: '',
  shouldShowUnloadModal: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setGlobalState(state, action: PayloadAction<Partial<State>>) {
      Object.assign(state, action.payload);

      if (action.payload.theme) {
        const body = document.body;

        if (action.payload.theme === 'dark') {
          if (!body.hasAttribute('theme-mode')) {
            body.setAttribute('theme-mode', 'dark');
          }
        } else {
          if (body.hasAttribute('theme-mode')) {
            body.removeAttribute('theme-mode');
          }
        }
      }
    },
  },
});

export const { setGlobalState } = themeSlice.actions;

export default themeSlice.reducer;
