let currentStep = 0;
const gameContent = document.getElementById('game-content');
const nextBtn = document.getElementById('next-btn');

// Scenarios for Level 2
const level2Scenarios = {
    intro: {
        dialogue: "Obi-Wan: It's time to use your money effectively. Choose the best bank to invest in.",
        image: "./obi-wan.jpeg", // Update with the actual image path
        animation: "bounce" // Animation class
    },
    banks: [
        {
            name: "Bank A",
            description: "Offers a 1% interest rate on savings and a 3% interest rate on a 1-year fixed deposit.",
            correct: false,
            feedback: {
                character: "Yoda",
                dialogue: "Bank A offers low interest rates. Grow your savings, you will not!",
                image: "./yoda.png", // Update with the actual image path
                animation: "float" // Animation class
            }
        },
        {
            name: "Bank B",
            description: "Offers a 2% interest rate on savings and a 5% interest rate on a 1-year fixed deposit.",
            correct: true,
            feedback: {
                character: "Yoda",
                dialogue: "Great choice, you have made. Wealth and wisdom, this path will bring.",
                image: "./yoda.png", // Update with the actual image path
                animation: "float" // Animation class
            }
        },
        {
            name: "Bank C",
            description: "Offers a 0.5% interest rate on savings and a 2% interest rate on a 1-year fixed deposit.",
            correct: false,
            feedback: {
                character: "Yoda",
                dialogue: "Bank C, a poor choice it is. Better interest rates, you must seek.",
                image: "./yoda.png", // Update with the actual image path
                animation: "float" // Animation class
            }
        }
    ],
    princess: {
        dialogue: "Princess Peach: Well done! With the right investment, you can save me and your family!",
        image: "./princess_peach.jpeg", // Update with the actual image path
        animation: "float" // Animation class
    }
};

// Event listener for the "Next" button
nextBtn.addEventListener('click', nextStep);

function nextStep() {
    if (currentStep === 0) {
        loadLevel2Intro();
    } else if (currentStep === 1) {
        loadLevel2Choices();
    } else if (currentStep === 2) {
        checkAnswerLevel2();
    } else if (currentStep === 3) {
        endGame();
    }
}

function loadLevel2Intro() {
    const intro = level2Scenarios.intro;
    gameContent.innerHTML = `
        <img src="${intro.image}" alt="Obi-Wan" class="fade-in ${intro.animation}">
        <p class="character-dialogue fade-in">${intro.dialogue}</p>
    `;
    nextBtn.textContent = 'Continue';
    currentStep++;
}

function loadLevel2Choices() {
    const banks = level2Scenarios.banks;
    gameContent.innerHTML = `
        <h3 class="mb-4 fade-in">Choose the best bank to invest in:</h3>
        <div class="list-group fade-in">
            ${banks.map((bank, index) => `
                <label class="list-group-item">
                    <input type="radio" name="bank" value="${index}" class="form-check-input me-2">
                    <strong>${bank.name}</strong>: ${bank.description}
                </label>
            `).join('')}
        </div>
    `;
    nextBtn.textContent = 'Submit';
    currentStep++;
}

function checkAnswerLevel2() {
    const selectedBank = document.querySelector('input[name="bank"]:checked');
    if (selectedBank) {
        const bankIndex = parseInt(selectedBank.value);
        const chosenBank = level2Scenarios.banks[bankIndex];
        showCharacterFeedback(chosenBank);
        currentStep++;
    } else {
        alert('Please select a bank.');
    }
}

function showCharacterFeedback(bank) {
    gameContent.innerHTML = `
        <img src="${bank.feedback.image}" alt="${bank.feedback.character}" class="fade-in ${bank.feedback.animation}">
        <p class="character-dialogue fade-in">${bank.feedback.character} says: "${bank.feedback.dialogue}"</p>
    `;
    nextBtn.textContent = 'Finish Level 2';
}

function endGame() {
    const princess = level2Scenarios.princess;
    gameContent.innerHTML = `
        <img src="${princess.image}" alt="Princess Peach" class="fade-in ${princess.animation}">
        <p class="character-dialogue fade-in">${princess.dialogue}</p>
    `;
    nextBtn.style.display = 'none';
}
