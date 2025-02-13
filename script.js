document.addEventListener("DOMContentLoaded", function() {

    // Open Envelope when clicking the sticker
    document.getElementById("sticker").addEventListener("click", function() {
        document.getElementById("envelope").classList.toggle("open");
    });

    // Make the pig sticker inside the letter clickable
    document.querySelector(".small-sticker").addEventListener("click", function() {
        alert("Oink Oink! 🐷"); // Cute pig click event
    });

    // Yes Button Click Event
    document.getElementById("yes-btn").addEventListener("click", function() {
        document.getElementById("letter").style.display = "none"; // Hide letter
        let yesAnimation = document.getElementById("yes-animation");
        yesAnimation.classList.remove("hidden"); // Show Yes animation
        yesAnimation.classList.add("show"); // Ensure it displays
    });

    // No Button Click Event
    document.getElementById("no-btn").addEventListener("click", function() {
        document.getElementById("letter").style.display = "none"; // Hide letter
        let noAnimation = document.getElementById("no-animation");
        noAnimation.classList.remove("hidden"); // Show No animation
        noAnimation.classList.add("show"); // Ensure it displays

        // Simulate "Downloading Virus..." text appearing after 1 second
        setTimeout(function() {
            document.getElementById("no-animation").innerHTML += "<p>💀 SYSTEM ERROR 💀</p>";
        }, 1000);

        // Simulate screen shaking effect for 3 seconds
        setTimeout(function() {
            document.getElementById("no-animation").style.animation = "none";
            document.getElementById("no-animation").innerHTML += "<p>Just kidding! Love you anyway! ❤️</p>";
        }, 3000);
    });

});
