import footer from "../../misc/footer.png";
import classes from "./Footer.module.scss";

export default function Footer(){
    return(
        <footer className={classes.footer}>
            <section>
                <h5>© 2021 Автосалон "ABC AUTO". Официальный дилер</h5>
                <div>
                    <p>Политика конфиденциальности</p>
                    <p>Политика конфиденциальности</p>
                </div>

            </section>

            <p>Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой</p>
        </footer>
    )
}