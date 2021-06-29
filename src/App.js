import './App.css';

import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import Footer from './layouts/Footer';
import {Container} from 'semantic-ui-react'
import Dashboard from './layouts/Dashboard';

function App() {
  return (
    
    <div className="App">
      
      <Navi/>
      <Footer/>
      <Container>
        <Dashboard/>
      </Container>
    </div>
  );
}

export default App;
