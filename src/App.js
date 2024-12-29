import './App.css';
import AboutMe from './components/aboutMe';
import Introduction from './components/introduction';
import Navbar from './components/navbar';
import Services from './components/services';
import TechBanner from './components/techBanner';

function App() {
  return (
    <>
      <div className="p-0 sm:pt-4 sm:px-4">
        <Navbar />
        <Introduction />
      </div>
      <TechBanner />
      <div className="bg-background p-0 sm:pt-4 sm:px-4">
        <AboutMe />
        <Services />
      </div>
    </>
  );
}

export default App;
