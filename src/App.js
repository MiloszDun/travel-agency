import { AppProvider } from './data/AppContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import WelcomePage from './pages/WelcomePage';
import PackagesPage from './pages/PackagesPage';
import HotelSelectionPage from './pages/HotelSelectionPage';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lato',
      'sans-serif'
    ].join(','),
  },
});

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/hotels" element={<HotelSelectionPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
