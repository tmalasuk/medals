
export default function Country(props) {

    return <div>{props.name}: {props.gold}<button onClick={()=> props.onDelete(props.id)}> - delete </button></div>;
}

