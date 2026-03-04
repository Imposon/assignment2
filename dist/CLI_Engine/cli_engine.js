"use strict";
// const {Command} = require('commander');
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLI_Engine = void 0;
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
const commander_1 = require("commander");
class CLI_Engine {
    constructor() {
        this.program = new commander_1.Command();
    }
    registerCommand(commands) {
        commands.forEach((cmdClass) => {
            const cmdInstance = new cmdClass(this.program);
            cmdInstance.register();
        });
    }
    run() {
        this.program.parse();
    }
}
exports.CLI_Engine = CLI_Engine;
