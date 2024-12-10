$(document).ready(function() {
    $('#registrationForm').submit(function(e) {
        e.preventDefault();

        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var address = $('#address').val();

        // Send the form data to the server via AJAX
        $.ajax({
            url: 'php/register.php',
            type: 'POST',
            data: {
                name: name,
                email: email,
                phone: phone,
                address: address
            },
            success: function(response) {
                alert('Registration Successful!');
                $('#registrationForm')[0].reset(); // Reset the form
            },
            error: function() {
                alert('Error while submitting the form.');
            }
        });
    });
});
