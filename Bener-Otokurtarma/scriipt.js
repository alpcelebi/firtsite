document.querySelectorAll('#hemenAraButton').forEach(function(button) {
    button.addEventListener('click', function() {
      var phoneNumber = '+905346030233'; // Telefon numaranızı buraya ekleyin
      window.location.href = 'tel:' + phoneNumber;
    });
  });

//   function showSlides(n) {
//     let i;
//     const slides = document.getElementsByClassName('mySlides');
  
//     // n değeri slides dizisinin sınırları içinde olacak şekilde kontrol edilir
//     if (n > slides.length) {
//       n = 1;
//     }
  
//     if (n < 1) {
//       n = slides.length;
//     }
  
//     // Tüm slaytları gizle
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = 'none';
//     }
  
//     // Belirli slaytı göster
//     slides[n - 1].style.display = 'block';
//   }