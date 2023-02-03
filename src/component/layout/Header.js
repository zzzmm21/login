
import { Link} from 'react-router-dom';
function Header(){
    return(
        <div className="main-image">
        <img src="https://cdn.imweb.me/thumbnail/20221204/27b6c2923cfdd.jpg" width="1903px" height="592px" ></img>

  
        <main>
            <Link to='/login'>로그인/회원가입</Link>

        </main>
        </div>
    )

}
export default Header;