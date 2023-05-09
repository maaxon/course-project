import classes from "./error.module.scss";
import {Link} from "wouter";


const Error = () => {
    return (
        <main className={classes.main}>
            <h1><span>404</span> Страница не найдена</h1>
            <Link to={"/"}>вернуться на главную</Link>
        </main>
    )
}

export default Error;