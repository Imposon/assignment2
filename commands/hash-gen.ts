import { Command } from 'commander';
import * as crypto from 'crypto';

export class HashGenerator {
    private program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command('hash <text>')
            .description('Generate SHA256 hash of text')
            .action((text) => {
                const hash = crypto.createHash('sha256').update(text).digest('hex');
                console.log(`Text: ${text}`);
                console.log(`SHA256: ${hash}`);
            });
    }
}
