import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
  payrollRecords: [],
  departments: [],
  loading: false,
  error: null,
  currentPayrollPeriod: null,
  payrollSummary: null,
};

const payrollSlice = createSlice({
  name: 'payroll',
  initialState,
  reducers: {
    // Employee actions
    fetchEmployeesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchEmployeesSuccess: (state, action) => {
      state.loading = false;
      state.employees = action.payload;
    },
    fetchEmployeesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    // Payroll actions
    fetchPayrollRecordsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPayrollRecordsSuccess: (state, action) => {
      state.loading = false;
      state.payrollRecords = action.payload;
    },
    fetchPayrollRecordsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    
    // Department actions
    fetchDepartmentsSuccess: (state, action) => {
      state.departments = action.payload;
    },
    
    // Payroll period actions
    setPayrollPeriod: (state, action) => {
      state.currentPayrollPeriod = action.payload;
    },
    
    // Payroll summary actions
    setPayrollSummary: (state, action) => {
      state.payrollSummary = action.payload;
    },
    
    // Clear error
    clearError: (state) => {
      state.error = null;
    },
    
    // Add employee
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    
    // Update employee
    updateEmployee: (state, action) => {
      const index = state.employees.findIndex(emp => emp.id === action.payload.id);
      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    },
    
    // Delete employee
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(emp => emp.id !== action.payload);
    },
  },
});

export const {
  fetchEmployeesStart,
  fetchEmployeesSuccess,
  fetchEmployeesFailure,
  fetchPayrollRecordsStart,
  fetchPayrollRecordsSuccess,
  fetchPayrollRecordsFailure,
  fetchDepartmentsSuccess,
  setPayrollPeriod,
  setPayrollSummary,
  clearError,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = payrollSlice.actions;

export default payrollSlice.reducer;
