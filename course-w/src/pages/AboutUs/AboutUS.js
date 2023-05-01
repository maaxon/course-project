import classes from './About.module.scss'

const AboutUs = () =>{
    return(
        <main className={classes.wrap}>

            <section className={classes.about}>
                <h1>О компании</h1>
                <p>Мы располагаем огромной торговой площадкой более 5000 квадратных метров, у нас в наличии не менее 200 автомобилей как отечественного, так и иностранного производства. В штате автосалона «Альтера» работают настоящие профессионалы, которые знают особенности каждого конкретного автомобиля</p>
                <iframe src="https://www.youtube.com/embed/Ua47Fbnq64o"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </section>

        </main>
    )
}

export default AboutUs;