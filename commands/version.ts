import { Command } from 'commander';
import chalk from 'chalk';

export class VersionCommand {
    private program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command('version')
            .description('Show CLI version and information')
            .action(() => {
                console.log(chalk.bold.cyan('\n╔═══════════════════════════════╗'));
                console.log(chalk.bold.cyan('║       MyCLI Tool v2.0.0       ║'));
                console.log(chalk.bold.cyan('╚═══════════════════════════════╝\n'));

                console.log(chalk.yellow('Version:'), chalk.white('2.0.0'));
                console.log(chalk.yellow('Name:'), chalk.white('mycli'));
                console.log(chalk.yellow('Description:'), chalk.white('A comprehensive CLI tool with 18+ commands'));
                console.log(chalk.yellow('Author:'), chalk.white('SESD Workshop'));
                console.log(chalk.yellow('License:'), chalk.white('ISC'));
                console.log(chalk.yellow('Node Version:'), chalk.white(process.version));

                console.log(chalk.bold.cyan('\nFeatures:'));
                console.log(chalk.green('✓ 18+ Custom Commands'));
                console.log(chalk.green('✓ API Integration (GitHub, Weather, Quotes)'));
                console.log(chalk.green('✓ Colored CLI Output'));
                console.log(chalk.green('✓ Input Validation'));
                console.log(chalk.green('✓ Flexible Flags & Options'));
                console.log(chalk.green('✓ Error Handling'));
                console.log();
            });

        // Also add --version flag to main program
        this.program.version('2.0.0', '-v, --version');
    }
}
