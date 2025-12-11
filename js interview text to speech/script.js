var input=document.getElementById("input")
var speak=document.getElementById("speak")
var resume=document.getElementById("resume")
var cancel=document.getElementById("cancel")
var pause=document.getElementById("pause")
var text="";
input.addEventListener("change",(e)=>{
    text = e.target.value;
})
speak.addEventListener("click",()=>{
    var utterance=new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
    utterance.rate=1;
    utterance.pitch=1;
})
pause.addEventListener("click",()=>{
    speechSynthesis.pause();
})
resume.addEventListener("click",()=>{
    speechSynthesis.resume();
})
cancel.addEventListener("click",()=>{
    speechSynthesis.cancel();
})
var voiceSelect = document.getElementById("voiceselect");
function populateVoiceList() {
    if(typeof speechSynthesis === 'undefined') {
        return; 
    }

    var voices = speechSynthesis.getVoices();
    for(var i = 0; i < voices.length; i++) {
        var option = document.createElement('option');
        option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        voiceSelect.appendChild(option);
    }
}
populateVoiceList();
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}
voiceSelect.addEventListener('change', function() {
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    var utterance = new SpeechSynthesisUtterance(text);
    var voices = speechSynthesis.getVoices();
    for(var i = 0; i < voices.length; i++) {
        if(voices[i].name === selectedOption) {
            utterance.voice = voices[i];
            break;
        }       
    }
    speechSynthesis.speak(utterance);
}   );

