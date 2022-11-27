
function Card(props){
return(

    <div>
        <h2>{props.titulo}</h2>
        <img src={props.img}/>
        <p>{props.contenido}</p>
    </div>
)

}
export default Card;