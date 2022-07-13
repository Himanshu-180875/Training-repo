This is lerna monorepo and lerna helps us to manage the multiple repo's inside the single repo.

For this you need

Node 16.15.0\
GIT\

Setup Guide (Command line instructions)\
```
git clone <Project_Repo_URL> project cd project
```
and then run 
```
npm i
```
To run the project follow the complete steps of each package inside packagess:

```
cd packages/'name of the project/readme.md'
```
After completing the above steps, then run 
```
 npm run start
```

 this will run the projects 



******************************************************************************
You can initialize the lerna in your project by below commands:

```
npm i lerna
```
After installing lerna you can initialize the lerna by the command

```
Npx lerna init

```
 after initializing the lerna you will be able to see the packages and lerna.json where you can modify the lerna packages path, version

 after that you need to copy paste the repo's inside the packages folder and for removing the node modules of the package you need to run the command
 

 ```
 Npx lerna clean -y
 ```

 then run the command for installing the dependency and linking the repo's 

 ```
 Npx lerna bootstrap –hoist 
 ```

 then create scripts for running the projects in root package.json

 

 