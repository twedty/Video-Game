// const character = document.getElementById('character')
// character.addEventListener('click', function() {
//     const element = document.getElementById("main-box")
//     element.textContent = 'This is YOU. By you clicking you, you have now made this become way more complicated than you should have. Please stop.'
// })
const elements = [
    { id: 'character', text: 'This is YOU. By you clicking you, you have now made this become way more complicated than you should have. You should be disappointed in yourself.' },
    { id: 'chair', text: 'A place that your sore butt can rest on and recover from a hard days work at your desk job typing on your computer, eating snacks, and using that big brain of yours...or if you are a laborer. Because in that case you actually deserve to sit here.' },
    { id: 'coffee-table', text: 'This is something you can set drinks, food, and other items to hold for you at an elevated space in a way that makes it easy for you to reach for with very little effort on your part. I must say, congratulations on a job well done.' },
    { id: 'controller', text: 'A tongue licks a lollipop and a broken tooth requires a fix. John Wicks dog was killed so he went on a rampage for kicks. One word with three letters rhymes with this theme so you better figure it out quick!' },
    { id: 'couch', text: 'I am what makes a potato......a COUCH potato. And now that you have sat on me.....YOU ARE MINE!!!!' },
    { id: 'lamp', text: 'I multiply like rabbits in ways that are insane. But multiply me in one way and all the numbers are the same.' },
    { id: 'remote', text: 'As a word with four letters I can mean one way or another. "No" in one way and in the other, a number.' },
    { id: 'safe', text: 'Insert code combination here:' },
    { id: 'stand', text: 'I hold something very valuable....and also very heavy. My four legs hurt. Please help.' },
    { id: 'table', text: 'What has legs but cannot walk? A table. Or a chair....but in this case it is an actual table.' },
    { id: 'tv', text: 'The fox, the dog, and the cat ate one red bat. What is the one thing you can find in common with what you know of that fact?' }
];

const mainBox = document.getElementById('main-box');
const mainBoxOriginalText = mainBox.textContent;

elements.forEach(item => {
    const element = document.getElementById(item.id);
    element.addEventListener('click', function() {
        mainBox.textContent = item.text;
    });
});

function safeCombo() {
    const combinationInput = prompt('Enter the combination:');
    const correctCombination = '6093';

    if (combinationInput === correctCombination) {
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

