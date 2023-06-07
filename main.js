Webcam.set({
    width:350,
    height:350,
    image_format: 'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';

    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xQRttb4CE/model.json',modelLoaded)

function modelLoaded(){
    console.log('model loaded');
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1 = "the first prediction is "+ prediction_1;
    speak_data_2 = " and the second prediction is "+ prediction_2;
    var utterThis =new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterTHis);
}
function gotResult(error, result){
    if(error){
        console.error(error);
    } else{
        console.log(reasults);
        document.getElementById("result_emotion_name").innerHTML = result[0].label;
        gesture=results[0].label;
        toSpeak="";
        if(gesture == "amazing") { toSpeak = "This is looking amazing"; document.getElementById("result_object_gesture_icon").innerHTML = "&#128076;"; }
        else if(gesture == "best") { toSpeak = "All the best"; document.getElementById("result_object_gesture_icon").innerHTML = "&#128077;"; }
        else if(gesture == "victory") { toSpeak = "That was the marvelous victory"; document.getElementById("result_object_gesture_icon").innerHTML = "&#9996;"; } speak();

    }
}