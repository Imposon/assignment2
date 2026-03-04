# MyCLI - Advanced Command Line Tool v2.0.0

A comprehensive TypeScript-based CLI application with 22 custom commands, API integrations, colored output, input validation, and flexible options.

## Features

**22+ Custom Commands**  
**API Integration** (GitHub, Weather, Quotes)  
**Colored CLI Output** (using chalk)  
**Input Validation Layer**  
**Flexible Flags & Options**  
**Version Command**  
**Comprehensive Help System**  
**Error Handling**  

## Installation

```bash
npm install
npm run build
```

## Usage

```bash
npm run dev -- [command] [options]
```

Or after building:

```bash
node dist/cli.js [command] [options]
```

## Available Commands

### Core Utilities (10+ Commands)

#### Text Operations
```bash
mycli greet <name>    
mycli uppercase <text> 
mycli lowercase <text>                
mycli reverse <text>     
mycli wordcount <text> 
```

#### Encoding/Decoding
```bash
mycli base64-encode <text> 
mycli base64-decode <text>   
mycli hash <text>   
```

#### Data Processing
```bash
mycli json-format <jsonString>   
mycli sum <numbers...>    
mycli random <min> <max>    
```

#### File Operations
```bash
mycli file-info <filepath>   
mycli time      
mycli uuid     
```

### Validation Commands (2 Commands)

```bash
mycli validate-email <email>       
mycli validate-url <url>     
```

### API Integration Commands (3+ Commands)

#### GitHub Integration
```bash
mycli github <username>      
  Options:
    -j, --json       
```

Example:
```bash
npm run dev -- github torvalds
npm run dev -- github octocat --json
```

#### Weather Information
```bash
mycli weather <city>    
  Options:
    -u, --unit <unit>     
    -j, --json                   

Example:
```bash
npm run dev -- weather London
npm run dev -- weather "New York" --unit F
```

#### Quote Generator
```bash
mycli quote           
  Options:
    -a, --author 
    -c, --content            
    -j, --json               
```

Example:
```bash
npm run dev -- quote
npm run dev -- quote --author
npm run dev -- quote --json
```

#### Joke Generator
```bash
mycli joke   
```

### System Commands (1 Command)

```bash
mycli version                  
```

Or:
```bash
npm run dev -- --version
npm run dev -- -v
```

## Command Examples

### Text Processing
```bash
npm run dev -- greet "Alice"
Output: Hello, Alice!
         Welcome to the CLI!

npm run dev -- uppercase "hello world"
Output: HELLO WORLD

npm run dev -- reverse "hello"
Output: Reversed: olleh

npm run dev -- wordcount "hello world test"
Output: Word count: 3
```

### Encoding/Security
```bash
npm run dev -- base64-encode "hello"
Output: Encoded: aGVsbG8=

npm run dev -- hash "password"
Output: Text: password
         SHA256: 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8

npm run dev -- uuid
Output: 550e8400-e29b-41d4-a716-446655440000
```

### Data Processing
```bash
npm run dev -- sum 10 20 30 40
Output: Sum: 100

npm run dev -- random 1 100
Output: Random number: 47

npm run dev -- json-format '{"name":"John","age":30}'
Output: {
          "name": "John",
          "age": 30
        }
```

### Validation
```bash
npm run dev -- validate-email "john@example.com"
Output: Email "john@example.com" is valid

npm run dev -- validate-email "invalid-email"
Output: Invalid email format

npm run dev -- validate-url "https://github.com"
Output: URL "https://github.com" is valid
```

### API Calls
```bash
npm run dev -- github torvalds
Output: GitHub User: Linus Torvalds
         Username: torvalds
         Bio: I'm the original 'inventor' of Linux...
         Public Repos: 50
         Followers: 200000
         Following: 0
         Profile: https://github.com/torvalds

# Get weather
npm run dev -- weather London
Output: Weather for London, United Kingdom
         Temperature: 15°C
         Condition: Overcast
         Humidity: 72%
         Wind: 10 km/h

