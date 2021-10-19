function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0hKrP86XB/model.json', modelLoaded);
}

function modelLoaded() {
    classifier.classify(gotResult);
}