# MyCLI - Advanced Command Line Tool v2.0.0

A comprehensive TypeScript-based CLI application with 22 custom commands, API integrations, colored output, input validation, and flexible options.

## Features

✅ **22+ Custom Commands**  
✅ **API Integration** (GitHub, Weather, Quotes)  
✅ **Colored CLI Output** (using chalk)  
✅ **Input Validation Layer**  
✅ **Flexible Flags & Options**  
✅ **Version Command**  
✅ **Comprehensive Help System**  
✅ **Error Handling**  

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
mycli greet <name>                    # Greet someone with colored output
mycli uppercase <text>                # Convert text to uppercase
mycli lowercase <text>                # Convert text to lowercase
mycli reverse <text>                  # Reverse a string
mycli wordcount <text>                # Count words in text
```

#### Encoding/Decoding
```bash
mycli base64-encode <text>            # Encode text to base64
mycli base64-decode <text>            # Decode base64 string
mycli hash <text>                     # Generate SHA256 hash
```

#### Data Processing
```bash
mycli json-format <jsonString>        # Format and prettify JSON
mycli sum <numbers...>                # Calculate sum of numbers
mycli random <min> <max>              # Generate random number
```

#### File Operations
```bash
mycli file-info <filepath>            # Get file information (size, dates, etc.)
mycli time                            # Show current date and time
mycli uuid                            # Generate a random UUID
```

### Validation Commands (2 Commands)

```bash
mycli validate-email <email>          # Validate email address format
mycli validate-url <url>              # Validate URL format
```

### API Integration Commands (3+ Commands)

#### GitHub Integration
```bash
mycli github <username>               # Get GitHub user info
  Options:
    -j, --json                        # Output as JSON
```

Example:
```bash
npm run dev -- github torvalds
npm run dev -- github octocat --json
```

#### Weather Information
```bash
mycli weather <city>                  # Get weather for a city
  Options:
    -u, --unit <unit>                 # Temperature unit (C or F, default: C)
    -j, --json                        # Output as JSON
```

Example:
```bash
npm run dev -- weather London
npm run dev -- weather "New York" --unit F
```

#### Quote Generator
```bash
mycli quote                           # Get a random inspirational quote
  Options:
    -a, --author                      # Show only author
    -c, --content                     # Show only quote content
    -j, --json                        # Output as JSON
```

Example:
```bash
npm run dev -- quote
npm run dev -- quote --author
npm run dev -- quote --json
```

#### Joke Generator
```bash
mycli joke                            # Get a random joke
```

### System Commands (1 Command)

```bash
mycli version                         # Show CLI version and information
```

Or:
```bash
npm run dev -- --version
npm run dev -- -v
```

## Command Examples

### Text Processing
```bash
# Greet a user
npm run dev -- greet "Alice"
Output: Hello, Alice!
         Welcome to the CLI!

# Convert to uppercase
npm run dev -- uppercase "hello world"
Output: HELLO WORLD

# Reverse text
npm run dev -- reverse "hello"
Output: Reversed: olleh

# Count words
npm run dev -- wordcount "hello world test"
Output: Word count: 3
```

### Encoding/Security
```bash
# Encode to base64
npm run dev -- base64-encode "hello"
Output: Encoded: aGVsbG8=

# Generate SHA256 hash
npm run dev -- hash "password"
Output: Text: password
         SHA256: 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8

# Generate UUID
npm run dev -- uuid
Output: 550e8400-e29b-41d4-a716-446655440000
```

### Data Processing
```bash
# Calculate sum
npm run dev -- sum 10 20 30 40
Output: Sum: 100

# Generate random number
npm run dev -- random 1 100
Output: Random number: 47

# Format JSON
npm run dev -- json-format '{"name":"John","age":30}'
Output: {
          "name": "John",
          "age": 30
        }
```

### Validation
```bash
# Validate email
npm run dev -- validate-email "john@example.com"
Output: ✓ Email "john@example.com" is valid

npm run dev -- validate-email "invalid-email"
Output: ❌ Invalid email format

# Validate URL
npm run dev -- validate-url "https://github.com"
Output: ✓ URL "https://github.com" is valid
```

### API Calls
```bash
# Get GitHub user info
npm run dev -- github torvalds
Output: 📊 GitHub User: Linus Torvalds
         Username: torvalds
         Bio: I'm the original 'inventor' of Linux...
         ⭐ Public Repos: 50
         👥 Followers: 200000
         Following: 0
         Profile: https://github.com/torvalds

# Get weather
npm run dev -- weather London
Output: 🌍 Weather for London, United Kingdom
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
├── cli.ts                          # Main CLI entry point
├── CLI_Engine/
│   └── cli_engine.ts              # CLI engine/framework
├── commands/
│   ├── say-greet.ts               # Greeting command
│   ├── fetch-joke.ts              # Joke API command
│   ├── fetch-quote.ts             # Quote API command
│   ├── github-user.ts             # GitHub API command
│   ├── weather.ts                 # Weather API command
│   ├── validate-email.ts          # Email validation
│   ├── validate-url.ts            # URL validation
│   ├── encode-base64.ts           # Base64 encoding
│   ├── decode-base64.ts           # Base64 decoding
│   ├── hash-gen.ts                # SHA256 hash generation
│   ├── str-reverse.ts             # String reversal
│   ├── str-uppercase.ts           # Uppercase conversion
│   ├── str-lowercase.ts           # Lowercase conversion
│   ├── count-words.ts             # Word counting
│   ├── gen-uuid.ts                # UUID generation
│   ├── show-time.ts               # Time display
│   ├── gen-random.ts              # Random number generation
│   ├── calc-sum.ts                # Sum calculator
│   ├── json-format.ts             # JSON formatter
│   ├── file-info.ts               # File information
│   ├── version.ts                 # Version command
│   └── init.ts                    # Project initializer
├── utils/
│   └── validator.ts               # Input validation utilities
├── dist/                          # Compiled JavaScript (generated)
├── package.json                   # Dependencies and scripts
└── tsconfig.json                  # TypeScript configuration
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

// Validate input
const result = Validator.validateEmail(email);
if (!result.valid) {
  Validator.logError(result.error);
  return;
}

// Log messages
Validator.logSuccess('Operation completed');
Validator.logWarning('This might cause issues');
Validator.logInfo('Processing...');
```

## Color Coding

The CLI uses consistent color coding:
- 🟢 **Green**: Success messages
- 🔴 **Red**: Errors
- 🟡 **Yellow**: Warnings and important data
- 🔵 **Blue**: Information
- 🟣 **Magenta**: Highlights
- ⚪ **Gray**: Secondary information

## Advanced Features

### Flags and Options

Most commands support additional flags:

```bash
# Get GitHub data as JSON
npm run dev -- github octocat --json

# Get weather in Fahrenheit
npm run dev -- weather London --unit F

# Show only quote author
npm run dev -- quote --author

# Output as JSON
npm run dev -- quote --json
```

### Error Handling

All commands include comprehensive error handling:

```bash
# Invalid email
npm run dev -- validate-email "notanemail"
❌ Invalid email format

# Non-existent GitHub user
npm run dev -- github "nonexistentuser12345"
❌ Error: User not found or API error

# Invalid JSON
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

**Created with ❤️ for the SESD Workshop**
