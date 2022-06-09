import "./styles/style.css";

function renderCanvas() {
    const container = document.createElement("div");
    container.className = "container";
    const heading = document.createElement("h1");
    heading.className = "heading";
    heading.innerText = "Введите целые числа через запятую";
    container.appendChild(heading);
    const form = document.createElement("form");
    form.className = "form";
    container.appendChild(form);
    const input = document.createElement("input");
    input.className = "input";   
    form.appendChild(input);
    const button = document.createElement("button");
    button.className = "button";
    button.innerText = "ОК"
    form.appendChild(button); 
    return container;
}

document.body.appendChild(renderCanvas());
document.querySelector('.input').focus()