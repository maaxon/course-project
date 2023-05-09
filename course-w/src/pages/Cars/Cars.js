import Card from "../../components/Card/Card";
import BrandPick from "../../components/BrandPick/BrandPick";

import classes from './Cars.module.scss'
import {useEffect, useState} from "react";

import cars from "../../store/Cars"
import {observer} from "mobx-react-lite";


const Cars = observer(({brand}) => {

    useEffect(() => {
        if (!cars.cars) {
            cars.fetchCars()
        }
        cars.setBrand(brand)
    }, [brand])

    const [count, setCount] = useState(6)

    return (
        <section className={classes.wrap}>
            <h1>Каталог авто</h1>

            <BrandPick currentPage={brand}/>
            {cars.getCars().length > 0 ?
                <section className={classes.cars}>
                    {cars.getCars().slice(0, count).map(car => <Card key={car.id} price={car.price} id={car.id}
                                                                     desc={car.description} img={car.img}
                                                                     brand={car.brand} model={car.model}/>)}
                </section>
                : <h2 className={classes.outStock}>Таких автомобилей нет в продаже</h2>
            }
            {cars.getCars().length > count && <button onClick={() => setCount(cars.getCars().length)}>
                показать ещё
            </button>}
        </section>
    )
})

export default Cars