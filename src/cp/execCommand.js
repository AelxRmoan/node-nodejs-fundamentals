//d
 
import { spawn } from "node:child_process";

const execCommand = () => {
  const [,, cmd, ...args] = process.argv;

  if (!cmd) {
    console.error("Usage: node script.js <command> [args...]");
    process.exit(1);
  }

  const child = spawn(cmd, args, {
    env: process.env,
    stdio: "inherit"    
  });

  child.on("exit", (code) => {
    process.exit(code);
  });
};

execCommand();