import inquirer from 'inquirer';
import fs from 'fs-extra';

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
      name: 'part',
      message: 'Which part?',
      choices: parts,
    },

  ]);
  console.log(`Running ${selectedPart}`);
})();