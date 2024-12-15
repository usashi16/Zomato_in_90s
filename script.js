document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.closest('.container').querySelector('.content');
        content.classList.toggle('hidden');
    });
});


    document.getElementById("order").addEventListener("click", function() {
        window.location.href = "order.html";
    });
    
    
    const form = document.getElementById('sform');

    // Add a submit event listener
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission (for demonstration purposes)
        event.preventDefault();

        // Show the alert box
        alert('Feedback submitted successfully!');

        // Optionally, you can reset the form
        form.reset();
    });
