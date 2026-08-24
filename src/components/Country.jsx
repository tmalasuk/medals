
import Medal from "./Medal";

export default function Country(props) {
    

    return <div class="country">
    <h2>{props.name}:</h2> 
    {props.medals.map((medal) => (
        <Medal key={medal.id} medal={medal}/>
      ))}
    <button onClick={()=> props.onDelete(props.id)}> - delete </button>
    </div>;
}

