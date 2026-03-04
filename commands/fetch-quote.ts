import { Command } from 'commander';
import axios from 'axios';
import chalk from 'chalk';

export class QuoteCommand {
    private program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command('quote')
            .description('Get a random inspirational quote')
            .option('-a, --author', 'Show only author')
            .option('-c, --content', 'Show only quote content')
            .option('-j, --json', 'Output as JSON')
            .action(async (options) => {
                try {
                    const response = await axios.get('https://api.quotable.io/random');
                    const quote = response.data;

                    if (options.json) {
                        console.log(JSON.stringify(quote, null, 2));
                    } else if (options.author) {
                        console.log(chalk.cyan(`By: ${quote.author}`));
                    } else if (options.content) {
                        console.log(chalk.yellow(`"${quote.content}"`));
                    } else {
                        console.log(chalk.bold.yellow(`\n✨ ${quote.content}`));
                        console.log(chalk.cyan(`— ${quote.author}`));
                        console.log(chalk.gray(`Tags: ${quote.tags.join(', ')}\n`));
                    }
                } catch (error) {
                    console.error(chalk.red('❌ Error fetching quote'));
                }
            });
    }
}
