function fruit() {
    if (true){
        var fruit1 = 'apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }

    console.log({fruit1, fruit2, fruit3}); // The error is not found variables outside of the if block
}