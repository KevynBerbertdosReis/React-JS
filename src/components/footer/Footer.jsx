import face from "../../assets/face.png"
import insta from "../../assets/insta.png"
import twitter from "../../assets/twitter.png"
import style from "../../components/footer/footer.module.css"


function Footer() {

    const teste = {
        function: 'asdfgh'
    }
    return (
        <>
            <div className={style.footer}>
                <div>
                    <div>
                        <img src=""alt="" />
                        digital college</div>
                    <div className={style.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> 
                        sed do eiusmod tempor incididunt ut labore et dolore.</div>
                    <div className={style.icons}>
                        <img src={face} alt="" />
                        <img src={insta} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div></div>
        </>
    );
}

export default Footer