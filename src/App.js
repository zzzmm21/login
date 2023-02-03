import './App.css';
import { BrowserRouter,Route, Link,Routes} from "react-router-dom";
import Main from "./component/Main"
import LoginPage from './component/user/Login';
import Join from './component/user/Join';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Main></Main>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path="/join" element={<Join/>} />
        </Routes>
      </BrowserRouter>
        

      
    </div>
  );
}

export default App;
