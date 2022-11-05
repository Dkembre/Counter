const totalCount = document.getElementById('total-count');
const plusOne = document.getElementById('plusOne');
const plusTwo = document.getElementById('plusTwo');
const plusThree = document.getElementById('plusThree');
const minusOne = document.getElementById('minusOne');

var count = 0;

totalCount.innerHTML = count;

const addOne = () => {
    count++;
    totalCount.innerHTML = count;
    console.log(1);
}

const addTwo = () => {
    count = count + 2;
    totalCount.innerHTML = count;
    console.log(2);
}

const addThree = () => {
    count = count + 3;
    totalCount.innerHTML = count;
    console.log(3);
}

const subtractOne = () => {
    count--;
    totalCount.innerHTML = count;
}

plusOne.addEventListener('click', addOne);
plusTwo.addEventListener('click', addTwo);
plusThree.addEventListener('click', addThree);
minusOne.addEventListener('click',subtractOne);