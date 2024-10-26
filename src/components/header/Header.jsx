import logo from "../../assets/logo.png"
import style from "../header/header.module.css"
import Cart from "../icons/cart"
import SearchIcon from "../icons/SearchIcon"

function Header() {
    return (
        <>
            <header>
                <div className={style.logo}>
                    <img className={style.logoImg} src={logo} alt="" />
                </div>

                <div className={style.search}>
                        <input className={style.inputSearch}
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Pesquisar produto..."
                        />
                        <i className={style.IconSearch}>
                            <SearchIcon />
                        </i>
                </div>

                <div className={style.storeLinks}>
                    <a className={style.signUp} href="">
                        cadastre-se
                    </a>

                    <a className={style.btnLogin} href="">
                        entrar
                    </a>

                    <div>
                        <Cart />
                        <span>2</span>
                    </div>
                </div>
            </header>
        </>
    );
}


export default Header;