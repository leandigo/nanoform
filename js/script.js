function submitEmail(val) {
    if (validEmail(val)) {
        $('#thanks').remove();

        var thank = document.createElement('div');
        thank.id = 'thanks';
        thank.style.cssText = 'margin-top: 2em; font: 1.4em sans-serif; color: green;';
        thank.innerText = 'Thank You!';

        $('#contact-container').append(thank);
        setTimeout(function() {
            $('#thanks').remove();
        }, 2000);
    } else {
        $('#contact').shake(3, 10, 500);
    }
}

function validEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}