const btn = document.querySelector('#Emoji')
const Emojis = [
"😁",
"😍",
"😒",
"😘",
"🤦‍♀️",
"😎",
"🤐",
"🥲",
"😅",
"😴",

];
btn.addEventListener('mouseover',() =>{
    btn.innerHTML=Emojis[Math.floor(Math.random() * Emojis.length)];
})