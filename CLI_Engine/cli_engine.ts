// const {Command} = require('commander');

// class CLI_Engine {
//     program;
//     constructor() {
//         this.program = new Command();
//     }

//     registerCommand(command) {
//         command.forEach((cmdClass) => {
//             const cmdInstance = new cmdClass(this.program);
//             cmdInstance.register();
//         })
//     }

//     run(){
//         this.program.parse();
//     }
// }

import { Command } from 'commander';

export class CLI_Engine {
  private program: Command;

  constructor() {
    this.program = new Command();
  }

  registerCommand(commands: any[]) {
    commands.forEach((cmdClass) => {
      const cmdInstance = new cmdClass(this.program);
      cmdInstance.register();
    });
  }

  run() {
    this.program.parse();
  }
}