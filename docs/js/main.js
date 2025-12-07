// Waitlist Modal Functions
function openWaitlistModal() {
    document.getElementById('waitlistModal').style.display = 'flex';
    setTimeout(function() {
        document.querySelectorAll('nav a, nav button').forEach(function(el) {
            el.blur();
        });
    }, 100); // allow tap highlight, then blur
}

function closeWaitlistModal() {
    document.getElementById('waitlistModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('waitlistModal');
    if (event.target == modal) {
        closeWaitlistModal();
    }
}
