import { Command } from 'commander';

export class Base64EncodeCommand {
    private program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command('base64-encode <text>')
            .description('Encode text to base64')
            .action((text) => {
                const encoded = Buffer.from(text).toString('base64');
                console.log(`Encoded: ${encoded}`);
            });
    }
}
