import JSCard from "../JSCard";
import CardGame from "../CardGame";
import './style.css';

window.cardFlip = {}

window.cardFlip.flipCard = (event) => {
    event.target.parentNode.parentNode.classList.toggle("active");
}


function CardFlip(){


    return `
        
        <div class="flip" onclick="cardFlip.flipCard(event)">
            ${JSCard()}
            ${CardGame()}
        </div>

        
        
    `
}


export default CardFlip

