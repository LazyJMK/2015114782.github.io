var imgArray = new Array();
var num = 20;
for(var i = 1 ; i <= 20 ; i++){
    imgArray[i] = "./foodImg/"+i+".jpeg";
}
function showImage(){
    var imgNum = Math.round(Math.random()*20 + 1);
    var obj = document.getElementById("showimg");
    obj.src = imgArray[imgNum];
}