import { Element } from './types/elements';
import { Riddle } from './types/riddles';
import { shuffleArray } from './utilities/shuffle';
import { selectRandomElements } from './utilities/selectRandomElements';
import { safeCombo } from './actions/safeCombo';

const combinationLength: number = Math.floor(Math.random() * 3) + 2; // Random number between 2-4
const elements: Element[] = [
    { id: 'character', text: 'This is YOU.' },
    { id: 'chair', text: 'A place to rest.' },
    { id: 'coffee-table', text: 'A table for drinks.' },
    { id: 'controller', text: 'Used to control a game.' },
    { id: 'couch', text: 'Makes a couch potato.' },
    { id: 'lamp', text: 'I light up the room.' },
    { id: 'remote', text: 'Use me to control the TV.' },
    { id: 'safe', text: 'Insert code combination here.' },
    { id: 'stand', text: 'I hold something valuable.' },
    { id: 'table', text: 'What has legs but cannot walk?' },
    { id: 'tv', text: 'I turn on and off.' },
];

const riddles: Riddle[] = [
    {key: '0',text: 'I multiply like rabbits in ways that are insane. But multiply me in one way and every number becomes the same.', note: 'MULTIPLY,', hint: 'There is only a single number that can make ALL numbers the same.'},
    {key: '1', text: '1st, 2nd and 3rd are medals of bronze, silver, and gold. What have you done if you are standing first with the medal you hold?', note: 'GOLD,', hint: 'If you finish last you have lost and if you finish first...'},
    {key: '2', text: 'In one way I mean the word also, and in another I am going somewhere. What is the one thing that is missing which has the meaning of a number?', note: 'SOMETHING MISSING,', hint: 'There, they`re, their...'},
    {key: '3', text: 'The fox, the dog, and the cat ate one red bat. What is the one thing you can find in common with what you know of that fact?', note: 'ANIMALS,', hint: 'Look at the first sentence and find its common theme.'},
    {key: '4', text: 'A bank claiming your house and a golfer telling you to watch out. What is one word that explains what this is all about?', note: 'MONEY,', hint: 'Something to do with closure...'},
    {key: '5', text: 'Add me once and I am odd but add me again and I become even. I am the halfway to double digits creating "Steve" from "Steven."', note: 'MATH,', hint: 'What is halfway to double digits?'},
    {key: '6', text: 'A tongue licks a lollipop and a broken tooth requires a fix. John Wick`s dog was killed so he went on a rampage for kicks. One word with three letters rhymes with this theme so you better figure it out quick!', note: 'JOHN WICK,', hint: 'Key words here are: licks, fix, Wicks, and kicks.'},
    {key: '7', text: 'I am either the prime or the jackpot as long as the numbers are in line. A letter removed from "Steven" will tell you which one will be fine.', note: 'CASINO,', hint: 'What letter removed will give you a number when its spelled out?'},
    {key: '8', text: 'You may eat food as soon as it has been prepared and cooked. Yet, what is it called when you have already eaten the meal that you took?', note: 'FOOD,', hint: 'Cannot be eaten but something close to it...'},
    {key: '9', text: 'As a word with four letters I can mean one way or another. "No" in one way and in the other, a number', note: 'NO,', hint: 'Think of the German language...'},
];

// Select 2-4 random riddles and 2-4 random elements
const selectedRiddles = selectRandomElements(riddles, combinationLength);
const selectedElements = selectRandomElements(elements.filter(item => item.id !== 'safe'), selectedRiddles.length);

// Replace the texts of randomly selected elements with riddles
selectedElements.forEach((element, index) => {
    element.text = selectedRiddles[index].text;
});

// Generate the safe combination
const safeCombination = selectedRiddles.map(riddle => riddle.key).join('');
const safeElement = elements.find(element => element.id === 'safe');
if (safeElement) safeElement.text = safeCombination;

// Set up event listeners for UI
document.getElementById('safe')?.addEventListener('click', () => {
    const mainBox = document.getElementById('main-box');
    if (mainBox) {
        safeCombo(safeCombination, mainBox);
    }
});
