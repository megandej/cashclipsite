// Waitlist Modal Functions
function openWaitlistModal() {
    document.getElementById('waitlistModal').style.display = 'flex';
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
