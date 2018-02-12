var header = document.getElementById("header");
var footer = document.getElementById("footer");
var red = document.getElementById("red");
var blue = document.getElementById("blue");
var black = document.getElementById("black");
var main = document.getElementById("main");
var open_close = document.getElementById("open_close");
var open_close1 = document.getElementById("open_close1");
var description = document.getElementById("description");
var mainbutton = document.getElementById("main-button");
var mainbutton1 = document.getElementById("main-button1");
var mainbutton2 = document.getElementById("main-button2");
var reviews = document.getElementById("reviews");
var reviews1 = document.getElementById("reviews1");
var reviews2 = document.getElementById("reviews2");
var charts = document.getElementById("charts");
var form = document.getElementById("form");
var messsageIcon = document.getElementsByClassName("message");
var imagesIcon = document.getElementsByClassName("images");
var imagesIcon1 = document.getElementsByClassName("images1");
var imagesIcon2 = document.getElementsByClassName("images2");
var imagesIcon3 = document.getElementsByClassName("images3");
var imagesIcon4 = document.getElementsByClassName("images4");
var imagesIcon5 = document.getElementsByClassName("images5");
blue.onclick = function(){
  if(header.classList.contains("header---red")){
    header.classList.remove("header---red");
    header.classList.add("header---blue");
    footer.classList.remove("footer---red");
    footer.classList.add("footer---blue");
      main.classList.remove("main---red");
      main.classList.add("main---blue");
      open_close.classList.remove("button---red");
      open_close.classList.add("button---blue");
      open_close1.classList.remove("button---red");
      open_close1.classList.add("button---blue");
      description.classList.remove("description---red");
      description.classList.add("description---blue");
      mainbutton.classList.remove("order---red");
      mainbutton.classList.add("order---blue");
      mainbutton1.classList.remove("order---red");
      mainbutton1.classList.add("order---blue");
      mainbutton2.classList.remove("order---red");
      mainbutton2.classList.add("order---blue");
      reviews.classList.remove("reviews---red");
      reviews.classList.add("reviews---blue");
      reviews1.classList.remove("reviews---red");
      reviews1.classList.add("reviews---blue");
      reviews2.classList.remove("reviews---red");
      reviews2.classList.add("reviews---blue");
      charts.classList.remove("charts---red");
      charts.classList.add("charts---blue");
      form.classList.remove("form---red");
      form.classList.add("form---blue");
  }else if(header.classList.contains("header---black")){
    header.classList.remove("header---black");
    header.classList.add("header---blue");
    footer.classList.remove("footer---black");
    footer.classList.add("footer---blue");
      main.classList.remove("main---black");
      main.classList.add("main---blue");
      open_close.classList.remove("button---black");
      open_close.classList.add("button---blue");
      open_close1.classList.remove("button---black");
      open_close1.classList.add("button---blue");
      description.classList.remove("description---black");
      description.classList.add("description---blue");
      mainbutton.classList.remove("order---black");
      mainbutton.classList.add("order---blue");
      mainbutton1.classList.remove("order---black");
      mainbutton1.classList.add("order---blue");
      mainbutton2.classList.remove("order---black");
      mainbutton2.classList.add("order---blue");
      reviews.classList.remove("reviews---black");
      reviews.classList.add("reviews---blue");
      reviews1.classList.remove("reviews---black");
      reviews1.classList.add("reviews---blue");
      reviews2.classList.remove("reviews---black");
      reviews2.classList.add("reviews---blue");
      charts.classList.remove("charts---black");
      charts.classList.add("charts---blue");
      form.classList.remove("form---black");
      form.classList.add("form---blue");
  }
  else{
  }
  for(var j = 0; j < messsageIcon.length; j++){
    messsageIcon[j].setAttribute("src", "img/consulting-message.png");
  }
  for(var j = 0; j < imagesIcon.length; j++){
    imagesIcon[j].setAttribute("src", "img/bluetooth.png");
  }
  for(var j = 0; j < imagesIcon1.length; j++){
    imagesIcon1[j].setAttribute("src", "img/battery.png");
  }

  for(var j = 0; j < imagesIcon2.length; j++){
    imagesIcon2[j].setAttribute("src", "img/microphone.png");
  }
  for(var j = 0; j < imagesIcon3.length; j++){
    imagesIcon3[j].setAttribute("src", "img/umbrella.png");
  }
  for(var j = 0; j < imagesIcon4.length; j++){
    imagesIcon4[j].setAttribute("src", "img/wifi.png");
  }
  for(var j = 0; j < imagesIcon5.length; j++){
    imagesIcon5[j].setAttribute("src", "img/folder.png");
  }

}
black.onclick = function(){
  if(header.classList.contains("header---red")){
    header.classList.remove("header---red");
    header.classList.add("header---black");
    footer.classList.remove("footer---red");
    footer.classList.add("footer---black");
      main.classList.remove("main---red");
      main.classList.add("main---black");
      open_close.classList.remove("button---red");
      open_close.classList.add("button---black");
      open_close1.classList.remove("button---red");
      open_close1.classList.add("button---black");
      description.classList.remove("description---red");
      description.classList.add("description---black");
      mainbutton.classList.remove("order---red");
      mainbutton.classList.add("order---black");
      mainbutton1.classList.remove("order---red");
      mainbutton1.classList.add("order---black");
      mainbutton2.classList.remove("order---red");
      mainbutton2.classList.add("order---black");

      reviews.classList.remove("reviews---red");
      reviews.classList.add("reviews---black");
      reviews1.classList.remove("reviews---red");
      reviews1.classList.add("reviews---black");
      reviews2.classList.remove("reviews---red");
      reviews2.classList.add("reviews---black");
      charts.classList.remove("charts---red");
      charts.classList.add("charts---black");
      form.classList.remove("form---red");
      form.classList.add("form---black");
  }else if(header.classList.contains("header---blue")){
    header.classList.remove("header---blue");
    header.classList.add("header---black");
    footer.classList.remove("footer---blue");
    footer.classList.add("footer---black");
      main.classList.remove("main---blue");
      main.classList.add("main---black");
      open_close.classList.remove("button---blue");
      open_close.classList.add("button---black");
      open_close1.classList.remove("button---blue");
      open_close1.classList.add("button---black");
      description.classList.remove("description---blue");
      description.classList.add("description---black");
      mainbutton.classList.remove("order---blue");
      mainbutton.classList.add("order---black");
      mainbutton1.classList.remove("order---blue");
      mainbutton1.classList.add("order---black");
      mainbutton2.classList.remove("order---blue");
      mainbutton2.classList.add("order---black");
      reviews.classList.remove("reviews---blue");
      reviews.classList.add("reviews---black");
      reviews1.classList.remove("reviews---blue");
      reviews1.classList.add("reviews---black");
      reviews2.classList.remove("reviews---blue");
      reviews2.classList.add("reviews---black");
      charts.classList.remove("charts---blue");
      charts.classList.add("charts---black");
      form.classList.remove("form---blue");
      form.classList.add("form---black");
  }else{
  }
  for(var j = 0; j < messsageIcon.length; j++){
    messsageIcon[j].setAttribute("src", "img/consulting-message 2.png");
  }
  for(var j = 0; j < imagesIcon.length; j++){
    imagesIcon[j].setAttribute("src", "img/bluetoothblack.png");
  }
  for(var j = 0; j < imagesIcon1.length; j++){
    imagesIcon1[j].setAttribute("src", "img/batteryblack.png");
  }
  for(var j = 0; j < imagesIcon2.length; j++){
    imagesIcon2[j].setAttribute("src", "img/microphoneblack.png");
  }
  for(var j = 0; j < imagesIcon3.length; j++){
    imagesIcon3[j].setAttribute("src", "img/umbrellablack.png");
  }
  for(var j = 0; j < imagesIcon4.length; j++){
    imagesIcon4[j].setAttribute("src", "img/wifiblack.png");
  }
  for(var j = 0; j < imagesIcon5.length; j++){
    imagesIcon5[j].setAttribute("src", "img/folderblack.png");
  }
}

