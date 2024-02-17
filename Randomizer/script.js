const enhance = className => {
    const elements = document.querySelectorAll('.' + className);

    elements.forEach(element => {
        const text = element.innerText;
        element.innerHTML = "";

        for (let i = 0; i < text.length; i++) {
            const span = document.createElement("span");
            span.className = "letter";
            span.innerText = text[i];
            element.appendChild(span);
        }
    });
}

enhance("word");
