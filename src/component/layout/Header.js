
import { Link} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";


function Header(){
    return(
        <div className="Header">
        <div style={{height:"200px"}}>
          <Link to={"/"}>
            <img src="https://github.com/HJ1510/readingclub/blob/main/src/assets/images/tmpheader2.jpg?raw=true" className="Header-logo" alt="logo" />
          </Link>
        </div>
        <div style={{height:"100px"}}>
          <Link to={"/meeting"}>
            <Button className="Header-button" variant="secondary">
              MEETING
            </Button>
          </Link>
          <Link to={"/booknote"}>
            <Button className="Header-button" variant="secondary">
              NOTE
            </Button>
          </Link>
          <Link to={"/postmain"}>
            <Button className="Header-button" variant="secondary">
              COMMUNITY
            </Button>
          </Link>
          <div className="LoginJoin">
         
  
        <Link to="/login" style={{textDecoration:"none"}}>Login-in</Link>
       </div>
        </div>
    
      </div>
    )

}
export default Header;