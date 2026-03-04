import { Command } from 'commander';
import chalk from 'chalk';
import { Validator } from '../utils/validator';

export class UrlValidator {
  private program: Command;

  constructor(program: Command) {
    this.program = program;
  }

  register() {
    this.program
      .command('validate-url <url>')
      .description('Validate URL format')
      .action((url) => {
        const result = Validator.validateUrl(url);
        
        if (result.valid) {
          Validator.logSuccess(`URL "${url}" is valid`);
        } else {
          Validator.logError(result.error || 'Invalid URL');
        }
      });
  }
}
