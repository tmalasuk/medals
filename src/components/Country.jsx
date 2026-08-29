
import Medal from "./Medal";

export default function Country(props) {
    
    function allCountryMedal(){
    return props.country.gold + props.country.silver + props.country.bronze;
  }

    return <div className="country">
    <h2>{props.name}: {allCountryMedal()}</h2> 
    {props.medals.map((medal) => (
        <Medal key={medal.id} medal={medal} country={props.country} onDecrease={props.onDecrease} onIncrease={props.onIncrease} />
      ))}
    <button onClick={()=> props.onDelete(props.id)}> - delete </button>
    </div>;
}

