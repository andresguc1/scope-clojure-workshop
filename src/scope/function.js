function greeting() {
    let userName = 'susi'; // Declaration
    console.log(userName);

    if (userName === 'susi') {
        console.log(`Hello ${userName}!`);
    }
}

greeting();
console.log(userName) // error No defined as global scope