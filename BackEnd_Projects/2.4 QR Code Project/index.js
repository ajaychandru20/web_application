/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// const inquirer = require('inquirer');
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs'

inquirer
  .prompt([
    {
        type:'url',
        name: 'URL',
        message: 'Mention your url',
    }
  ])
  .then((answers) => {
    console.log(`Hello, your url is ${answers.URL}.`);
    var qr_png = qr.imageSync(answers.URL,{type:'png'});
    fs.writeFileSync('url_img.png',qr_png);

    fs.writeFile('url_text.txt',answers.URL,(err)=>{
        {
            if (err) {
                console.log('Error written file: ', err);    
                return;
            }
            console.log('File written successfully');
        }
    })
    
    // qr.imageSync(answers.url,{type:'png'});
  });