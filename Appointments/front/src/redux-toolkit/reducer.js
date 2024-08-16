import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userActive: {},
  userAppointments: []
};

export const userSlice = createSlice({
  name: "User Data",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.userActive = action.payload;
    },
    addUserAppointments: (state, action) => {
      state.userAppointments = Array.isArray(action.payload) ? action.payload : [];
    },
    removeAppointment: (state, action) => {
      if (Array.isArray(state.userAppointments)) {
        state.userAppointments = state.userAppointments.map(appointment => {
          if (appointment.id === action.payload) {
            return { ...appointment, status: false };
          }
          return appointment;
        });
      }
    }
  }
});

export const { addUser, addUserAppointments, removeAppointment } = userSlice.actions;

export default userSlice.reducer;
