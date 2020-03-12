var os = require("os");
function nombrePremier(n) {
  var pr = true;
  if (n < 2 || typeof n != "number") return false;
  for (var i = 2; i < n; i++) {
    if (i < n) {
      if (n % i === 0) {
        pr = false;
        break;
      }
    }
  }

  return pr;
}

const yargs = require("yargs");

const argv = yargs
  .command("lyr", "Tells whether an year is leap year or not", {
    year: {
      description: "the year to check for",
      alias: "y",
      type: "number"
    },
    mory: {
      description: "test de mory",
      alias: "m",
      type: "string"
    }
  })
  .option("time", {
    alias: "t",
    description: "Tell the present Time",
    type: "boolean"
  })
  .help()
  .alias("help", "h").argv;

if (argv.time) {
  console.log("The current time is: ", new Date().toLocaleTimeString());
}

if (argv._.includes("lyr")) {
  const year = argv.year || new Date().getFullYear();
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(`${year} is a Leap Year`);
  } else {
    console.log(`${year} is NOT a Leap Year`);
  }
}

console.log(argv);
