import { Command } from 'commander';

export class RandomNumberCommand {
    private program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command('random <min> <max>')
            .description('Generate a random number between min and max')
            .action((min, max) => {
                const minNum = parseInt(min);
                const maxNum = parseInt(max);

                if (isNaN(minNum) || isNaN(maxNum)) {
                    console.error('Both min and max must be valid numbers');
                    return;
                }

                const random = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
                console.log(`Random number: ${random}`);
            });
    }
}
