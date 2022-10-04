import './Card.css'

function Card(props){
    const classes = 'card ' + props.className;
    // card component can encapsulate other child components and render their content and styling within card by appending its children's styles onto its own.
    // returns the child content inside a div
    return <div className={classes}>{props.children}</div>

}

export default Card;