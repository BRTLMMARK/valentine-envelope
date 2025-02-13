document.addEventListener("DOMContentLoaded", function() {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");
    const sticker = document.getElementById("sticker");
    const yesAnimation = document.getElementById("yes-animation");
    const noAnimation = document.getElementById("no-animation");

    // Open Envelope when clicking the sticker
    sticker.addEventListener("click", function(event) {
        envelope.classList.add("open");
        letter.style.display = "flex"; // Show the letter when envelope opens
        event.stopPropagation(); // Prevent immediate closing
    });

    // Yes Button Click Event
    document.getElementById("yes-btn").addEventListener("click", function() {
        letter.style.display = "none"; // Hide letter
        yesAnimation.classList.remove("hidden"); // Show Yes animation
        yesAnimation.classList.add("show");
    });

    // No Button Click Event
    document.getElementById("no-btn").addEventListener("click", function() {
        letter.style.display = "none"; // Hide letter
        noAnimation.classList.remove("hidden"); // Show No animation
        noAnimation.classList.add("show");

        // Simulate "Downloading Virus..." text appearing after 1 second
        setTimeout(function() {
            noAnimation.innerHTML += "<p>💀 SYSTEM ERROR 💀</p>";
        }, 1000);

        // Simulate screen shaking effect for 3 seconds
        setTimeout(function() {
            noAnimation.style.animation = "none";
            noAnimation.innerHTML += "<p>Just kidding! Love you anyway! ❤️</p>";
        }, 3000);
    });

    // Close Letter when Clicking Outside (Background)
    document.addEventListener("click", function(event) {
        if (!letter.contains(event.target) && !sticker.contains(event.target)) {
            letter.style.display = "none"; // Hide the letter
            envelope.classList.remove("open"); // Close the envelope
        }
    });

});
