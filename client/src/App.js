import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

// Components
//import AppNavbar from './components/AppNavbar';
import MainView from './components/MainView';
function App() {
  return (
    <div className="App">
      {/* <AppNavbar /> */}
      <Container>
        <MainView />  
      </Container>
    </div>
  );
}

export default App;
