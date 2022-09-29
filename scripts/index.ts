import { exec } from 'child_process';

export default exec('sh scripts/sh/test.sh', (error, stdout, stderr) => {
  console.log(stdout);
  console.log(stderr);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
});
