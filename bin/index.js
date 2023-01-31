#! /usr/bin/env node
import yargs from "yargs";
import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";

const args = yargs(process.argv.slice(2)).argv;
// console.log(args);

if (args.language == null && args.l == null) {
  console.log(
    chalk.yellow(figlet.textSync("Corsola", { horizontalLayout: "full" }))
  );
  console.log(
    chalk.magenta(
      "\nUsage: corsola -l <language> --f1 <path-to-file1> --f2 <path-to-file2> \n" +
        boxen(
          chalk.green(
            "\n" + "Evaluate similarity of two smart contracts" + "\n"
          ),
          { padding: 1, borderColor: "green", dimBorder: true }
        ) +
        "\n"
    )
  );
}

const argv = yargs(process.argv.slice(2)).usage("$0", "", (yargs) => {
  yargs.options({
    l: {
      alias: "language",
      demandOption: true,
      default: "solidity",
      describe: "Smart contract language",
      type: "string",
    },
    f1: {
      alias: "file1",
      demandOption: false,
      describe: "Path of file 1 to evaluate",
      type: "string",
    },
    f2: {
      alias: "file2",
      demandOption: false,
      describe: "Path of file 2 to evaluate",
      type: "string",
    },
  }).argv;
}).argv;
