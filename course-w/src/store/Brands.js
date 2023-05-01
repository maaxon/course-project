import {makeAutoObservable} from "mobx";


class Brands{
    brands = ['text']
    constructor() {
        makeAutoObservable(this)
    }

    async fetchBrands(){
        let data = await fetch('http://localhost:5000/')
        const json = await data.json()
        this.brands = json.brands.brand
    }

    getBrands(){
        return this.brands
    }
}

export default new Brands()