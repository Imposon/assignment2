#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_engine_1 = require("./CLI_Engine/cli_engine");
const joke_command_1 = require("./commands/joke_command");
const greet_command_1 = require("./commands/greet_command");
const time_command_1 = require("./commands/time_command");
const base64_encode_command_1 = require("./commands/base64_encode_command");
const base64_decode_command_1 = require("./commands/base64_decode_command");
const uuid_command_1 = require("./commands/uuid_command");
const reverse_command_1 = require("./commands/reverse_command");
const uppercase_command_1 = require("./commands/uppercase_command");
const lowercase_command_1 = require("./commands/lowercase_command");
const wordcount_command_1 = require("./commands/wordcount_command");
const random_number_command_1 = require("./commands/random_number_command");
const quote_command_1 = require("./commands/quote_command");
const cli = new cli_engine_1.CLI_Engine();
cli.registerCommand([
    greet_command_1.Greet,
    joke_command_1.JokeCommand,
    time_command_1.TimeCommand,
    base64_encode_command_1.Base64EncodeCommand,
    base64_decode_command_1.Base64DecodeCommand,
    uuid_command_1.UUIDCommand,
    reverse_command_1.ReverseCommand,
    uppercase_command_1.UppercaseCommand,
    lowercase_command_1.LowercaseCommand,
    wordcount_command_1.WordCountCommand,
    random_number_command_1.RandomNumberCommand,
    quote_command_1.QuoteCommand
]);
cli.run();
// need to build 10 commands
// import axios = require('axios');
// const {Command} = require('commander');
// const program = new Command();
// program
// .command("greet <name>")
// .action((name) => {console.log(`Hello ${name}`)})
// program
// .command("add <n1> <n2>")
// .action((n1, n2) => {console.log(`${Number(n1) + Number(n2)}`)})
// program
// .command("substract <n1> <n2>")
// .action((n1, n2) => {console.log(`${Number(n1) - Number(n2)}`)})
// program
// .command("multiply <n1> <n2>")
// .action((n1, n2) => {console.log(`${Number(n1) * Number(n2)}`)})
// program
// .command("divide <n1> <n2>")
// .action((n1, n2) => {console.log(`${Number(n1) / Number(n2)}`)})
// program 
// .command("pikachu")
// .action(async() => {try {
//     const response = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
//     console.log(response.data.name)
// } catch(error) {
//     console.error("Error fetching quote:", error)
// }})
// program 
// .command("joke")
// .action(async() => {try {
//     const response = await axios.get("https://official-joke-api.appspot.com/random_joke")
//     console.log(response.data.setup, response.data)
// } catch(error) {
//     console.error("Error fetching joke:", error)
// }})
// program.parse()
