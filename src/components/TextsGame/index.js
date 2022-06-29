import './style.css';


function TextsGame(headerNumber, content, color, fontSize){
    return `
        <h${headerNumber} style="color: var(${color}); font-size: ${fontSize}PX" class="texts">${content}</h${headerNumber}>
    `
}

export default TextsGame