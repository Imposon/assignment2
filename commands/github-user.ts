import { Command } from 'commander';
import axios from 'axios';
import chalk from 'chalk';

export class GitHubUser {
    private program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command('github <username>')
            .description('Get GitHub user information')
            .option('-j, --json', 'Output as JSON')
            .action(async (username, options) => {
                try {
                    const response = await axios.get(`https://api.github.com/users/${username}`);
                    const user = response.data;

                    if (options.json) {
                        console.log(JSON.stringify(user, null, 2));
                    } else {
                        console.log(chalk.bold.cyan(`\n📊 GitHub User: ${user.name || user.login}`));
                        console.log(chalk.gray(`Username: ${user.login}`));
                        console.log(chalk.gray(`Bio: ${user.bio || 'N/A'}`));
                        console.log(chalk.yellow(`⭐ Public Repos: ${user.public_repos}`));
                        console.log(chalk.green(`👥 Followers: ${user.followers}`));
                        console.log(chalk.blue(`Following: ${user.following}`));
                        console.log(chalk.magenta(`Profile: ${user.html_url}\n`));
                    }
                } catch (error) {
                    console.error(chalk.red(`❌ Error: User not found or API error`));
                }
            });
    }
}
