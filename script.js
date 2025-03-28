let btn = document.getElementById("btn");
let mic = document.getElementById("mic");
let voice = document.getElementById("voice");
let text = document.getElementById("text");
let logo = document.getElementById("logo");

btn.addEventListener("click", function(){
    voice.style.display = "block";
    btn.style.display = "none";
});
function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    // window.speechSynthesis.resume();
    window.speechSynthesis.speak(text_speak);
}
function wishMe(){
  let day=new Date();
  let hour=day.getHours();
  if(hour>=0&&hour<12){
    speak("Good Morning");
  }
  else if(hour>=12&&hour<18){
    speak("Good Afternoon");
  }
  else{
    speak("Good Evening");
  }
  speak("I am Bujji, your virtual assistant. How can I help you today?");
}
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
    recognition.onresult = (event) => {
       let currentindex=event.resultIndex;
       let transcript=event.results[currentindex][0].transcript;
      text.innerText=transcript;
      takeCommand(transcript.toLowerCase());
    };
btn.addEventListener("click",()=>{
  recognition.start()
})
function takeCommand(message){
  voice.style.display="none"
   btn.style.display="flex"
   if(message.includes("hello")||message.includes("hey")){
       speak("hello sir,what can i help you?")
   }
   else if(message.includes("who are you")){
       speak("i am Bujji, your virtual assistant ,created by Samith s palan")
   }else if(message.includes("open youtube")){
       speak("opening youtube...")
       window.open("https://youtube.com/","_blank")
   }
   else if(message.includes("open google")){
       speak("opening google...")
       window.open("https://google.com/","_blank")
   }
   else if(message.includes("open facebook")){
       speak("opening facebook...")
       window.open("https://facebook.com/","_blank")
   }
   else if(message.includes("open instagram")){
       speak("opening instagram...")
       window.open("https://instagram.com/","_blank")
   }
   else if(message.includes("open calculator")){
       speak("opening calculator..")
       window.open("calculator://")
   }
   else if(message.includes("open whatsapp")){
       speak("opening whatsapp..")
       window.open("whatsapp://")
   }
   else if(message.includes("time")){
     let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
     speak(time)
   }
   else if(message.includes("date")){
       let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
       speak(date)
     }
   else{
       let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")
       speak(finalText)
       window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
   }
}