red.onclick = function(){
  if(header.classList.contains("header---blue")){
    header.classList.remove("header---blue");
    header.classList.add("header---red");
    footer.classList.remove("footer---blue");
    footer.classList.add("footer---red");
      main.classList.remove("main---blue");
      main.classList.add("main---red");
      open_close.classList.remove("button---blue");
      open_close.classList.add("button---red");
      open_close1.classList.remove("button---blue");
      open_close1.classList.add("button---red");
      description.classList.remove("description---blue");
      description.classList.add("description---red");
      mainbutton.classList.remove("order---blue");
      mainbutton.classList.add("order---red");
      mainbutton1.classList.remove("order---blue");
      mainbutton1.classList.add("order---red");
      mainbutton2.classList.remove("order---blue");
      mainbutton2.classList.add("order---red");
      reviews.classList.remove("reviews---blue");
      reviews.classList.add("reviews---red");
      reviews1.classList.remove("reviews---blue");
      reviews1.classList.add("reviews---red");
      reviews2.classList.remove("reviews---blue");
      reviews2.classList.add("reviews---red");
      charts.classList.remove("charts---blue");
      charts.classList.add("charts---red");
      form.classList.remove("form---blue");
      form.classList.add("form---red");
  }else if(header.classList.contains("header---black")){
    header.classList.remove("header---black");
    header.classList.add("header---red");
    footer.classList.remove("footer---black");
    footer.classList.add("footer---red");
      main.classList.remove("main---black");
      main.classList.add("main---red");
      open_close.classList.remove("button---black");
      open_close.classList.add("button---red");
      open_close1.classList.remove("button---black");
      open_close1.classList.add("button---red");
      description.classList.remove("description---black");
      description.classList.add("description---red");
      mainbutton.classList.remove("order---black");
      mainbutton.classList.add("order---red");
      mainbutton1.classList.remove("order---black");
      mainbutton1.classList.add("order---red");
      mainbutton2.classList.remove("order---black");
      mainbutton2.classList.add("order---red");
      reviews.classList.remove("reviews---black");
      reviews.classList.add("reviews---red");
      reviews1.classList.remove("reviews---black");
      reviews1.classList.add("reviews---red");
      reviews2.classList.remove("reviews---black");
      reviews2.classList.add("reviews---red");
      charts.classList.remove("charts---black");
      charts.classList.add("charts---red");
      form.classList.remove("form---black");
      form.classList.add("form---red");
  }
  else{
  }
  for(var j = 0; j < messsageIcon.length; j++){
    messsageIcon[j].setAttribute("src", "img/consulting-message 1.png");
  }
  for(var j = 0; j < imagesIcon.length; j++){
    imagesIcon[j].setAttribute("src", "img/bluetoothred.png");
  }
  for(var j = 0; j < imagesIcon1.length; j++){
    imagesIcon1[j].setAttribute("src", "img/batteryred.png");
  }
  for(var j = 0; j < imagesIcon2.length; j++){
    imagesIcon2[j].setAttribute("src", "img/microphonered.png");
  }
  for(var j = 0; j < imagesIcon3.length; j++){
    imagesIcon3[j].setAttribute("src", "img/umbrellared.png");
  }
  for(var j = 0; j < imagesIcon4.length; j++){
    imagesIcon4[j].setAttribute("src", "img/wifired.png");
  }
  for(var j = 0; j < imagesIcon5.length; j++){
    imagesIcon5[j].setAttribute("src", "img/folderred.png");
  }
}



