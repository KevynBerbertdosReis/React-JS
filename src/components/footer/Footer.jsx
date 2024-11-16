import face from "../../assets/face.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import style from "../../components/footer/footer.module.css";
import digital from "../../assets/digital.png";

function Footer() {
  const teste = {
    function: "asdfgh",
  };
  return (
    <>
    <div className="content">
      <div className={style.footer}>
        <div>
          <div className={style.slogan}>
            <img src={digital} alt="" />
            <div className={style.text}>digital college</div>
          </div>
          <div className={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br />
            sed do eiusmod tempor incididunt ut labore et dolore.
          </div>
          <div className={style.icons}>
            <img src={face} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className={style.information}>
          <ul>Informação</ul>
          <li>Sobre Drip Store</li>
          <li>Segurança</li>
          <li>Wishlist</li>
          <li>Blog</li>
          <li>Trabalhe Conosco</li>
          <li>Meus Pedidos</li>
        </div>
        <div className={style.products}>
          <ul>Categorias</ul>
          <li>Camisetas</li>
          <li>Calças</li>
          <li>Bonés</li>
          <li>Headphones</li>
          <li>Ténis</li>
        </div>
        <div className={style.contact}>
          <ul>Contato</ul>
          <li>
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza -CE,
            60150-161
          </li>
          <li>(85) 3051-3411</li>
        </div>
      </div>
      <div className={style.name}>@ 2022 Digital College</div>
      </div>
    </>
    
  );
}

export default Footer;
