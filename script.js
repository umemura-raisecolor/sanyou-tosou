(function(){
  var btn=document.getElementById('menuBtn'),nav=document.getElementById('gnav');
  if(btn&&nav){btn.addEventListener('click',function(){
    var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');btn.textContent=o?'CLOSE':'MENU';
  });}
  var fs=document.querySelectorAll('.filters button');
  fs.forEach(function(b){b.addEventListener('click',function(){
    fs.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});
    var f=b.dataset.f;document.querySelectorAll('.work').forEach(function(w){w.hidden=!(f==='all'||w.dataset.cat===f);});
  });});
})();
