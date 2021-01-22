#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import {createRequire} from 'module';
import {
    log,
    parseName,
} from './util.js';

const meow = createRequire(import.meta.url)('meow');
const chalk = createRequire(import.meta.url)('chalk');

const {
    mkdir,
    access,
    readdir,
    copyFile,
} = fs.promises;

const cwd = process.cwd()

const cli = meow(`
	Usage
	  $ mv-copy <from> <to> 

	Examples
	  $ mv-copy /home/path/directory /home/path/new_directory
	  
`, {
	flags: {
		from: {
			type: 'string',
			alias: 'f'
		},
		to: {
			type: 'string',
			alias: 't'
		},
		absolute: {
			type: 'string',
			alias: 'a'
		},
	}
});

const {
    input,
} = cli;

(async () => {

    const [ from, to ] = input

    const to_path = path.join(cwd, to)
    const from_path = path.join(cwd, from)

    const original = parseName( from )
    const rename = parseName( to )

    await access(from_path)
        .catch(() => log('No Access', 1))

    log( chalk.white(`Copying dir ${chalk.green(original)} to dir ${chalk.green(rename)}...`) )
    
    await mkdir(to_path)
        .catch(() => log(chalk.red(`Error making directory: ${chalk.white(to_path)} \nDoes the directory exist already?`), 1))
    
    const from_dir = await readdir(from_path)
        .catch(() => log(chalk.red(`Error reading directory: ${chalk.white(from_path)}`), 1))

    await Promise.all(
        from_dir.map(async file => await copyFile(
            path.join(from_path, file), 
            path.join(to_path, file.replace(original, rename))
        ))
    ).catch(error => log(chalk.red(`Error creating file: ${error.message}`)))

    log(chalk.green(`Copied dir ${chalk.cyan(original)} to dir ${chalk.cyan(rename)} including ${chalk.cyan(from_dir.length)} files`), 0)

})().catch(error => log(chalk.red(error.message), 1));
