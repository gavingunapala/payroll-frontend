# Redux Store Setup

This directory contains the Redux store configuration for the Payroll application.

## Structure

- `index.js` - Main store configuration with all reducers
- `slices/` - Redux Toolkit slices for different features
  - `authSlice.js` - Authentication state management
  - `payrollSlice.js` - Payroll and employee data management
- `hooks.js` - Custom hooks for easier Redux usage

## Usage Examples

### Using Auth State

```javascript
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { loginStart, loginSuccess, loginFailure } from '../store/slices/authSlice';

function LoginComponent() {
  const dispatch = useAppDispatch();
  const { loading, error, isAuthenticated } = useAppSelector(state => state.auth);
  
  const handleLogin = async (credentials) => {
    dispatch(loginStart());
    try {
      const response = await api.login(credentials);
      dispatch(loginSuccess(response.data));
    } catch (err) {
      dispatch(loginFailure(err.message));
    }
  };
  
  return (
    // JSX here
  );
}
```

### Using Payroll State

```javascript
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { fetchEmployeesStart, fetchEmployeesSuccess } from '../store/slices/payrollSlice';

function EmployeeList() {
  const dispatch = useAppDispatch();
  const { employees, loading } = useAppSelector(state => state.payroll);
  
  useEffect(() => {
    const loadEmployees = async () => {
      dispatch(fetchEmployeesStart());
      try {
        const response = await api.getEmployees();
        dispatch(fetchEmployeesSuccess(response.data));
      } catch (err) {
        // Handle error
      }
    };
    
    loadEmployees();
  }, [dispatch]);
  
  return (
    // Render employee list
  );
}
```

## Available Actions

### Auth Slice
- `loginStart()` - Start login process
- `loginSuccess(user, token)` - Successful login
- `loginFailure(error)` - Login failed
- `logout()` - Logout user
- `clearError()` - Clear auth errors
- `updateUser(userData)` - Update user information

### Payroll Slice
- `fetchEmployeesStart/Success/Failure` - Employee data operations
- `fetchPayrollRecordsStart/Success/Failure` - Payroll record operations
- `fetchDepartmentsSuccess` - Department data
- `setPayrollPeriod(period)` - Set current payroll period
- `setPayrollSummary(summary)` - Set payroll summary data
- `addEmployee(employee)` - Add new employee
- `updateEmployee(employee)` - Update existing employee
- `deleteEmployee(id)` - Delete employee
- `clearError()` - Clear payroll errors
