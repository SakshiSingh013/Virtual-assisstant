let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")


function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-IN"
    
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    console.log(hours)
    if(hours>=0 && hours<12){
        speak("Good Morning Ma'am")
    } else if(hours>=12 && hours<16){
        speak("Good Afternoon Ma'am")
    } else speak("Good Evening Ma'am")
}
// window.addEventListener('load', () =>{
//     wishMe()
// })
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex = event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello") || message.includes("hey")){
        speak("Hello ma'am, What can i help you?")
    }
    else if(message.includes("who are you?")){
        speak("I am virtual assistant, created by Sakshi")
    } else if(message.includes("open netflix")){
        speak("opening netflix...")
        window.open("https://www.netflix.com","_blank")

}   
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com","_blank")
}
else if(message.includes("open youtube")){
    speak("opening youtube...")
    window.open("https://www.youtube.com","_blank")
}
else if(message.includes("open calculator")){
    speak("opening calculator...")
    window.open("calculator://")
}
else if(message.includes("time")){
    let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time)
}
else if(message.includes("date")){
    let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
    speak(date)
}


else{
    let finalText="This is what i found on internet regarding" + message.replace("shifra","")|| message.replace("shipra","")
    speak(finalText)
    window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
}
}
