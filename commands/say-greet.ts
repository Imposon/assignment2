import chalk from 'chalk';
import { Command } from 'commander';

export class Greet {
    private program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command("greet <name>")
            .description("Greet someone with a colorful message")
            .action((name) => {
                this.sayHello(name);
            });
    }

    sayHello(name: string) {
        console.log(chalk.green.bold(`Hello, ${name}!`));
        console.log(chalk.blue(`Welcome to the CLI!`));
    }
}