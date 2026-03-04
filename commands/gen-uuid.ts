import { Command } from 'commander';
import { v4 as uuidv4 } from 'uuid';

export class UUIDCommand {
    private program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command('uuid')
            .description('Generate a UUID')
            .action(() => {
                console.log(uuidv4());
            });
    }
}
