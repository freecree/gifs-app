import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AnimationOptions } from '../types/AnimationOptions';

export interface AnimationState {
  option: AnimationOptions;
}

const initialState: AnimationState = {
  option:
    (localStorage.getItem('animation') as AnimationOptions) ||
    AnimationOptions.BUBBLES,
};

export const animationSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAnimation: (state, action: PayloadAction<AnimationOptions>) => {
      state.option = action.payload;
    },
  },
});

export const { setAnimation } = animationSlice.actions;

export default animationSlice.reducer;
