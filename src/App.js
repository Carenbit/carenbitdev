import './App.css';
import Navbar from './component/NavigationBar/Navbar';
import Services from './component/Services/Services';
import Solutions from './component/Solutions/solution';

function App() {
  return (
    <><div className="main">
    <Navbar/>
    <Services/>
    <Solutions/>
   
    </div>
    </>
  );
}

export default App;
