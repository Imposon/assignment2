import { Command } from 'commander';
import axios from 'axios';

export class QuoteCommand {
    private program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command('quote')
            .description('Get a random inspirational quote')
            .action(async () => {
                try {
                    const response = await axios.get('https://api.quotable.io/random');
                    console.log(`"${response.data.content}"`);
                    console.log(`— ${response.data.author}`);
                } catch (error) {
                    console.error('Error fetching quote:', error);
                }
            });
    }
}
