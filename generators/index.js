const process = require('process');
const path = require("path");
module.exports = function (plop) {
    // react seam app generator
    const processDir = process.cwd();
    plop.setGenerator('createapp', {
        description: 'create app generator',
        prompts:
            [
                {
                    type: 'input',
                    name: 'projectName',
                    message: 'Please enter app name'
                },
                {
                    type: 'input',
                    name: 'projectHtmlTitle',
                    message: 'Please enter app html title'
                },
                {
                    type: 'input',
                    name: 'projectDescribtion',
                    message: 'Please enter app describtions'
                },
                {
                    type: 'confirm',
                    name: 'wantGitRepo',
                    message: 'Do you want to create git repository?',
                    default:false
                },
                {
                    type: 'input',
                    name: 'gitRepoUrl',
                    message: 'Please enter git repository url:',
                    when:(ans)=>{
                        return ans.wantGitRepo;
                    }
                },
                {
                    type: 'input',
                    name: 'projectGitUrl',
                    message: 'please enter app Git Url'
                },
                {
                    type: 'input',
                    name: 'projectLicense',
                    message: 'please enter app license'
                },
                {
                    type: 'input',
                    name: 'projectDefaultPort',
                    message: 'please enter app default server port'
                }
        ],
        actions: data => {
                const actions = [
                    {
                        type: 'add',
                        path: path.join(processDir,`app/index.html`),
                        templateFile: 'templates/index.html.hbs'
                    },
                    {
                        type: 'add',
                        path: path.join(processDir,`server/port.js`),
                        templateFile: 'templates/port.js.hbs'
                    },
                    {
                        type: 'add',
                        path: path.join(processDir,`package.json`),
                        templateFile: 'templates/package.json.hbs'
                    },
                    {
                        type: 'addMany',
                        destination: processDir,
                        base:'templates/sources',
                        globOptions:{
                            dot:true
                        },
                        templateFiles: 'templates/sources/**'
                    },
                ]
                return actions;
            }
    });
};

