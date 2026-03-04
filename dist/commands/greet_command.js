"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greet = void 0;
const chalk_1 = __importDefault(require("chalk"));
class Greet {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("greet <name>")
            .description("Greet someone with a colorful message")
            .action((name) => {
            this.sayHello(name);
        });
    }
    sayHello(name) {
        console.log(chalk_1.default.green.bold(`Hello, ${name}!`));
        console.log(chalk_1.default.blue(`Welcome to the CLI!`));
    }
}
exports.Greet = Greet;
