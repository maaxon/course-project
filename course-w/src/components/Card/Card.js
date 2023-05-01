import classes from "./card.module.scss";
import {Link} from "wouter";


export default function Card({brand,model,id,img,desc,price}){
    return(
        <Link to={`/car/${id}`}>
        <div className={classes.card}>
            <img src={img}/>
            <h4>{brand} {model}</h4>
            <p className={classes.price}>{price} &#8381; <span>доставка от 2000 &#8381;</span></p>
            <p>{desc}</p>
        </div>
        </Link>
    )
}