import CardFlip from "../../components/CardFlip"

function BoardGame(amountCards) {
    const $htmlCardGame = CardFlip();
    const $htmlBoardGame = $htmlCardGame.repeat(amountCards);
    return $htmlBoardGame
}

export default BoardGame;