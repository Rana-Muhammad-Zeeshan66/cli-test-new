// Import the inquirer module
import inquirer from 'inquirer';
import * as fs from 'fs';

// Define the questions for the user
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'please provide path to your App.tsx file',
    default: 'src/App.tsx',
  },
];

// Prompt the user and get the answers
inquirer.prompt(questions).then((answers) => {
  console.log(answers);
  const AppFile = `
  import React from 'react';
  import {Button} from 'antd'

const App = () => {
  return (
    <div>
    <Button>Antd Library</Button>
    </div>
  );
};

export default App;`;

  fs.mkdirSync(answers.name, { recursive: true });
  fs.writeFileSync(`${answers.name}/App.tsx`, AppFile);

  console.log('Your package.json file has been created!');
});
