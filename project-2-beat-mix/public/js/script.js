// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

function toggleDrum(arrayName, indexNumber) {
    if (indexNumber <= 15 && indexNumber >= 0) {
        if (isValidArray(arrayName)) {
            if (arrayName === 'kicks') {
                if (kicks[indexNumber] === false) {
                    kicks[indexNumber] = true;
                }
                else {
                    kicks[indexNumber] = false;
                }
            }
            else if (arrayName === 'snares') {
                if (snares[indexNumber] === false) {
                    snares[indexNumber] = true;
                }
                else {
                    snares[indexNumber] = false;
                }
            }
            else if (arrayName === 'hiHats') {
                if (hiHats[indexNumber] === false) {
                    hiHats[indexNumber] = true;
                }
                else {
                    hiHats[indexNumber] = false;
                }
            }
            else if (arrayName === 'rideCymbals') {
                if (rideCymbals[indexNumber] === false) {
                    rideCymbals[indexNumber] = true;
                }
                else {
                    rideCymbals[indexNumber] = false;
                }
            }
        }
    }
}

function isValidArray(aName) {
    return (aName === 'kicks' || aName === 'snares' || aName === 'hiHats' || aName === 'rideCymbals');
}

function clear(arrayName) {
    if (isValidArray(arrayName)) {
        if (arrayName === 'kicks') {
            kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
        }
        else if (arrayName === 'snares') {
            snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
        }
        else if (arrayName === 'hiHats') {
            hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
        }
        else if (arrayName === 'rideCymbals') {
            rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
        }
    }
}


function invert(arrayName) {
    if (isValidArray(arrayName)) {
        if (arrayName === 'kicks') {
            for (let i = 0;i < kicks.length;i++) {
                if (kicks[i] === true) {
                    kicks[i] = false;
                }
                else {
                    kicks[i] = true;
                }
            }
        }
        else if (arrayName === 'snares') {
            if (arrayName === 'snares') {
                for (let i = 0;i < snares.length;i++) {
                    if (snares[i] === true) {
                        snares[i] = false;
                    }
                    else {
                        snares[i] = true;
                    }
                }
            }
        }
        else if (arrayName === 'hiHats') {
            if (arrayName === 'hiHats') {
                for (let i = 0;i < hiHats.length;i++) {
                    if (hiHats[i] === true) {
                        hiHats[i] = false;
                    }
                    else {
                        hiHats[i] = true;
                    }
                }
            }
        }
        else if (arrayName === 'rideCymbals') {
            if (arrayName === 'rideCymbals') {
                for (let i = 0;i < rideCymbals.length;i++) {
                    if (rideCymbals[i] === true) {
                        rideCymbals[i] = false;
                    }
                    else {
                        rideCymbals[i] = true;
                    }
                }
            }
        }
    }
}