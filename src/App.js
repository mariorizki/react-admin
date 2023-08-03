import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Contacts from './scenes/contacts';
import ExcavatorCard from './scenes/excavator';
import Expenditure from './scenes/expenditure';
import Gasoline from './scenes/gasoline';
import Repairment from './scenes/repairment';
import Line from './scenes/line';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/excavatorcard" element={<ExcavatorCard />} />
              <Route path="/expenditure" element={<Expenditure />} />
              <Route path="/gasoline" element={<Gasoline />} />
              <Route path="/repairment" element={<Repairment />} />
              <Route path="/line" element={<Line />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
