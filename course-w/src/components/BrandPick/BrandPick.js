import classes from "./BrandPick.module.scss";
import {useEffect} from "react";
import brands from "../../store/Brands";
import {observer} from "mobx-react-lite";
import InputRange from "react-input-range";
import './input-range.scss'
import {Link} from "wouter";
import cars from '../../store/Cars'

const BrandPick = observer(({currentPage = ''}) => {

    useEffect(() => {
        brands.fetchBrands();
    }, [])

    const onGearBoxChange = (e) => {
        cars.setGearboxType(e.target.value)
    }

    const onBodyChange = (e) => {
        cars.setBodyType(e.target.value)
    }

    return (
        <section className={classes.wrapper}>
            <div className={classes.brands}>
                {brands.brands && brands.brands.map((brand, index) =>
                    <Link to={`/cars/${brand}`} key={brand + index} className={classes.link}>
                        <p className={currentPage === brand ? classes.active : ''}>
                            {brand}
                        </p>
                    </Link>)}
            </div>
            <div className={classes.input}>
                <div className={classes.range}>
                    <h5>Быстрый подбор авто</h5>
                    <InputRange
                        maxValue={100}
                        minValue={0}
                        formatLabel={value => `${value} тр`}
                        value={cars.getPrice()}
                        onChange={value => cars.setPrice(value)}
                        onChangeComplete={value => console.log(value)}/>
                </div>
                <div className={classes.selects}>
                    <select name="select" onChange={onGearBoxChange} value={cars.gearboxType}>
                        <option value="">Коробка</option>
                        <option value="Механическая">Механическая</option>
                        <option value="Автоматическая">Автоматическая</option>
                    </select>
                    <select name="select" value={cars.bodyType} onChange={onBodyChange}>
                        <option value="">Тип кузова</option>
                        <option value="седан">седан</option>
                        <option value="универсал">универсал</option>
                        <option value="кроссовер">кроссовер</option>
                        <option value="купе">купе</option>
                    </select>
                </div>
                <Link to={"/cars/"}>
                    <button>
                        <span style={{color: "white"}}>показать</span>
                    </button>
                </Link>
            </div>


        </section>

    )
})

export default BrandPick;