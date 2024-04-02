// const character = document.getElementById('character')
// character.addEventListener('click', function() {
//     const element = document.getElementById("main-box")
//     element.textContent = 'This is YOU. By you clicking you, you have now made this become way more complicated than you should have. Please stop.'
// })
const combinationLength = Math.floor(Math.random() * 3) + 2;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to randomly select 2-4 elements from an array
function selectRandomElements(array) {
    const shuffledArray = shuffleArray(array);
    return shuffledArray.slice(0, combinationLength);
}

const elements = [
    { id: 'character', text: 'This is YOU. By you clicking you, you have now made this become way more complicated than you should have. You should be disappointed in yourself. (not a riddle)' },
    { id: 'chair', text: 'A place that your sore butt can rest on and recover from a hard days work at your desk job typing on your computer, eating snacks, and using that big brain of yours...or if you are a laborer. Because in that case you actually deserve to sit here. (not a riddle)' },
    { id: 'coffee-table', text: 'This is something you can set drinks, food, and other items to hold for you at an elevated space in a way that makes it easy for you to reach for with very little effort on your part. I must say, congratulations on a job well done. (not a riddle)' },
    { id: 'controller', text: 'This is used to control a videogame system. It doesnt exist in this realm...though somehow the TV does. I wonder if the TV works. (not a riddle)' },
    { id: 'couch', text: 'I am what makes a potato......a COUCH potato. And now that you have sat on me.....YOU ARE MINE!!!! (not a riddle)'},
    { id: 'lamp', text: 'This entire screen is bright because of me and me only. BEHOLD! I AM THE HOLY LAMP! (not a riddle)'},
    { id: 'remote', text: 'Hey look you can use this to control the TV! Too bad it doesnt really work though... (not a riddle)'},
    { id: 'safe', text: 'Insert code combination here:'},
    { id: 'stand', text: 'I hold something very valuable....and also very heavy. My four legs hurt. Please help. (not a riddle)'},
    { id: 'table', text: 'What has legs but cannot walk? A table. Or a chair....but in this case it is an actual table. (not a riddle)'},
    { id: 'tv', text: 'Every single time you click me it is apparently way too fast. I turn off then on again but I can never seem to stay turned on....click harder? faster? longer? No idea how to quite turn me on yet. (not a riddle)'}
];

const riddles = [
    {key: '0', text: 'I multiply like rabbits in ways that are insane. But multiply me in one way and all the numbers are the same.', note: 'MULTIPLY,'},
    {key: '1', text: '1st, 2nd and 3rd are medals of bronze, silver, and gold. What have you done if you are standing first with the medal you hold?', note: 'GOLD,'},
    {key: '2', text: 'In one way I mean the word also, and in another I am going somewhere. What is the one thing that is missing which has the meaning of a number?', note: 'SOMETHING MISSING,'},
    {key: '3', text: 'The fox, the dog, and the cat ate one red bat. What is the one thing you can find in common with what you know of that fact?', note: 'ANIMALS,'},
    {key: '4', text: 'A bank taking your house and a golfer telling you to watch out. What is one word that explains what this is all about?', note: 'MONEY,'},
    {key: '5', text: 'Add me once and I am odd but add me again and I become even. I am the halfway to double digits creating "Steve" from "Steven."', note: 'MATH,'},
    {key: '6', text: 'A tongue licks a lollipop and a broken tooth requires a fix. John Wicks dog was killed so he went on a rampage for kicks. One word with three letters rhymes with this theme so you better figure it out quick!', note: 'JOHN WICK,'},
    {key: '7', text: 'I am either the prime or the jackpot as long as the numbers are in line. A letter removed from "Steven" will tell you which one will be fine.', note: 'CASINO,'},
    {key: '8', text: 'You may eat food as soon as it has been prepared and cooked. Yet, what is it called when you have already eaten the meal that you took?', note: 'FOOD,'},
    {key: '9', text: 'As a word with four letters I can mean one way or another. "No" in one way and in the other, a number', note: 'NO,'},
];

const mainBox = document.getElementById('main-box');
let mainBoxOriginalText = mainBox.textContent; // Store the original text content

// Randomly select 2-4 riddles from the riddles array based on the combination length
const selectedRiddles = selectRandomElements(riddles, combinationLength);

// Randomly select elements from the elements array (excluding the 'safe' element) based on the selected riddles count
const selectedElements = selectRandomElements(elements.filter(item => item.id !== 'safe'), selectedRiddles.length);

// Replace the texts of randomly selected elements with the selected riddles
selectedElements.forEach((element, index) => {
    element.text = selectedRiddles[index].text;
});

// Generate the safe combination based on the keys of the selected riddles
const safeCombination = selectedRiddles.map(riddle => riddle.key).join('');

// Set the safe combination to the 'safe' element text
elements.find(element => element.id === 'safe').text = safeCombination;

// Append the notes of the selected riddles to the mainBoxOriginalText in the order specified by the safe combination
const notesInOrder = safeCombination.split('').map(key => selectedRiddles.find(riddle => riddle.key === key).note);
mainBoxOriginalText += ' ' + notesInOrder.join(' '); // Append the notes to the original text content

// Update text content of each element in the DOM
elements.forEach(item => {
    const element = document.getElementById(item.id);
    if (element) {
        element.textContent = item.text;
        element.addEventListener('click', function() {
            mainBox.textContent = item.text;
        });
    }
});

// Rest of your code remains unchanged
function safeCombo() {
    const combinationInput = prompt('Enter the combination:');
    if (combinationInput === safeCombination) {
        mainBox.textContent = 'You have solved all the riddles! The safe has been unlocked and you have won a $1,000,000 dollar voucher! You may claim this voucher at any given store owned by Mr. Twedt!! Current stores in his possession: 0.';
    } else {
        mainBox.textContent = 'Wow....I thought you were smarter than this. If you need a break you can go sit back on that chair. In fact, behind the couch there are some extra sweatpants for you. Please, wear them. Get comfy.';
    }
}

document.addEventListener('click', function(event) {
    const clickedElementId = event.target.id;
    if (clickedElementId === 'safe') {
        safeCombo();
    } else if (!elements.some(item => item.id === clickedElementId)) {
        mainBox.textContent = mainBoxOriginalText;
    }
});