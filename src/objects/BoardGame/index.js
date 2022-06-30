import CardFlip from "../../components/CardFlip"
import './style.css'

function BoardGame(amountCards) {
    const $htmlCardGame = CardFlip();
    const $htmlContent = $htmlCardGame.repeat(amountCards);
    return `
        <section class="board-game">
            ${$htmlContent}
        </section>`;
}

export default BoardGame;