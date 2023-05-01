import {makeAutoObservable} from "mobx";


class Cars{
    cars = []
    price = {
        min:5,
        max:100
    }
    brand = ''
    gearboxType='';
    bodyType='';
    filteredCars = [];
    constructor() {
        makeAutoObservable(this)
    }



    async fetchCars(){
        let data = await fetch('http://localhost:5000/cars')
        const json = await data.json()
        this.cars = json.cars.car
    }

    async checkFetched(){
        if (this.cars.length < 1) await this.fetchCars()
    }

    setBrand(brand){
        this.brand = brand
    }

    getCars(){
        let cars = this.cars.filter(car => car.price/1000 >= this.price.min && car.price/1000 <= this.price.max);
        if(this.brand) cars = cars.filter(car => car.brand === this.brand)
        if(this.gearboxType) cars = cars.filter(car => car.spec.find(spec => spec.title === "Тип КПП").desc === this.gearboxType)
        if(this.bodyType) cars  = cars.filter(car => car.spec.find(spec => spec.title === "Тип кузова").desc === this.bodyType)
        return cars
    }



    getCar(id){
        console.log(id)

        const res = this.cars.find(car => {
            console.log(car.id)
            return car.id === id})
        console.log(res)
        return res
    }

    setPrice(value){
        this.price = value
    }

    setGearboxType(type){
        this.gearboxType = type
    }

    setBodyType(type){
        this.bodyType = type
    }

    getPrice(){
        return this.price
    }
}

export default new Cars()