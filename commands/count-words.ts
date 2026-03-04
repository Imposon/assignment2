import { Command } from 'commander';

export class WordCountCommand {
    private program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command('wordcount <text>')
            .description('Count words in text')
            .action((text) => {
                const words = text.trim().split(/\s+/).length;
                console.log(`Word count: ${words}`);
            });
    }
}
