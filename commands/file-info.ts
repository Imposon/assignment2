import { Command } from 'commander';
import * as fs from 'fs';

export class FileInfo {
  private program: Command;

  constructor(program: Command) {
    this.program = program;
  }

  register() {
    this.program
      .command('file-info <filepath>')
      .description('Get information about a file')
      .action((filepath) => {
        try {
          const stats = fs.statSync(filepath);
          console.log(`File: ${filepath}`);
          console.log(`Size: ${stats.size} bytes`);
          console.log(`Created: ${stats.birthtime.toLocaleString()}`);
          console.log(`Modified: ${stats.mtime.toLocaleString()}`);
          console.log(`Is Directory: ${stats.isDirectory()}`);
        } catch (error) {
          console.error('Error reading file');
        }
      });
  }
}
