import { Command } from 'commander';

export class LowercaseCommand {
    private program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command('lowercase <text>')
            .description('Convert text to lowercase')
            .action((text) => {
                console.log(text.toLowerCase());
            });
    }
}