$(".owl-carousel").owlCarousel({
  dots: true,
  loop: true,
  responsive: {
    1001:
    {
      items: 1
    },
    200:
    {
      items: 1,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000
    }
  }
});

open_close.onclick = function(){
	blockcontacts.classList.toggle('active1');
	var body=document.getElementById('body');
	body.classList.add("darkness")
}
close_js.onclick = function(){
	blockcontacts.classList.remove('active1');
	var body=document.getElementById('body');
	body.classList.remove("darkness")
}
function func() {
    var x = document.getElementById("order-color").value;
    if(x=='blue-theme'){
      if(header.classList.contains("header---red")){
        header.classList.remove("header---red");
        header.classList.add("header---blue");
          main.classList.remove("main---red");
          main.classList.add("main---blue");
          open_close.classList.remove("button---red");
          open_close.classList.add("button---blue");
          description.classList.remove("description---red");
          description.classList.add("description---blue");
          mainbutton.classList.remove("order---red");
          mainbutton.classList.add("order---blue");
          mainbutton1.classList.remove("order---red");
          mainbutton1.classList.add("order---blue");
      }else if(header.classList.contains("header---black")){
        header.classList.remove("header---black");
        header.classList.add("header---blue");
          main.classList.remove("main---black");
          main.classList.add("main---blue");
          open_close.classList.remove("button---black");
          open_close.classList.add("button---blue");
          description.classList.remove("description---black");
          description.classList.add("description---blue");
          mainbutton.classList.remove("order---black");
          mainbutton.classList.add("order---blue");
          mainbutton1.classList.remove("order---black");
          mainbutton1.classList.add("order---blue");
      }
      else{
      }
      for(var j = 0; j < messsageIcon.length; j++){
        messsageIcon[j].setAttribute("src", "img/consulting-message.png");
      }
    }
    else if(x=='black-theme'){
      if(header.classList.contains("header---red")){
        header.classList.remove("header---red");
        header.classList.add("header---black");
          main.classList.remove("main---red");
          main.classList.add("main---black");
          open_close.classList.remove("button---red");
          open_close.classList.add("button---black");
          description.classList.remove("description---red");
          description.classList.add("description---black");
          mainbutton.classList.remove("order---red");
          mainbutton.classList.add("order---black");
          mainbutton1.classList.remove("order---red");
          mainbutton1.classList.add("order---black");
      }else if(header.classList.contains("header---blue")){
        header.classList.remove("header---blue");
        header.classList.add("header---black");
          main.classList.remove("main---blue");
          main.classList.add("main---black");
          open_close.classList.remove("button---blue");
          open_close.classList.add("button---black");
          description.classList.remove("description---blue");
          description.classList.add("description---black");
          mainbutton.classList.remove("order---blue");
          mainbutton.classList.add("order---black");
          mainbutton1.classList.remove("order---blue");
          mainbutton1.classList.add("order---black");
      }else{
      }
      for(var j = 0; j < messsageIcon.length; j++){
        messsageIcon[j].setAttribute("src", "img/consulting-message 2.png");
      }
   }
   else if(x=='red-theme'){
     if(header.classList.contains("header---blue")){
       header.classList.remove("header---blue");
       header.classList.add("header---red");
         main.classList.remove("main---blue");
         main.classList.add("main---red");
         open_close.classList.remove("button---blue");
         open_close.classList.add("button---red");
         description.classList.remove("description---blue");
         description.classList.add("description---red");
         mainbutton.classList.remove("order---blue");
         mainbutton.classList.add("order---red");
         mainbutton1.classList.remove("order---blue");
         mainbutton1.classList.add("order---red");
     }else if(header.classList.contains("header---black")){
       header.classList.remove("header---black");
       header.classList.add("header---red");
         main.classList.remove("main---black");
         main.classList.add("main---red");
         open_close.classList.remove("button---black");
         open_close.classList.add("button---red");
         description.classList.remove("description---black");
         description.classList.add("description---red");
         mainbutton.classList.remove("order---black");
         mainbutton.classList.add("order---red");
         mainbutton1.classList.remove("order---black");
         mainbutton1.classList.add("order---red");
     }
     else{
     }
     for(var j = 0; j < messsageIcon.length; j++){
       messsageIcon[j].setAttribute("src", "img/consulting-message 1.png");
     }
   }
}

$(".header__menu-button, .header__hamb-close").on("click", function(){
  $(".header__hamb").toggleClass('active');
  $("body").toggleClass('overflow-body');

})
//Color choose
