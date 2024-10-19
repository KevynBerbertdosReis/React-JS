import logo from "../../assets/logo.png"
import style from "../header/header.module.css"
import Search from "../../assets/Search.png"

function Header() {
    return (
        <>
            <header>
                <div className={style.logo}>
                    <img className={style.logoImg} src={logo} alt="" />
                </div>

                <div className='search'>
                    <div className={style.input}>
                        <input className={style.inputSearch}
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Pesquisar produto..."
                        />
                        <img className={style.SearchImg} src={Search} alt="" />
                    </div>
                    <a className="search" href=""></a>
                </div>

                <div className={style.storeLinks}>
                    <a className={style.signUp} href="">
                        cadastre-se
                    </a>

                    <a className={style.btnLogin} href="">
                        entrar
                    </a>

                    <a className="cart" href="">

                    </a>
                </div>
            </header>
        </>
    );
}

export default Header;