document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('goButton');

    button.addEventListener('click', function() {
        waitAndAlert();
    });

    function waitAndAlert() {
        setTimeout(function() {
            alert('Test completed');
        }, 2000);
    }
});