import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScreenWrapper from './components/ScreenWrapper';
import StatusBar from './components/StatusBar';
import TabBar from './components/TabBar';
import Home from './pages/Home';
import BearRoom from './pages/BearRoom';
import BackButton from './components/BackButton';

function App() {
  return (
    <Router>
      <ScreenWrapper>
        <StatusBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bearroom" element={<BearRoom />} />
        </Routes>
        <BackButton />

        <TabBar />
      </ScreenWrapper>
    </Router>
  );
}

export default App;
