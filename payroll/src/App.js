import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './store/hooks';
import Login from './pages/login';
import Signup from './pages/signup';
import AppShell from './pages/AppShell';
import Dashboard from './pages/Dashboard';
import AdminUsers from './pages/AdminUsers';
import EmployeeProfile from './pages/EmployeeProfile';
import EmployeeSearch from './pages/EmployeeSearch';
import PaySheet from './pages/PaySheet';
import Category from './pages/Category';
import BankCreate from './pages/BankCreate';
import Footer from './components/Footer';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAppSelector(state => state.auth);
  return isAuthenticated ? children : <Navigate to="/" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex flex-column">
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/app" element={
              <ProtectedRoute>
                <AppShell />
              </ProtectedRoute>
            }>
              <Route index element={<Dashboard />} />
              <Route path="ums/users" element={<AdminUsers />} />
              
              {/* Maintain Module Routes */}
              <Route path="maintain/employee/profile" element={<EmployeeProfile />} />
              <Route path="maintain/employee/search" element={<EmployeeSearch />} />
              <Route path="maintain/maintain/paysheet" element={<PaySheet />} />
              <Route path="maintain/Category/category" element={<Category />} />
              <Route path="maintain/bank/create" element={<BankCreate />} />
              
              {/* Placeholder routes for other menu items */}
              <Route path="maintain/employee/pay-distribution" element={<Dashboard />} />
              <Route path="maintain/employee/confirm-trainee" element={<Dashboard />} />
              <Route path="maintain/employee/impressed-info" element={<Dashboard />} />
              <Route path="maintain/item/direct" element={<Dashboard />} />
              <Route path="maintain/item/subtypes" element={<Dashboard />} />
              <Route path="maintain/item/maintains" element={<Dashboard />} />
              <Route path="maintain/item/behavior" element={<Dashboard />} />
              <Route path="maintain/bank/report" element={<Dashboard />} />
              <Route path="maintain/bank/view" element={<Dashboard />} />
              <Route path="maintain/batch/create" element={<Dashboard />} />
              <Route path="maintain/batch/report" element={<Dashboard />} />
              <Route path="maintain/batch/view" element={<Dashboard />} />
              
              {/* Schedule Module Routes */}
              <Route path="schedule/global" element={<Dashboard />} />
              <Route path="schedule/auto" element={<Dashboard />} />
              <Route path="schedule/payunit" element={<Dashboard />} />
              <Route path="schedule/fixed" element={<Dashboard />} />
              <Route path="schedule/variable" element={<Dashboard />} />
              <Route path="schedule/loan" element={<Dashboard />} />
              <Route path="schedule/water" element={<Dashboard />} />
              <Route path="schedule/halfpay" element={<Dashboard />} />
              <Route path="schedule/pension" element={<Dashboard />} />
              <Route path="schedule/stoppay" element={<Dashboard />} />
              <Route path="schedule/supplementary" element={<Dashboard />} />
              
              {/* Process Module Routes */}
              <Route path="process/init" element={<Dashboard />} />
              <Route path="process/increment" element={<Dashboard />} />
              <Route path="process/pay" element={<Dashboard />} />
              <Route path="process/final" element={<Dashboard />} />
              <Route path="process/payment" element={<Dashboard />} />
              <Route path="process/system" element={<Dashboard />} />
              
              {/* Inquiry Module Routes */}
              <Route path="inquiry/master" element={<Dashboard />} />
              <Route path="inquiry/ed" element={<Dashboard />} />
              <Route path="inquiry/loan" element={<Dashboard />} />
              <Route path="inquiry/item" element={<Dashboard />} />
              <Route path="inquiry/calculator40" element={<Dashboard />} />
              <Route path="inquiry/exception" element={<Dashboard />} />
              
              {/* Reports Module Routes */}
              <Route path="reports/payslip" element={<Dashboard />} />
              <Route path="reports/batch" element={<Dashboard />} />
              <Route path="reports/final" element={<Dashboard />} />
              <Route path="reports/other" element={<Dashboard />} />
              <Route path="reports/dynamic" element={<Dashboard />} />
              
              {/* UMS Module Routes */}
              <Route path="ums/roles/add" element={<Dashboard />} />
              <Route path="ums/roles/permissions" element={<Dashboard />} />
              <Route path="ums/users/add" element={<Dashboard />} />
              <Route path="ums/password" element={<Dashboard />} />
              <Route path="ums/objects" element={<Dashboard />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
