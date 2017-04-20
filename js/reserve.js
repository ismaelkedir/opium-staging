$(document).ready(function(){
    $('#reserve-form').submit(function(e) {
        var name = $('#name'),
            phone = $('#phone'),
            email = $('#email'),
            people = $('#people'),
            date = $('#date'),
            time = $('#time');

        // If one of these fields are empty
        if (!name.val || !phone.val || !email.val || !people.val || !date.val || !time.val) {
            // Show an error
            toastr.error("Please fill-in the form properly.", "Error");

            // If all of them are not empty
        } else {
            // prevent the page from redirecting
            e.preventDefault();

            // Make the ajax request to formspree.io
            $.ajax({
                url: "https://formspree.io/" + "kis" + "mael" + "kemal" + "@" + "gmail" + ".com",
                method: "POST",
                data: $(this).serialize(), // serialized data of the form
                dataType: "json"

                // If the request is successfull
            }).then(function(success) {
                toastr.success("Thank you for reserving a table at Opium Restaurant", "Reservation made Successfully!");

                // Reset the form
                $('#reserve-form').get(0).reset();

                // If the request fails
            }, function(error) {
                toastr.error("Could not make reservation. Please try again.", "Error. Try Again!");
            });
        }
    });
    
    $('.timepicker').timepicker({
        timeFormat: 'h:mm p',
        interval: 60,
        minTime: '12:00pm',
        maxTime: '9:00pm',
        defaultTime: '12',
        startTime: '10:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
});
