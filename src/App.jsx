// Init
import React from 'react';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Files
import Index from './routes/index';
import './css/index.css';

// Component
function App() {
  return (
    <div className="App">

      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar transition={Flip} />


      <Index />
    </div>
  );
}

// Export
export default App;
