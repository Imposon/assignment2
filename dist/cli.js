#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_engine_1 = require("./CLI_Engine/cli_engine");
const say_greet_1 = require("./commands/say-greet");
const fetch_joke_1 = require("./commands/fetch-joke");
const show_time_1 = require("./commands/show-time");
const encode_base64_1 = require("./commands/encode-base64");
const decode_base64_1 = require("./commands/decode-base64");
const gen_uuid_1 = require("./commands/gen-uuid");
const str_reverse_1 = require("./commands/str-reverse");
const str_uppercase_1 = require("./commands/str-uppercase");
const str_lowercase_1 = require("./commands/str-lowercase");
const count_words_1 = require("./commands/count-words");
const gen_random_1 = require("./commands/gen-random");
const fetch_quote_1 = require("./commands/fetch-quote");
const calc_sum_1 = require("./commands/calc-sum");
const json_format_1 = require("./commands/json-format");
const file_info_1 = require("./commands/file-info");
const hash_gen_1 = require("./commands/hash-gen");
const github_user_1 = require("./commands/github-user");
const weather_1 = require("./commands/weather");
const version_1 = require("./commands/version");
const validate_email_1 = require("./commands/validate-email");
const validate_url_1 = require("./commands/validate-url");
const cli = new cli_engine_1.CLI_Engine();
cli.registerCommand([
    say_greet_1.Greet,
    fetch_joke_1.JokeCommand,
    show_time_1.TimeCommand,
    encode_base64_1.Base64EncodeCommand,
    decode_base64_1.Base64DecodeCommand,
    gen_uuid_1.UUIDCommand,
    str_reverse_1.ReverseCommand,
    str_uppercase_1.UppercaseCommand,
    str_lowercase_1.LowercaseCommand,
    count_words_1.WordCountCommand,
    gen_random_1.RandomNumberCommand,
    fetch_quote_1.QuoteCommand,
    calc_sum_1.CalcSum,
    json_format_1.JsonPretty,
    file_info_1.FileInfo,
    hash_gen_1.HashGenerator,
    github_user_1.GitHubUser,
    weather_1.WeatherCommand,
    version_1.VersionCommand,
    validate_email_1.EmailValidator,
    validate_url_1.UrlValidator
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
