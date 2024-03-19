const { execSync, spawn } = require("child_process");

runNmap = (req, res) => {
  const body = req.body;
  console.log(body);
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "There is no feedback provided",
    });
  }
  //try the command and if it fails, catch it and handle properly
  let command = body.command.join(" ");
  console.log(command);
  //synchronously run the command to consistently return the proper value
  let resNpmVersion;
  if (command == "nmap") {
    resNpmVersion = execSync("nmap -h").toString();
    console.log(resNpmVersion);
    console.log("success", resNpmVersion.toString());
    return res.status(201).json({
      success: true,
      message: resNpmVersion,
    });
  }
  if (command == "dnsmap") {
    command = "dnsmap > dnsmapOut.txt"
    resNpmVersion = execSync(command).toString();
    const python = spawn("python", ["readDnsMap.py"]);
    let dataToSend;
    python.stdout.on("data", function (data) {
      console.log("Pipe data from python script ...");
      dataToSend = data.toString();
    });
    python.on("close", (code) => {
      console.log(`child process close all stdio with code ${code}`);
    });
    console.log(dataToSend);
    console.log("success", dataToSend);
    return res.status(201).json({
      success: true,
      message: dataToSend,
    });
  } else {
    try {
      resNpmVersion = execSync(command).toString();
      console.log(resNpmVersion);
      console.log("success", resNpmVersion.toString());
      return res.status(201).json({
        success: true,
        message: resNpmVersion,
      });
    } catch (error) {
      return res.status(201).json({
        error,
        message: "Command not found",
      });
    }
  }
};

module.exports = {
  runNmap,
};
