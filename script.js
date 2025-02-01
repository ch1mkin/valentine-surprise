document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const extraYesBtns = document.getElementById("extra-yes-btns");
    const heartsContainer = document.getElementById("hearts-container");
    const bgMusic = document.getElementById("bg-music");
    const messageElem = document.querySelector(".message");
    const titleElem = document.querySelector(".title");  // Reference to the title element

    // Play Background Music
    bgMusic.play();

    // Store messages for each "Yes"
    const messages = [
        "Why Yes huh? 😜", 
        "Yes Kyu Kar Rhe Ho? 😭😭😭😭😭😭", 
        "Please Don’t Say Yes! 😬", 
        "Oye Yes Mat Karo pleaseeeeeeeeeeeee 🥹🥹🥹🥹", 
        "Chlo Thike Karlo Yes! 🙄",
        "I LOVE YOU SHEREEEEEEEEEEEEEEN , YAYAYAYAYAYAYYAYAYAY MY VALENTINES 💖"
    ];
    let currentMessageIndex = 0;

    // Generate Falling Hearts when the page loads
    const heartInterval = setInterval(generateFallingHearts, 200);

    function generateFallingHearts() {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // "No" Button Moves Randomly in a small radius (500px)
    noBtn.addEventListener("mouseover", function () {
        const containerRect = document.querySelector(".container").getBoundingClientRect();
        const radius = 500;  // Set the radius to 500px for movement
        const randomX = Math.random() * radius * 2 - radius;
        const randomY = Math.random() * radius * 2 - radius;

        // Ensure "No" button stays within bounds
        const newX = Math.max(0, Math.min(containerRect.width - noBtn.offsetWidth, randomX));
        const newY = Math.max(0, Math.min(containerRect.height - noBtn.offsetHeight, randomY));

        noBtn.style.transform = `translate(${newX}px, ${newY}px)`;
    });

    // "Yes" Button Click Event - Reveal Messages One by One
    yesBtn.addEventListener("click", function () {
        // Trigger Bounce Animation on "Yes" button click
        yesBtn.classList.add("bounce");
        setTimeout(() => {
            yesBtn.classList.remove("bounce"); // Remove bounce class after animation
        }, 500); // Bounce duration

        if (currentMessageIndex < messages.length - 1) {
            // Show next message
            messageElem.innerHTML = messages[currentMessageIndex];
            currentMessageIndex++;

            // Optionally, make the button text more fun or change it
            yesBtn.innerHTML = "Yes Again 💖";
        } else {
            // When final message is reached, show confetti
            clearInterval(heartInterval);  // Stop the falling hearts

            // Show additional heart confetti
            for (let i = 0; i < 30; i++) {
                let heart = document.createElement("div");
                heart.innerHTML = "❤️";
                heart.classList.add("heart");
                heart.style.left = Math.random() * 100 + "vw";
                heart.style.animationDuration = Math.random() * 3 + 2 + "s";
                heartsContainer.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 5000);
            }

            // Hide the title (Shereen, Will You Be My Valentine?)
            titleElem.style.display = "none";
            yesBtn.style.display = "none";

            // Make the final message big and joyful
            messageElem.innerHTML = `
                <p style="font-size: 3rem; font-family: 'Dancing Script', cursive; color: #ff4b5c; font-weight: bold;">
                    Thank you, Shereen! You make my heart skip a beat! 💖
                    <br> 
                    You make my heart beat, you make me Happy, you make me Love, 
                    You are my everything, my ONLY THING! 💖
                </p>
                <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2ZoamV2OGloYXJmdXkwNnJsYWo1NHUzcjg5NTh1MmN6M240c2d4NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1JmGiBtqTuehfYxuy9/giphy.gif" alt="Cute Bear Hug" width="300">
            `;
        }
    });
});
