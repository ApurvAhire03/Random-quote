var quotes = [
    ["Hard work is worthless for those that don't believe in themselves.", "Naruto Uzumaki", "images/Naruto.png"],
    ["If you don't take risks, you can't create a future.", "Monkey D. Luffy", "images/Luffy.jpg"],
    ["Never going back on your word no matter what and never giving up.", "Jiraiya", "images/Jiraya.jpg"],
    ["You'll laugh at your fears when you find out who you really are.", "Piccolo (Dragon Ball Z)", "images/Piccolo.jpg"],
    ["Human strength lies in the ability to change yourself.", "Saitama", "images/Saitama OPM.jpeg"],
    ["My Motto Is To Be Stronger Than Yesterday.", "Rock Lee", "images/Rock Lee.jpg"],
    ["If you don't like your destiny, don't accept it. Instead, have the courage to change it.", "Naruto Uzumaki", "images/Naruto2.jpg"],
    ["People's lives don't end when they die. It ends when they lose faith.", "Itachi Uchiha", "images/Itachi.png"],
    ["Push through the pain. Giving up hurts more.", "Vegeta", "images/Vegeta.jpg"],
    ["I hate perfection. To be perfect is to be unable to improve any further.", "Kurotsuchi Mayuri", "images/Kurotsuchi Mayuri.jpg"]
];

function generateQuote() {
    let i = Math.floor(Math.random() * quotes.length);
    
    document.getElementById("quote").innerText = quotes[i][0];
    document.getElementById("author").innerText = quotes[i][1];

    // Check if an image exists for the quote and update the background
    if (quotes[i][2]) {
        document.body.style.background = `url('${quotes[i][2]}') no-repeat center center/cover`;
    }
}
