import inquirer from 'inquirer';
import fs from 'fs-extra';
import {execSync} from 'child_process'; 
import chalk from 'chalk';

const getParts = async ()=>{
  const files = await fs.readdir(__dirname+"/../");
  return files.filter(s=>s.endsWith("js"));
};

(async()=>{
  const parts = await getParts();
  
  const {selectedPart} = await inquirer
  .prompt([
    {
      type: 'list',
      name: 'selectedPart',
      message: 'Which part?',
      choices: parts,
    },

  ]);
  console.time('time');
  console.log(chalk.red(`==== Running ${selectedPart} ====`));
  execSync(`babel-node src/${selectedPart}`,{stdio:"inherit"});
  console.log(chalk.red(`==== END ====`));
  console.timeEnd('time');

})();