import { Command } from 'commander';

export class TimeCommand {
    private program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command('time')
            .description('Get current time')
            .action(() => {
                const now = new Date();
                console.log(now.toLocaleString());
            });
    }
}
