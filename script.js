   document.addEventListener('DOMContentLoaded', function() {
      var boxes = document.querySelectorAll('.box');
      boxes.forEach(function(box) {
        box.addEventListener('click', function() {
          box.classList.toggle('active');
        });
      });

      var cards = document.querySelectorAll('.card');
      cards.forEach(function(card) {
        card.addEventListener('click', function() {
          var url = card.getAttribute('data-url');
          if (url) {
            window.location.href = url;
          }
        });
      });
    });
 