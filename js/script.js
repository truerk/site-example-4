document.addEventListener('DOMContentLoaded',function(){
  //var btn_view = document.getElementsByClassName('movies-info');
  var btn_view = document.getElementsByClassName('movies');



  var open_detail = function(){
    //var parent = this.parentNode.parentNode.id;
    var parent = this.parentNode.id;
    var elem = document.getElementById(parent);    
    var detail = elem.getElementsByClassName('movies-detail');
    detail[0].classList.add("active-detail");    
    //this.addEventListener('click', close_detail);  
   // event.stopPropagation();
  };

  /*var close_detail = function(){
    var parent = document.getElementById(this.parentNode.id);
    //var detail = parent.getElementsByClassName('movies-detail');
    //detail[0].classList.remove("active-detail");
    var active = parent.getElementsByClassName('active-detail');
    active[0].classList.remove('active-detail');
  }
*/
for (var i = 0; i < btn_view.length; i++) {
    btn_view[i].addEventListener('click', open_detail);
}
});
  

/*document.addEventListener('DOMContentLoaded',function(){
  var btn_view = document.getElementsByClassName('downloads');
  btn_view.addEventListener('click', a(), false);  
});*/
//btn.addEventListener('click', function(){changeBgImg();ещё();ещё();....});
//block.style.backgroundImage = "url('img/img2.jpg')" 
/*

var block = document.getElementById('block');

function changeBgImg(){
    block.style.backgroundImage = "url('https://cs7062.vk.me/c540107/v540107359/2729/fYQlS_23QdA.jpg')";
}

changeBgImg();
*/
//var btn_view = document.getElementsById('iron');