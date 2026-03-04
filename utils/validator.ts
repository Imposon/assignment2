import chalk from 'chalk';

export class Validator {
    static isEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static isUrl(url: string): boolean {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    static isNumber(value: string): boolean {
        return !isNaN(parseFloat(value));
    }

    static isEmpty(value: string): boolean {
        return !value || value.trim().length === 0;
    }

    static validateEmail(email: string): { valid: boolean; error?: string } {
        if (this.isEmpty(email)) {
            return { valid: false, error: 'Email cannot be empty' };
        }
        if (!this.isEmail(email)) {
            return { valid: false, error: 'Invalid email format' };
        }
        return { valid: true };
    }

    static validateUrl(url: string): { valid: boolean; error?: string } {
        if (this.isEmpty(url)) {
            return { valid: false, error: 'URL cannot be empty' };
        }
        if (!this.isUrl(url)) {
            return { valid: false, error: 'Invalid URL format' };
        }
        return { valid: true };
    }

    static validateNumber(value: string, min?: number, max?: number): { valid: boolean; error?: string } {
        if (this.isEmpty(value)) {
            return { valid: false, error: 'Number cannot be empty' };
        }
        if (!this.isNumber(value)) {
            return { valid: false, error: 'Invalid number format' };
        }
        const num = parseFloat(value);
        if (min !== undefined && num < min) {
            return { valid: false, error: `Number must be at least ${min}` };
        }
        if (max !== undefined && num > max) {
            return { valid: false, error: `Number must be at most ${max}` };
        }
        return { valid: true };
    }

    static logError(message: string): void {
        console.error(chalk.red(`❌ ${message}`));
    }

    static logSuccess(message: string): void {
        console.log(chalk.green(`✓ ${message}`));
    }

    static logWarning(message: string): void {
        console.log(chalk.yellow(`⚠ ${message}`));
    }

    static logInfo(message: string): void {
        console.log(chalk.cyan(`ℹ ${message}`));
    }
}
