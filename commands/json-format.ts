import { Command } from 'commander';

export class JsonPretty {
  private program: Command;

  constructor(program: Command) {
    this.program = program;
  }

  register() {
    this.program
      .command('json-format <jsonString>')
      .description('Format and prettify JSON')
      .action((jsonString) => {
        try {
          const parsed = JSON.parse(jsonString);
          console.log(JSON.stringify(parsed, null, 2));
        } catch (error) {
          console.error('Invalid JSON input');
        }
      });
  }
}
