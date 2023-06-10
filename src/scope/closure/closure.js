function greeting() {
    let username = 'Oscar';

    function displayUserName() {
        return `Hello ${username}`;
    }
    return displayUserName;
}

const greetingNow = greeting();
console.log(greetingNow);
console.log(greetingNow())
