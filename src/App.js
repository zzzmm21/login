import './App.css';
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Main from "./component/Main"
import LoginPage from './component/user/Login';
import Join from './component/user/Join';
import Meeting from './component/meeting/Meeting';
import Meetingjoin from './component/meeting/Meetingjoin'
import Booknote from './component/booknote/Booknote';
import Writebook from './component/booknote/Writebook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Main></Main>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path="/join" element={<Join/>} />
          <Route path='/meeting' element={<Meeting/>}/>
          <Route path='/meetingjoin' element={<Meetingjoin/>}/>
          <Route path='/booknote' element={<Booknote></Booknote>}/>
          <Route path='/booknote/writebook' element={<Writebook/>}/>
        
        </Routes>
      </BrowserRouter>
        

      
    </div>
  );
}

export default App;
