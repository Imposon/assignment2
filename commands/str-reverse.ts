import { Command } from 'commander';

export class ReverseCommand {
    private program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command('reverse <text>')
            .description('Reverse a string')
            .action((text) => {
                const reversed = text.split('').reverse().join('');
                console.log(`Reversed: ${reversed}`);
            });
    }
}
