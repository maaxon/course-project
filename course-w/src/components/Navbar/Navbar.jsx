import classes from './Navbar.module.scss'
import logo from '../../misc/BrandLogo.png'
import phone from '../../misc/phone.png'
import {Link} from "wouter";
import HamMenu from "../HamMenu/HamMenu";
import {useEffect, useState} from "react";
import app from "../../store/App";
import {observer} from "mobx-react-lite";
import Logo from '../../misc/logo.svg';

function Navbar() {


    if (app.mode === 'mobile') return <NavMobile/>

    return (<nav className={classes.nav}>
        <Link to={'/'}><img src={Logo} className={classes.logo} alt="logo"/></Link>
        <Link to={'/cars/'}>Каталог Авто</Link>
        <Link to={'/error/'}>Aвто с пробегом</Link>
        <Link to={'/about'}>О нас</Link>
        <img className={classes.phone} src={phone} alt="logo"/>
    </nav>)

}

export default observer(Navbar)

const NavMobile = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    const handleScroll = () => {
        setHamburgerOpen(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <nav className={classes.nav}>
            <Link to={'/'}><img src={logo} className={classes.logo} alt="logo"/></Link>
            <div onClick={toggleHamburger}><HamMenu isOpen={hamburgerOpen}></HamMenu></div>
            <div className="menu">
                <p>Каталог Авто</p>
                <p>Aвто с пробегом</p>
                <p>О нас</p>
            </div>

            <style>{`
                .menu{
                display: ${hamburgerOpen ? 'flex' : 'none'};
                background-color: #EFF0F0;
                height: 25vh;
                width: 100vw;
                margin-top: 50px;
                position: fixed;
                top: 7%;
                z-index: 1000;
                flex-direction: column;
                align-items: center;
                }
            `}
            </style>

        </nav>
    )
}