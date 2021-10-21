function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0hKrP86XB/model.json', modelLoaded);
}

function modelLoaded() {
    classifier.classify(gotResult);
}

function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_color_r = Math.floor(Math.random()*255) + 1;
        random_color_b = Math.floor(Math.random()*255) + 1;
        random_color_g = Math.floor(Math.random()*255) + 1;
        console.log("R = " + random_color_r + ", B = " + random_color_b + ", G = " + random_color_g);
        document.getElementById("sound").innerHTML = "I can hear: " + results[0].label;
        document.getElementById("accuracy").innerHTML = "Accuracy: " + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("sound").style.color = "rgb("+random_color_r+","+random_color_g+","+random_color_b+")";
        document.getElementById("accuracy").style.color = "rgb("+random_color_r+","+random_color_g+","+random_color_b+")";
        alien1 = document.getElementById("alien1");
        alien2 = document.getElementById("alien2");
        alien3 = document.getElementById("alien3");
        alien4 = document.getElementById("alien4");
        if(results[0].label=="Background Noise"){
            alien1.src = "aliens-01.gif";
            alien2.src = "aliens-02.png";
            alien3.src = "aliens-03.png";
            alien4.src = "aliens-04.png";
        }
        else if(results[0].label=="clap"){
            alien1.src = "aliens-01.png";
            alien2.src = "aliens-02.gif";
            alien3.src = "aliens-03.png";
            alien4.src = "aliens-04.png";
        }
        else if(results[0].label=="snap"){
            alien1.src = "aliens-01.png";
            alien2.src = "aliens-02.png";
            alien3.src = "aliens-03.gif";
            alien4.src = "aliens-04.png";
        }
        else if(results[0].label=="bell"){
            alien1.src = "aliens-01.png";
            alien2.src = "aliens-02.png";
            alien3.src = "aliens-03.png";
            alien4.src = "aliens-04.gif";
        }
    }
}
