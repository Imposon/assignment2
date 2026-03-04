import { Command } from 'commander';
import axios from 'axios';

export class JokeCommand {
    private program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command('joke')
            .description('Get a random joke')
            .action(async () => {
                try {
                    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
                    console.log(`${response.data.setup}`);
                    console.log(`${response.data.punchline}`);
                } catch (error) {
                    console.error('Error fetching joke:', error);
                }
            });
    }
}
