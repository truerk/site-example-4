document.addEventListener('DOMContentLoaded',function(){

  var movie_info_open = document.getElementsByClassName('movies');
  var detail_all = document.getElementsByClassName('movies-detail');
  var burger_button = document.getElementById('burger_button');
  var content = document.getElementById('content');
  var burger_button_close = document.getElementById('burger_button_close');
  var mobile_menu = document.getElementById('mobile_menu');    

  var open_detail = function(){
    var parent = this.parentNode.id;
    var elem = document.getElementById(parent);    
    var detail = elem.getElementsByClassName('movies-detail');    
    for (var i = 0; i < detail_all.length; i++) {
      detail_all[i].classList.remove("active-detail");
    }    
    detail[0].classList.add("active-detail");
    close_detail(detail);    
  };

  var close_detail = function(det){
    var detail = det;
    detail[0].onclick = function(){
      this.classList.remove("active-detail");
    }
  }

  for (var i = 0; i < movie_info_open.length; i++) {
      movie_info_open[i].addEventListener('click', open_detail);
  }

  burger_button.onclick = function(){
    mobile_menu.style.display = 'flex';
    burger_button_close.style.display = 'flex';
    burger_button.style.display = 'none';
  };
  burger_button_close.onclick = function(){
    mobile_menu.style.display = 'none';
    burger_button_close.style.display = 'none';
    burger_button.style.display = 'flex';
  };
  content.onclick = function(){
    mobile_menu.style.display = 'none';
    burger_button_close.style.display = 'none';
    burger_button.style.display = 'flex';
  };
  
});
//btn.addEventListener('click', function(){changeBgImg();ещё();ещё();....});
//block.style.backgroundImage = "url('img/img2.jpg')" 