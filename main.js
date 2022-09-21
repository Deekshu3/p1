var SpeechRecognition= window.webkitSpeechRecoginition;
var recognition= new SpeechRecognition();

function start(){
document.getElementById("text").innerHTML="";
recognition.start();
}

recognition.onresult=function(event){
    console.log(event)
var text=event.results[0][0].transcript;
document.getElementById("text").innerHTML=text;
if (content=="take my selfie"){
    console.log("taking selie--");
    speak ();
}}

function speak(){
    var synth =window.speechSynthesis;
    var speak_data="taking selfie in five minutes"
    var utter_This=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_This);
    Webcam.attatch(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}
camera=document.getElementById("camera");
webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="sefie_image"  src="'+data_uri+'">';
});}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}



