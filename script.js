// Typing Effect
let text = "Hi, I'm Vaibhavi 👩‍💻";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}
typing();

// Scroll
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({behavior: "smooth"});
}

// Fake Message Send
function sendMessage(e) {
    e.preventDefault();
    document.getElementById("msg").innerHTML = "Message Sent Successfully ✅";
}
