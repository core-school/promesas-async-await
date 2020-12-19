import inquirer from 'inquirer';
import fs from 'fs-extra';
import {execSync} from 'child_process'; 
import chalk from 'chalk';

const getParts = async ()=>{
  const files = await fs.readdir(__dirname+"/../");
  return files.filter(s=>s.endsWith("js"));
};
const DEFAULTS_FILE =".default.json";
const storeLast = async (last) => {
  await fs.writeJSON(DEFAULTS_FILE,{last});
}; 
const loadLast = async () => {
  try {
    const {last} = await fs.readJSON(DEFAULTS_FILE);
    return last;
  } catch (error) {
    return;
  }
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
      default: await loadLast()
    },
  ]);
  storeLast(selectedPart);

  console.time('time');
  console.log(chalk.red(`==== Running ${selectedPart} ====`));
  execSync(`babel-node src/${selectedPart}`,{stdio:"inherit"});
  console.log(chalk.red(`==== END ====`));
  console.timeEnd('time');

})();