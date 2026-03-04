import { Command } from 'commander';

export class CalcSum {
    private program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command('sum <numbers...>')
            .description('Calculate sum of multiple numbers')
            .action((numbers) => {
                const sum = numbers.reduce((acc: number, num: string) => {
                    const parsed = parseFloat(num);
                    return isNaN(parsed) ? acc : acc + parsed;
                }, 0);
                console.log(`Sum: ${sum}`);
            });
    }
}
