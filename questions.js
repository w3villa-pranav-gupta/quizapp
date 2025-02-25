const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Layout", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What is the purpose of CSS?",
        options: ["To structure content", "To style web pages", "To add interactivity", "To store data"],
        answer: "To style web pages"
    },
    {
        question: "Which programming language is used for web development?",
        options: ["Python", "C++", "JavaScript", "Java"],
        answer: "JavaScript"
    },
    {
        question: "What does React primarily help with?",
        options: ["Database Management", "UI Development", "Server-side Rendering", "Data Science"],
        answer: "UI Development"
    },
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["Laravel", "Django", "React", "Spring"],
        answer: "React"
    },
    {
        question: "What is the default behavior of flexbox in CSS?",
        options: ["Row", "Column", "Grid", "Inline"],
        answer: "Row"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<hyper>"],
        answer: "<a>"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Apple", "Netscape", "Google"],
        answer: "Netscape"
    },
    {
        question: "Which CSS property controls text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: "font-size"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["//", "/* */", "--", "##"],
        answer: "//"
    },
    {
        question: "What is the full form of HTTP?",
        options: ["Hyper Transfer Text Protocol", "Hyper Text Transfer Protocol", "High Tech Transfer Protocol", "Hyperlink Text Transfer Protocol"],
        answer: "Hyper Text Transfer Protocol"
    },
    {
        question: "Which tag is used to define an image in HTML?",
        options: ["<img>", "<image>", "<pic>", "<photo>"],
        answer: "<img>"
    },
    {
        question: "Which method is used to add an element at the end of an array in JavaScript?",
        options: ["push()", "pop()", "unshift()", "shift()"],
        answer: "push()"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Custom Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: ["color", "background-color", "bgcolor", "background"],
        answer: "background-color"
    },
    {
        question: "Which JavaScript function is used to print something to the console?",
        options: ["print()", "console.log()", "write()", "log()"],
        answer: "console.log()"
    },
    {
        question: "Which CSS property is used to set text alignment?",
        options: ["text-align", "align-text", "horizontal-align", "justify"],
        answer: "text-align"
    },
    {
        question: "What is JSX in React?",
        options: ["JavaScript XML", "JavaScript Extension", "Java Extended Syntax", "Java XML"],
        answer: "JavaScript XML"
    },
    {
        question: "Which hook is used for state management in React?",
        options: ["useState", "useEffect", "useReducer", "useContext"],
        answer: "useState"
    },
    {
        question: "Which function is used to fetch data from an API in JavaScript?",
        options: ["fetch()", "getData()", "httpRequest()", "callAPI()"],
        answer: "fetch()"
    },
    {
        question: "What does the 'src' attribute in an <img> tag specify?",
        options: ["Source of the image", "Size of the image", "Style of the image", "Shape of the image"],
        answer: "Source of the image"
    },
    {
        question: "Which HTML element is used to define the title of a document?",
        options: ["<title>", "<head>", "<meta>", "<h1>"],
        answer: "<title>"
    },
    {
        question: "What does the 'alt' attribute in an <img> tag do?",
        options: ["Specifies an alternative text", "Specifies the image size", "Specifies the image source", "Specifies the image style"],
        answer: "Specifies an alternative text"
    },
    {
        question: "Which CSS property is used to change the font of an element?",
        options: ["font-family", "font-style", "font-weight", "text-font"],
        answer: "font-family"
    },
    {
        question: "What is the purpose of the <div> tag in HTML?",
        options: ["To create a division or section", "To create a hyperlink", "To create a list", "To create a table"],
        answer: "To create a division or section"
    },
    {
        question: "Which JavaScript method is used to remove the last element from an array?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        answer: "pop()"
    },
    {
        question: "What does the 'display' property in CSS control?",
        options: ["Visibility of an element", "Position of an element", "Size of an element", "Layout of an element"],
        answer: "Layout of an element"
    },
    {
        question: "What is the purpose of the <span> tag in HTML?",
        options: ["To create a section", "To group inline elements", "To create a hyperlink", "To define a list"],
        answer: "To group inline elements"
    },
    {
        question: "Which CSS property is used to add space between elements?",
        options: ["margin", "padding", "spacing", "border"],
        answer: "margin"
    },
    {
        question: "What does the 'position' property in CSS control?",
        options: ["Element visibility", "Element size", "Element layout", "Element stacking order"],
        answer: "Element layout"
    },
    {
        question: "Which HTML element is used to create a list?",
        options: ["<list>", "<ul>", "<ol>", "<li>"],
        answer: "<ul>"
    },
    {
        question: "What is the purpose of the <header> tag in HTML?",
        options: ["To define the footer", "To define the main content", "To define the header section", "To define a navigation bar"],
        answer: "To define the header section"
    },
    {
        question: "Which JavaScript method is used to convert a JSON string into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
        answer: "JSON.parse()"
    },
    {
        question: "What is the purpose of the <footer> tag in HTML?",
        options: ["To define the header", "To define the footer section", "To define the main content", "To define a navigation bar"],
        answer: "To define the footer section"
    },
    {
        question: "Which CSS property is used to control the opacity of an element?",
        options: ["opacity", "visibility", "filter", "display"],
        answer: "opacity"
    },
    {
        question: "What does the 'z-index' property in CSS control?",
        options: ["Element size", "Element visibility", "Element stacking order", "Element position"],
        answer: "Element stacking order"
    },
    {
        question: "Which HTML tag is used to create a table?",
        options: ["<table>", "<tab>", "<tbody>", "<tr>"],
        answer: "<table>"
    },
];

export default questions;
