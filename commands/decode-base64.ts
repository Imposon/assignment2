import { Command } from 'commander';

export class Base64DecodeCommand {
    private program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command('base64-decode <text>')
            .description('Decode base64 text')
            .action((text) => {
                try {
                    const decoded = Buffer.from(text, 'base64').toString('utf-8');
                    console.log(`Decoded: ${decoded}`);
                } catch (error) {
                    console.error('Invalid base64 input');
                }
            });
    }
}
