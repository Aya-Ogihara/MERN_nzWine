import RegionProvider from './context/RegionContext';
import WineProvider from './context/WineContext';

import MainView from './components/MainView';
function App() {
  return (
    <div className="App">
      <RegionProvider>
        <WineProvider>
            <MainView />  
        </WineProvider>
      </RegionProvider>
    </div>
  );
}

export default App;