# Get quote with author only
npm run dev -- quote --author
Output: By: Albert Einstein
```

## Project Structure

```
.
├── cli.ts                  
├── CLI_Engine/
│   └── cli_engine.ts         
├── commands/
│   ├── say-greet.ts           
│   ├── fetch-joke.ts         
│   ├── fetch-quote.ts    
│   ├── github-user.ts       
│   ├── weather.ts            
│   ├── validate-email.ts 
│   ├── validate-url.ts      
│   ├── encode-base64.ts        
│   ├── decode-base64.ts   
│   ├── hash-gen.ts             
│   ├── str-reverse.ts           
│   ├── str-uppercase.ts        
│   ├── str-lowercase.ts       
│   ├── count-words.ts        
│   ├── gen-uuid.ts      
│   ├── show-time.ts           
│   ├── gen-random.ts        
│   ├── calc-sum.ts        
│   ├── json-format.ts   
│   ├── file-info.ts       
│   ├── version.ts    
│   └── init.ts                
├── utils/
│   └── validator.ts        
├── dist/                          
├── package.json      
└── tsconfig.json             
```

## Dependencies

- **commander**: CLI framework
- **chalk**: Colored terminal output
- **axios**: HTTP client for APIs
- **uuid**: UUID generation
- **typescript**: TypeScript compiler
- **ts-node**: TypeScript runtime
- **nodemon**: Auto-restart on file changes

## Development

### Build the project
```bash
npm run build
```

### Run in development mode
```bash
npm run dev -- [command]
```

### Watch mode with auto-reload
```bash
npx nodemon --exec ts-node cli.ts [command]
```

## API Integrations

### GitHub API
- **Endpoint**: `https://api.github.com/users/{username}`
- **Rate Limit**: 60 requests/hour (unauthenticated)
- **No authentication required** for public data

### Weather API
- **Endpoint**: `https://api.weatherapi.com/v1/current.json`
- **Free tier available** with demo key
- **Features**: Current weather, humidity, wind speed

### Quotes API
- **Endpoint**: `https://api.quotable.io/random`
- **Rate Limit**: No limit for public data
- **Features**: Random quotes with tags and authors

## Validation Layer

The built-in `Validator` utility provides:

- **Email validation**: RFC-compliant email checking
- **URL validation**: Protocol and format validation
- **Number validation**: Range checking and type validation
- **Logging helpers**: Colored success, error, warning, and info messages

### Usage in Custom Commands

```typescript
import { Validator } from '../utils/validator';

const result = Validator.validateEmail(email);
if (!result.valid) {
  Validator.logError(result.error);
  return;
}

Validator.logSuccess('Operation completed');
Validator.logWarning('This might cause issues');
Validator.logInfo('Processing...');
```

## Color Coding

The CLI uses consistent color coding:
- **Green**: Success messages
- **Red**: Errors
- **Yellow**: Warnings and important data
- **Blue**: Information
- **Magenta**: Highlights
- **Gray**: Secondary information

## Advanced Features

### Flags and Options

Most commands support additional flags:

```bash
npm run dev -- github octocat --json

npm run dev -- weather London --unit F

npm run dev -- quote --author

npm run dev -- quote --json
```

### Error Handling

All commands include comprehensive error handling:

```bash
npm run dev -- validate-email "notanemail"
Invalid email format

npm run dev -- github "nonexistentuser12345"
Error: User not found or API error

npm run dev -- json-format "not json"
Invalid JSON input
```

## Version Information

**Current Version**: 2.0.0  
**Last Updated**: March 4, 2026  
**License**: ISC  

## Contributing

This is an educational project for the SESD Workshop. Feel free to extend it with:
- Additional API integrations
- More validation rules
- New text processing commands
- Database operations
- File management utilities

## License

ISC

## Support

For issues or questions, please refer to the inline documentation or run:
```bash
npm run dev -- help
npm run dev -- help [command-name]
```

---

