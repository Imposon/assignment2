#!/usr/bin/env node
import { CLI_Engine } from './CLI_Engine/cli_engine';
import { Greet } from './commands/say-greet';
import { JokeCommand } from './commands/fetch-joke';
import { TimeCommand } from './commands/show-time';
import { Base64EncodeCommand } from './commands/encode-base64';
import { Base64DecodeCommand } from './commands/decode-base64';
import { UUIDCommand } from './commands/gen-uuid';
import { ReverseCommand } from './commands/str-reverse';
import { UppercaseCommand } from './commands/str-uppercase';
import { LowercaseCommand } from './commands/str-lowercase';
import { WordCountCommand } from './commands/count-words';
import { RandomNumberCommand } from './commands/gen-random';
import { QuoteCommand } from './commands/fetch-quote';
import { CalcSum } from './commands/calc-sum';
import { JsonPretty } from './commands/json-format';
import { FileInfo } from './commands/file-info';
import { HashGenerator } from './commands/hash-gen';
import { GitHubUser } from './commands/github-user';
import { WeatherCommand } from './commands/weather';
import { VersionCommand } from './commands/version';
import { EmailValidator } from './commands/validate-email';
import { UrlValidator } from './commands/validate-url';

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
    QuoteCommand,
    CalcSum,
    JsonPretty,
    FileInfo,
    HashGenerator,
    GitHubUser,
    WeatherCommand,
    VersionCommand,
    EmailValidator,
    UrlValidator
]);
cli.run();
















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