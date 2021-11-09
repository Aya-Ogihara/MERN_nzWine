import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import AppProvider from './AppContext'
// Components
//import AppNavbar from './components/AppNavbar';
import MainView from './components/MainView';
function App() {
  return (
      <div className='App'>
          {/* <AppNavbar /> */}
          <AppProvider>
              <Container>
                  <MainView />
              </Container>
          </AppProvider>
      </div>
  );
}

export default App;
