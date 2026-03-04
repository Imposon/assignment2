import { Command } from 'commander';
import axios from 'axios';
import chalk from 'chalk';

export class WeatherCommand {
    private program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program
            .command('weather <city>')
            .description('Get weather information for a city')
            .option('-u, --unit <unit>', 'Temperature unit (C or F)', 'C')
            .option('-j, --json', 'Output as JSON')
            .action(async (city, options) => {
                try {
                    const response = await axios.get(
                        `https://api.weatherapi.com/v1/current.json`,
                        {
                            params: {
                                key: 'demo', // Free demo key
                                q: city,
                                aqi: 'yes'
                            }
                        }
                    );

                    const data = response.data;
                    const temp = options.unit === 'F'
                        ? data.current.temp_f
                        : data.current.temp_c;

                    if (options.json) {
                        console.log(JSON.stringify(data, null, 2));
                    } else {
                        const unit = options.unit === 'F' ? '°F' : '°C';
                        console.log(chalk.bold.cyan(`\n🌍 Weather for ${data.location.name}, ${data.location.country}`));
                        console.log(chalk.yellow(`Temperature: ${temp}${unit}`));
                        console.log(chalk.blue(`Condition: ${data.current.condition.text}`));
                        console.log(chalk.cyan(`Humidity: ${data.current.humidity}%`));
                        console.log(chalk.magenta(`Wind: ${data.current.wind_kph} km/h`));
                        console.log(chalk.gray(`Last Updated: ${data.current.last_updated}\n`));
                    }
                } catch (error) {
                    console.error(chalk.red(`❌ Error: Could not fetch weather data. Make sure city name is correct.`));
                }
            });
    }
}
