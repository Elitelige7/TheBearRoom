import ScreenWrapper from './components/ScreenWrapper';
import StatusBar from './components/StatusBar';
import TabBar from './components/TabBar';
import Home from './pages/Home';

function App() {
  return (
    <ScreenWrapper>
      <StatusBar />
      <Home />
      <TabBar />
    </ScreenWrapper>
  );
}

export default App;
