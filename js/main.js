
(function(){
  var lang = 'cs';
  var btn = document.getElementById('langToggle');
  var descMeta = document.querySelector('meta[name="description"]');
  var descOriginal = descMeta ? descMeta.getAttribute('content') : '';

  function switchLang(newLang) {
    lang = newLang;
    document.documentElement.lang = lang;
    document.body.setAttribute('data-lang', lang);
    btn.textContent = lang === 'cs' ? 'EN' : 'CZ';
    document.title = document.querySelector('meta[name="title-'+lang+'"]').content;

    if (descMeta) {
      if (lang === 'cs') {
        descMeta.setAttribute('content', descOriginal);
      } else {
        var altDesc = document.querySelector('meta[name="description-' + lang + '"]');
        if (altDesc) descMeta.setAttribute('content', altDesc.getAttribute('content'));
      }
    }

    document.querySelectorAll('[data-cs]').forEach(function(el) {
      var val = el.getAttribute('data-' + lang);
      if (val !== null && val !== '') {
        el.innerHTML = val;
      }
    });

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
      this.setAttribute('aria-expanded', item.classList.contains('open') ? 'true' : 'false');
    });
  });
})();
