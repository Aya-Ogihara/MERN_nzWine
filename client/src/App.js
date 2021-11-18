import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import RegionProvider from './context/RegionContext';
import WineProvider from './context/WineContext';

// Components
//import AppNavbar from './components/AppNavbar';
import MainView from './components/MainView';
function App() {
  return (
    <div className="App">
      {/* <AppNavbar /> */}
      <RegionProvider>
        <WineProvider>
          <Container>
            <MainView />  
          </Container>
        </WineProvider>
      </RegionProvider>
    </div>
  );
}

export default App;
