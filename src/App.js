import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Components/HomePage';
import CvMaker from './Components/CvMaker';

import Introduce from './Components/Introduce';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssVarsProvider } from '@mui/joy';
function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });
  return (
      <ThemeProvider theme={theme}>
      <CssVarsProvider >
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Introduce" element={<Introduce />} />
            <Route path="/CvMaker" element={<CvMaker />} />

          </Routes>
        </Router>
      </CssVarsProvider>
      </ThemeProvider>
  );
}

export default App;
