document.addEventListener('DOMContentLoaded',function(){
  var movie_info_open = document.getElementsByClassName('movies');
  var detail_all = document.getElementsByClassName('movies-detail');  

  var open_detail = function(){
    var parent = this.parentNode.id;
    var elem = document.getElementById(parent);    
    var detail = elem.getElementsByClassName('movies-detail');    
    for (var i = 0; i < detail_all.length; i++) {
      detail_all[i].classList.remove("active-detail");
    }    
    detail[0].classList.add("active-detail");
    close_detail(parent);    
  };

  var close_detail = function(par){
    var parent_id = par;
    var parent = document.getElementById(parent_id);
    var detail = parent.getElementsByClassName('movies-detail');    
    detail[0].onclick = function(){
      this.classList.remove("active-detail");
    }
  }

  for (var i = 0; i < movie_info_open.length; i++) {
      movie_info_open[i].addEventListener('click', open_detail);
  }
  
});
//btn.addEventListener('click', function(){changeBgImg();ещё();ещё();....});
//block.style.backgroundImage = "url('img/img2.jpg')" 