import {makeAutoObservable} from "mobx";


class App{
    slidesCount = 3;
    mode = 'desktop'
    constructor() {
        makeAutoObservable(this)
    }


    setMode(){
        const width = window.screen.width
        if(width<=576){
            this.mode = 'mobile'
        }
        if(width<=1100 && width >576){
            this.mode = 'tablet'
        }
        if (width>1100){
            this.mode = 'desktop'
        }
    }

    getSlidesCount(){
        if (this.mode === 'mobile'){
            return 1
        }

        if (this.mode === 'tablet'){
            return 2
        }

        if (this.mode === 'desktop'){
            return 3
        }
    }
}

export default new App()