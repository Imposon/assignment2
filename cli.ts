#!/usr/bin/env node
import { CLI_Engine } from './CLI_Engine/cli_engine';
import { JokeCommand } from './commands/joke_command';
import { Greet } from './commands/greet_command';
import { TimeCommand } from './commands/time_command';
import { Base64EncodeCommand } from './commands/base64_encode_command';
import { Base64DecodeCommand } from './commands/base64_decode_command';
import { UUIDCommand } from './commands/uuid_command';
import { ReverseCommand } from './commands/reverse_command';
import { UppercaseCommand } from './commands/uppercase_command';
import { LowercaseCommand } from './commands/lowercase_command';
import { WordCountCommand } from './commands/wordcount_command';
import { RandomNumberCommand } from './commands/random_number_command';
import { QuoteCommand } from './commands/quote_command';

const cli = new CLI_Engine();
cli.registerCommand([
    Greet,
    JokeCommand,
    TimeCommand,
    Base64EncodeCommand,
    Base64DecodeCommand,
    UUIDCommand,
    ReverseCommand,
    UppercaseCommand,
    LowercaseCommand,
    WordCountCommand,
    RandomNumberCommand,
    QuoteCommand
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