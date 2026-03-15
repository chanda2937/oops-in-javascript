class QAItem {

    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
        this.isOpen = false;
    }

    // toggle answer visibility
    toggleVisibility(answerEl, iconEl) {
        this.isOpen = !this.isOpen;

        if (this.isOpen) {
            answerEl.style.display = "block";
            iconEl.textContent = "-";
        } else {
            answerEl.style.display = "none";
            iconEl.textContent = "+";
        }
    }

    // render HTML
    render() {

        const container = document.createElement("div");
        container.classList.add("faq-item");

        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const icon = document.createElement("span");
        icon.classList.add("icon");
        icon.textContent = "+";

        questionDiv.textContent = this.question;
        questionDiv.appendChild(icon);

        const answerDiv = document.createElement("div");
        answerDiv.classList.add("answer");
        answerDiv.textContent = this.answer;
        answerDiv.style.display = "none";

        // event listener
        questionDiv.addEventListener("click", () => {
            this.toggleVisibility(answerDiv, icon);
        });

        container.appendChild(questionDiv);
        container.appendChild(answerDiv);

        return container;
    }
}


// Array of QA Items
const qaList = [
    new QAItem(
        "What is JavaScript?",
        "JavaScript is a programming language used to create interactive web pages."
    ),
    new QAItem(
        "What is HTML?",
        "HTML is the structure of a web page."
    ),
    new QAItem(
        "What is CSS?",
        "CSS is used to style and design web pages."
    )
];


// Render items on page
const faqContainer = document.getElementById("faq");

qaList.forEach(item => {
    faqContainer.appendChild(item.render());
});