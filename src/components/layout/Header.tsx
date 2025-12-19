import {sayHello} from "./Header.ts";
import './header.css'
function Header() {
    return (
        <>
            <div className='welcome'>你好</div>
            <button onClick={sayHello}>登陆</button>
            <div>lorem100</div>
        </>
    );
}

export default Header;