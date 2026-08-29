


export default function Medal(props) {

    return <div className="medaldiv">
    <p>{props.medal.name}: <button onClick={()=> props.onDecrease(props.country.id, props.medal.name)}>-</button>{props.country[props.medal.name]}<button onClick={()=> props.onIncrease(props.country.id, props.medal.name)}>+</button></p>
    </div>;
}

