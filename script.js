document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const flower = document.getElementById('flower');
    const bud = document.getElementById('bud');
    const sunflower = document.getElementById('sunflower');
    const flowerMessage = document.getElementById('flower-message');
    const galleryContainer = document.getElementById('gallery-container');
    const buttonContainer = document.getElementById('button-container');
    const pickFlowerBtn = document.getElementById('pick-flower');
    const bouquetCard = document.getElementById('bouquet-card');
    const closeCardBtn = document.getElementById('close-card');
    const messagePopup = document.getElementById('message-popup');
    const popupContent = document.querySelector('.popup-content');
    const petalsContainer = document.getElementById('petals-container');
    const insectsContainer = document.getElementById('insects-container');
    
    // Track if flower has bloomed
    let hasFlowerBloomed = false;
    
    // Flower bloom when clicked
    flower.addEventListener('click', function() {
        if (!hasFlowerBloomed) {
            bloomFlower();
        }
    });
    
    // Add click event directly to the bud as well
    bud.addEventListener('click', function(event) {
        console.log('Bud clicked!');
        if (!hasFlowerBloomed) {
            bloomFlower();
        }
        // Stop event propagation to prevent double triggering
        event.stopPropagation();
    });
    
    // Add a click event to document to help debug
    document.addEventListener('click', function(event) {
        console.log('Document clicked at:', event.clientX, event.clientY);
    });
    
    // Function to handle flower blooming
    function bloomFlower() {
        // Hide the bud
        bud.classList.add('hidden');
        
        // Show and animate the sunflower
        sunflower.classList.remove('hidden');
        setTimeout(() => {
            sunflower.classList.add('bloom');
        }, 100);
        
        // Show the message after a delay
        setTimeout(() => {
            flowerMessage.classList.remove('hidden');
            flowerMessage.classList.add('show');
        }, 1000);
        
        // Start falling petals animation
        createFallingPetals();
        
        // Add insects after flower blooms
        setTimeout(() => {
            createInsects();
        }, 1500);
        
        // Show gallery after a delay
        setTimeout(() => {
            galleryContainer.classList.remove('hidden');
            galleryContainer.classList.add('show');
        }, 2000);
        
        // Show pick flower button
        setTimeout(() => {
            buttonContainer.classList.remove('hidden');
            buttonContainer.classList.add('show');
        }, 2500);
        
        // Set flower as bloomed
        hasFlowerBloomed = true;
        
        // Make petals interactive
        makePetalsInteractive();
    }
    
    // Function to create falling petals
    function createFallingPetals() {
        // Create 20 petals
        for (let i = 0; i < 20; i++) {
            createPetal();
        }
        
        // Continue creating petals at intervals
        setInterval(createPetal, 3000);
    }
    
    // Function to create a single falling petal
    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('falling-petal');
        
        // Random position, size, and animation duration
        const left = Math.random() * 100;
        const size = Math.random() * 10 + 10;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        
        petal.style.left = `${left}%`;
        petal.style.width = `${size}px`;
        petal.style.height = `${size * 2}px`;
        petal.style.animationDuration = `${duration}s`;
        petal.style.animationDelay = `${delay}s`;
        
        // Add slight color variation
        const hue = 40 + Math.random() * 20; // Gold/yellow variations
        petal.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        
        petalsContainer.appendChild(petal);
        
        // Remove petal after animation completes
        setTimeout(() => {
            petal.remove();
        }, (duration + delay) * 1000);
    }
    
    // Function to make petals interactive
    function makePetalsInteractive() {
        const petals = document.querySelectorAll('.petal');
        
        petals.forEach(petal => {
            petal.addEventListener('click', function() {
                const message = this.getAttribute('data-message');
                showPopupMessage(message);
            });
        });
    }
    
    // Function to create insects (butterflies and bees)
    function createInsects() {
        // Create 3 butterflies
        for (let i = 0; i < 3; i++) {
            createInsect('butterfly', [
                "You make my heart flutter",
                "Every day with you is magical",
                "You're as beautiful as a butterfly"
            ][i]);
        }
        
        // Create 2 bees
        for (let i = 0; i < 2; i++) {
            createInsect('bee', [
                "You're my honey",
                "We make a perfect team"
            ][i]);
        }
    }
    
    // Function to create a single insect
    function createInsect(type, message) {
        const insect = document.createElement('div');
        insect.classList.add('insect', type);
        
        // Set random starting position
        const top = Math.random() * 60 + 20; // Keep within middle 60% of screen
        insect.style.top = `${top}%`;
        
        // Add message data
        insect.setAttribute('data-message', message);
        
        // Add click event
        insect.addEventListener('click', function() {
            const message = this.getAttribute('data-message');
            showPopupMessage(message);
        });
        
        insectsContainer.appendChild(insect);
    }
    
    // Function to show popup message
    function showPopupMessage(message) {
        popupContent.textContent = message;
        messagePopup.classList.add('show');
        
        // Hide popup after 3 seconds
        setTimeout(() => {
            messagePopup.classList.remove('show');
        }, 3000);
    }
    
    // Pick flower button click event
    pickFlowerBtn.addEventListener('click', function() {
        console.log('Pick flower button clicked!');
        bouquetCard.classList.remove('hidden');
        bouquetCard.classList.add('show');
    });
    
    // Close card button click event
    closeCardBtn.addEventListener('click', function() {
        bouquetCard.classList.remove('show');
        setTimeout(() => {
            bouquetCard.classList.add('hidden');
        }, 500); // Wait for the fade-out transition to complete
    });
    
    // Close popup when clicked
    messagePopup.addEventListener('click', function() {
        this.classList.remove('show');
    });
    
    // Initialize photo frames with random rotations
    const photoFrames = document.querySelectorAll('.photo-frame');
    photoFrames.forEach(frame => {
        const rotation = (Math.random() * 10 - 5); // Random rotation between -5 and 5 degrees
        frame.style.setProperty('--rotation', `${rotation}deg`);
    });
});