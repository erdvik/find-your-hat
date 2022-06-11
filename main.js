const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


const fieldArray = [
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
];

class Field {
    constructor(field = [[]]) {
        this.field = field;
    }
    
    print() {
        const displayString = this.field.map(row => {
            return row.join('');
        }).join('\n');
        console.log(displayString);
    }
};

const test = new Field(fieldArray);

test.print();