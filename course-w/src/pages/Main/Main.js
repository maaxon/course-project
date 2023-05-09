import banner from '../../misc/banner.png'
import about from '../../misc/about.PNG'
import classes from "./Main.module.scss";
import BrandPick from "../../components/BrandPick/BrandPick";
import cars from "../../store/Cars"
import {useEffect} from "react";
import Card from "../../components/Card/Card";
import Slider from "../../components/Slider/Slider";
import slide from "../../misc/mark1.PNG"
import slide2 from "../../misc/mark2.PNG"
import slide3 from "../../misc/mark3.PNG"
import bank from "../../misc/bank1.PNG"
import bank2 from "../../misc/bank2.PNG"
import bank3 from "../../misc/bank3.PNG"
import app from "../../store/App";
import {observer} from "mobx-react-lite";


const Main = () => {

    useEffect(() => {
        cars.fetchCars()
    }, [])


    return (
        <main className={classes.main}>
            <img src={banner} className={classes.banner} alt="banner"/>
            <BrandPick/>
            <h1>Автомобили в наличии</h1>
            <section className={classes.cars}>
                {cars.cars.slice(0, 3).map((car) => <Card key={car.id} img={car.img} price={car.price}
                                                          desc={car.description} brand={car.brand} id={car.id}
                                                          model={car.model}/>)}
            </section>
            <section className={classes.marketing}>
                <h1>Спецпредложения</h1>
                <Slider arrowRightClass={classes.arrowRight} wrapClass={classes.sliderWrap}
                        arrowLeftClass={classes.arrowLeft} arrowClass={classes.arrow}
                        slides_count={app.getSlidesCount()}>
                    <img src={slide}  key={"sl-1"} type={'slide'} alt='slide'/>
                    <img src={slide2} key={"sl-2"} type={'slide'} alt='slide'/>
                    <img src={slide3} key={"sl-3"} type={'slide'} alt='slide'/>
                    <img src={slide}  key={"sl-4"} type={'slide'} alt='slide'/>
                    <img src={slide2} key={"sl-5"} type={'slide'} alt='slide'/>
                </Slider>
                <h1>Банки-партнеры</h1>
                <section className={classes.banks}>
                    <img src={bank} alt="bank"/>
                    <img src={bank2} alt="bank"/>
                    <img src={bank3} alt="bank"/>
                </section>
            </section>
            <section className={classes.about}>
                <h1>О компании</h1>
                <p>Мы располагаем огромной торговой площадкой более 5000 квадратных метров, у нас в наличии не менее 200
                    автомобилей как отечественного, так и иностранного производства. В штате автосалона «Альтера»
                    работают настоящие профессионалы, которые знают особенности каждого конкретного автомобиля</p>
                <img src={about} alt="about"/>
            </section>
        </main>
    )
}

export default observer(Main)