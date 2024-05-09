import { ThemeProvider } from '@mui/material/styles';
import Layout from './pages/Layout';
import { customTheme } from './components/styles/theme';

function App() {

  return (
    <ThemeProvider theme={customTheme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
