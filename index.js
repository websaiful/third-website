
var img = document.getElementById('img');
var image = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg'];
var imgLen = image.length;
var index = 0;
function next(){
      index++
      
      if (index >= imgLen){
        index = 0;
        img.src = image[index];
      }else{
        img.src = image[index];
      }
}
function prev(){
      index--
      img.src = image[index];
      if (index < 0){
        index = imgLen -1;
        img.src = image[index];
      }else{
        img.src = image[index];
      }
}