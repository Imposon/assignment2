import { execSync } from 'child_process';
import { Command } from 'commander';

export class InitCommand {
    private program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command('init <projectName>')
            .description('Initialize a new TypeScript project')
            .action((projectName) => {
                this.initProject(projectName);
            });
    }

    initProject(projectName: string) {
        try {
            this.run(`mkdir ${projectName}`);
            this.run(`cd ${projectName} && npm init -y`);
            this.run(`cd ${projectName} && npm install typescript -D nodemon ts-node @types/node`);
            this.run(`cd ${projectName} && npx tsc --init`);
            this.run(`cd ${projectName} && touch index.ts`);
            console.log(`✓ Project '${projectName}' initialized successfully!`);
        } catch (error) {
            console.error(`✗ Error initializing project: ${error}`);
        }
    }

    private run(command: string) {
        execSync(command, { stdio: 'inherit' });
    }
}