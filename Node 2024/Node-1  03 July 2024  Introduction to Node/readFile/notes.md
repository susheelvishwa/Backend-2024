# Observation

When you run this file, the console output will first display "main data" and then the contents of the `notes.md` file. This happens because the `readFile` method is asynchronous and uses a callback function.

## Asynchronous Nature

The `readFile` function is non-blocking and asynchronous. This means that Node.js can continue executing the next line of code while `readFile` is still working on reading the file.

## Callback Function

The function provided to `readFile` is a callback function, which will be executed once the file reading operation is complete.

## Order of Execution

The `console.log("main data");` statement is executed immediately after the call to `readFile` because `readFile` doesn't block the execution of the subsequent code. Once the file reading is complete, the callback function is invoked, logging the contents of the file.

## Summary

The `console.log("main data");` statement runs first, followed by the logging of the file contents once the file has been read asynchronously.

## Types of Modules

># custom modules

Example : sum module (created by you)

># Internal Modules

- These come bundled with Node.js and are ready to use out of the box.
- Examples: `fs`, `crypto`, `os`.

Talk About 
**FS** File system --> Related file
      --> read
      --> write 
      --> append 
      --> delete 
      --> rename

># External Modules

- These are not included with Node.js and must be installed separately.
- Managed through **npm** (Node Package Manager).