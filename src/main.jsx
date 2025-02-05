import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adding2Numbers from './components/Adding2Numbers.jsx';
import AskingQuestions from './components/AskingQuestions.jsx';
import GreaterOrLess from './components/GreaterOrLess.jsx';
import MadLib from './components/MadLib.jsx';
import Magic8Ball from './components/Magic8Ball.jsx';
import OddOrEven from './components/OddOrEven.jsx';
import RestaurantPicker from './components/RestaurantPicker.jsx';
import ReverseItAlphanumeric from './components/ReverseItAlphanumeric.jsx';
import ReverseItNumeric from './components/ReverseItNumeric.jsx';
import SayHello from './components/SayHello.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Adding2Numbers" element={<Adding2Numbers />} />
        <Route path="/AskingQuestions" element={<AskingQuestions />} />
        <Route path="/GreaterOrLess" element={<GreaterOrLess />} />
        <Route path="/MadLib" element={<MadLib />} />
        <Route path="/Magic8Ball" element={<Magic8Ball />} />
        <Route path="/OddOrEven" element={<OddOrEven />} />
        <Route path="/RestaurantPicker" element={<RestaurantPicker />} />
        <Route path="/ReverseItAlphanumeric" element={<ReverseItAlphanumeric />} />
        <Route path="/ReverseItNumeric" element={<ReverseItNumeric />} />
        <Route path="/SayHello" element={<SayHello />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)