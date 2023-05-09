import cars from "../../store/Cars"
import Slider from "../../components/Slider/Slider";
import classes from "./Car.module.scss";
import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import app from "../../store/App";
import Error from "../Error/Error";

const Car = observer(({id}) => {
        useEffect(() => {
            if (cars.cars.length < 1) {
                cars.fetchCars()
            }
        }, [])

        if (!cars.getCar(id)) {
            return <Error/>
        }

        return (
            <CarView car={cars.getCar(id)} mode={app.mode}/>
        )
    }
)

export default Car

const CarView = ({car, mode}) => {

    return (
        <main className={classes.wrapper}>
            <p className={classes.title}><span className={classes.name}>{car.brand} {car.model}</span> <span
                className={classes.price}>{car.price}$</span></p>

            {car.galery ? <Slider arrowClass={classes.arrow} arrowLeftClass={classes.arrowLeft}
                                  arrowRightClass={classes.arrowRight} slides_count={mode === "mobile" ? 1 : 2}
                                  wrapClass={classes.sliderWrap}>
                {car.galery.map((img, index) => <img src={img} type={'slide'} key={`car${index}`} alt="car"/>)}
            </Slider> : <img className={classes.mainImg} src={car.img} alt={'car'}/>}

            {car.spec &&
                <Specification title={"Характеристики"} mode={mode}>
                    <p><strong>Марка</strong> {car.brand}</p>
                    <p><strong>Модель</strong> {car.model}</p>
                    {car.spec.map(el => <p><strong>{el.title}</strong> {el.desc}</p>)}
                    <p><strong>Поколение</strong> I Рестайлинг 3
                    </p>
                    <p><strong>Модификация</strong> 3.8 AMT (555 л.с.) 4WD</p>
                    <p><strong>Год</strong> 2016</p>
                    <p><strong>Пробег</strong> 34500 км
                    </p>
                    <p><strong>Тип кузова</strong> Купе</p>
                    <p><strong>Цвет</strong> Черный</p>
                    <p><strong>VIN</strong> 180285</p>
                    <p><strong>Тип двигателя</strong> Бензин</p>
                    <p><strong>Объем двигателя</strong> 3799 см3</p>
                    <p><strong>Руль</strong> Левый</p>
                    <p><strong>КПП</strong> Автомат</p>
                    <p><strong>Привод</strong> Полный привод
                    </p>
                    <p><strong>Мощность двигателя</strong> 555 л.с.
                    </p>

                </Specification>
            }

            <Specification wrapClass={classes.options} title={"Опции"} mode={mode}>
                <p>Антиблокировочная система (ABS)</p>
                <p>Антипробуксовочная система</p>
                <p>Бортовой компьютер</p>
                <p>Датчик дождя</p>
                <p>Датчик света</p>
                <p>Иммобилайзер</p>
                <p>Камера заднего вида</p>
                <p>Количество мест (4)</p>
                <p>Кондиционер (климат 2-зонный)</p>
                <p>Круиз-контроль</p>
                <p>Легкосплавные диски, 20</p>
                <p>Магнитола (CD)</p>
                <p>Навигационная система</p>
                <p>Обогрев зеркал</p>
                <p>Обогрев сидений</p>
                <p>Омыватель фар</p>
                <p>Парктроник</p>
                <p>Салон (кожа)</p>
                <p>Светодиодные фары</p>
                <p>Сигнализация</p>
                <p>Система доступа без ключа</p>
                <p>Система курсовой устойчивости</p>
                <p>Центральный замок</p>
            </Specification>
        </main>

    )
}


const Specification = ({children, title, wrapClass = '', mode}) => {
    console.log(mode)
    return (
        <section className={`${classes.specifications} ${wrapClass}`}>
            <h3>{title}</h3>
            <div className={classes.elements}>
                {mode === "mobile" ? <Hider>{children}</Hider> : children}
            </div>
        </section>

    )
}


const Hider = ({children}) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            {isOpen ? children : children.slice(0, Math.trunc(children.length / 2))}
            <p style={{color: "red", fontWeight: 500}} onClick={() => {
                setOpen(!isOpen)
            }}>{isOpen ? "Свернуть" : "Развернуть"}</p>
        </>
    )
}