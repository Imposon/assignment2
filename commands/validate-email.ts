import { Command } from 'commander';
import chalk from 'chalk';
import { Validator } from '../utils/validator';

export class EmailValidator {
  private program: Command;

  constructor(program: Command) {
    this.program = program;
  }

  register() {
    this.program
      .command('validate-email <email>')
      .description('Validate email address format')
      .option('-s, --strict', 'Use strict validation')
      .action((email, options) => {
        const result = Validator.validateEmail(email);
        
        if (result.valid) {
          Validator.logSuccess(`Email "${email}" is valid`);
        } else {
          Validator.logError(result.error || 'Invalid email');
        }
      });
  }
}
