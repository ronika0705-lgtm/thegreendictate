(function(){
  var t=document.querySelector('.menu-toggle'),l=document.getElementById('nav-list');
  if(t&&l){t.addEventListener('click',function(){var o=l.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false');});}
  var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
  var form=document.getElementById('guest-form');
  if(form){
    var PUBLIC_KEY='_LPCG_37bEpgOIVrc',SERVICE_ID='service_ns3x6fb',TEMPLATE_ID='template_f1j5j3l';
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var msg=document.getElementById('form-msg'),btn=form.querySelector('button[type="submit"]'),d=new FormData(form);
      if(!window.emailjs){alert('Sorry, the email service could not load. Please check your connection and try again.');return;}
      btn.disabled=true;
      emailjs.send(SERVICE_ID,TEMPLATE_ID,{to_name:d.get('name'),to_email:d.get('email'),interest:d.get('interest'),message:d.get('message')||''},{publicKey:PUBLIC_KEY})
        .then(function(){form.reset();btn.disabled=false;msg.style.display='block';msg.focus();})
        .catch(function(){btn.disabled=false;alert('Sorry, something went wrong. Please try again, or message us on Instagram.');});
    });
  }
})();
