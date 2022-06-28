function greetings() {
    let userName = 'Oscar';

    function displayUserName() {
        return `Hello ${userName}`;
    }

    return displayUserName;
}

const g = greetings();

console.log(g);
console.log(g());