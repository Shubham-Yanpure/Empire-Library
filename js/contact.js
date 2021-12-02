let btn = document.getElementById('submit-contact');
btn.addEventListener('click', function () {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name.length < 3 || email.length < 8 || message.length < 3) {
        let msg1 = document.getElementById('msg1');
        msg1.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert" style="width: 100%;">
                        <strong>Oops! </strong> Looks like something is missing, please fill all entries correctly, and try again!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>`;
        setTimeout(function () {
            msg1.innerHTML = '';
        }, 5000);
    } else {
        let msg1 = document.getElementById('msg1');
        msg1.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert" style="width: 100%;">
                        <strong>Thank you! </strong> Your information is successfully submitted, kindly wait for our response!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>`;
        setTimeout(function () {
            msg1.innerHTML = '';
        }, 5000);
    }

});

