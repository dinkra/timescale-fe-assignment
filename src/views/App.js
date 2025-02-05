import { ThemeProvider } from 'styled-components';
import theme from '../theme';

// views
import Home from './Home';

const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

export default App;
