import { Command } from 'commander';

export class UppercaseCommand {
    private program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command('uppercase <text>')
            .description('Convert text to uppercase')
            .action((text) => {
                console.log(text.toUpperCase());
            });
    }
}
