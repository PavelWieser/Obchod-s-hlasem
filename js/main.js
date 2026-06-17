
(function(){
  // Language toggle
  var lang = 'cs';
  var btn = document.getElementById('langToggle');
  
  function switchLang(newLang) {
    lang = newLang;
    document.body.setAttribute('data-lang', lang);
    btn.textContent = lang === 'cs' ? 'EN' : 'CZ';
    document.title = document.querySelector('meta[name="title-'+lang+'"]').content;
    
    // Switch all elements with data-cs / data-en
    document.querySelectorAll('[data-cs]').forEach(function(el) {
      var val = el.getAttribute('data-' + lang);
      if (val !== null && val !== '') {
        el.innerHTML = val;
      }
    });
    
    // Switch placeholders
    document.querySelectorAll('[data-cs-placeholder]').forEach(function(el) {
      var val = el.getAttribute('data-' + lang + '-placeholder');
      if (val) el.placeholder = val;
    });
  }
  
  btn.addEventListener('click', function() {
    switchLang(lang === 'cs' ? 'en' : 'cs');
  });
  
  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function(q) {
    q.addEventListener('click', function() {
      var item = this.closest('.faq-item');
      item.classList.toggle('open');
    });
  });
})();
