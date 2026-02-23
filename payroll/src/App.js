import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App d-flex flex-column">
      <main className="flex-grow-1">
        <Login />
      </main>
      <Footer />
    </div>
  );
}

export default App;
