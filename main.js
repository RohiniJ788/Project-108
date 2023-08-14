function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Xd8D0gVpo/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        random_no_r=Math.floor(Math.random()* 255) +1;
        random_no_g=Math.floor(Math.random()* 255) +1;
        random_no_b=Math.floor(Math.random()* 255) +1;

        document.getElementById("result_label").innerHTML="I Can Hear: " + results[0].label;
        document.getElementById("result_accuracy").innerHTML="Accuracy: " + (results[0].confidence.toFixed(2))*100+" % ";

        document.getElementById("result_label").style.color="rgb("+ random_no_r + "," + random_no_g + "," + random_no_b + ")";
        document.getElementById("result_accuracy").style.color="rgb("+ random_no_r + "," + random_no_g + "," + random_no_b + ")";

        img1=document.getElementById("cat");
        img2=document.getElementById("dog");

        if(results[0].label=="Cat"){
            img1.src="cute-cat.gif";
            img2.src="dog.jpg";
            
        }

        else if(results[0].label=="Dog"){
            img1.src="cat.jpg";
            img2.src="dog.gif";
           
        }

        

    }
}