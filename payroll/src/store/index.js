import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import payrollSlice from './slices/payrollSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    payroll: payrollSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});
