import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './store/hooks';
import Login from './pages/login';
import Signup from './pages/signup';
import AppShell from './pages/AppShell';
import Dashboard from './pages/Dashboard';
import UserDashboard from './pages/UserDashboard';
import AdminUsers from './pages/AdminUsers';
import EmployeeProfile from './pages/EmployeeProfile';
import EmployeeSearch from './pages/EmployeeSearch';
import PaySheet from './pages/PaySheet';
import Category from './pages/Category';
import BankCreate from './pages/BankCreate';
import Footer from './components/Footer';
import PayDistributionPage from 'pages/PayDistributionPage';
import MasterInformation from 'pages/MasterInformation';
import EdScreen from './pages/EdScreen';
import PrintBatch from './pages/PrintBatch';
import EmployeeDashboard40 from './pages/EmployeeDashboard40'; 
import LoanInformation from './pages/LoanInformation';
import ExceptionData from './pages/ExceptionData';
import WaterElectricity from './pages/WaterElectricity';
import HalfPaySchedule from './pages/HalfPaySchedule';
import PensionSchedule from './pages/PensionSchedule';
import StoppaySchedule from './pages/StoppaySchedule';
import SupplementaryPay from './pages/SupplementaryPay';
import IncrementProcess from './pages/IncrementProcess';




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
              <Route path="user-dashboard" element={<UserDashboard />} />
              <Route path="ums/users" element={<AdminUsers />} />
              
              {/* Maintain Module Routes */}
              <Route path="maintain/employee/profile" element={<EmployeeProfile />} />
              <Route path="maintain/employee/search" element={<EmployeeSearch />} />
              <Route path="maintain/maintain/paysheet" element={<PaySheet />} />
              <Route path="maintain/Category/category" element={<Category />} />
              <Route path="maintain/bank/create" element={<BankCreate />} />
              
              {/* Placeholder routes for other menu items */}
              <Route path="maintain/employee/pay-distribution" element={<PayDistributionPage />} />
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
              <Route path="schedule/water" element={<WaterElectricity />} />
              <Route path="schedule/halfpay" element={<HalfPaySchedule />} />
              <Route path="schedule/pension" element={<PensionSchedule />} />
              <Route path="schedule/stoppay" element={<StoppaySchedule />} />
              <Route path="schedule/supplementary" element={<SupplementaryPay/>} />
              
              {/* Process Module Routes */}
              <Route path="process/init" element={<IncrementProcess />} />
              <Route path="process/increment" element={<Dashboard />} />
              <Route path="process/pay" element={<Dashboard />} />
              <Route path="process/final" element={<Dashboard />} />
              <Route path="process/payment" element={<Dashboard />} />
              <Route path="process/system" element={<Dashboard />} />
              
              {/* Inquiry Module Routes */}
              <Route path="inquiry/master" element={<MasterInformation/>} />
              <Route path="inquiry/ed" element={<EdScreen />} />
              <Route path="inquiry/loan" element={<LoanInformation />} />
              <Route path="inquiry/item" element={<Dashboard />} />
              <Route path="inquiry/calculator40" element={<EmployeeDashboard40 />} />
              <Route path="inquiry/exception" element={<ExceptionData/>} />
              
              {/* Reports Module Routes */}
              <Route path="reports/payslip" element={<Dashboard />} />
              <Route path="reports/batch" element={<PrintBatch />} />
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
