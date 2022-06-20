var dog_cat = ""
var myStatus = ""
var objects = []

function preload(){
    
}

function setup(){
    canvas = createCanvas(600, 440)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
   
}
function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status-h3").innerHTML = "Status : Detecting Image"
}

function modelLoaded(){
    console.log("Model is loaded")
    myStatus = true
    
}

function draw(){
    image(video, 0, 0, 640, 480)
    console.log("Ruhaan")
    if(myStatus != ""){
        console.log("Hello")
        for(i = 0; i<objects.length; i++){
            console.log("Hey There!")
            document.getElementById("status-h3").innerHTML = "Status : Detected"
            confidence = floor(objects[i].confidence*100);
            width = objects[i].width;
            height = objects[i].height;
            Xaxis = objects[i].x;
            Yaxis = objects[i].y;
            objectName = objects[i].label;
            
            
            document.getElementById("no-of-objects").innerHTML = "Number of Objects : "+objects.length 
            objectDetector.detect(video, gotResults)
            r = random(255)
            g = random(255)
            b = random(255)
            
            text(objectName+" "+confidence+"%", Xaxis, Yaxis)
            fill(r, g, b)
            noFill()
            stroke(r, g, b)
            rect(Xaxis, Yaxis, width, height)
        }
}
}

function gotResults(error, results){
    if(error){
        console.log(error)
    }else{
        console.log(results)
        objects = results
    }
}
