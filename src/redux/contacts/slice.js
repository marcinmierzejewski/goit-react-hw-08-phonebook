import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    // [addTask.pending]: handlePending,
    // [deleteTask.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    // [addTask.rejected]: handleRejected,
    // [deleteTask.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    // [addTask.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items.push(action.payload);
    // },
    // [deleteTask.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.items.findIndex(task => task.id === action.payload);
    //   state.items.splice(index, 1);
    // },
  },
});

export const contactsReducer = contactsSlice.reducer;