# React Native Expo Typescrip Template

This template contains some basic configuration for projects using expo and typescript plus some additional dependencies/features and configurations that I personally like. 

## Added files/directories

Some of the files and directories that I've addded are not necessary, it is just a configuration/convention I like to follow and I think is useful for most of the projects.

**Added directories**

- `/scripts`: This is where all automation scripts should live, either to configure a github action or a pipeline in any CI/CD system.

- `/assets/img`: Normally I generate several sub directories inside this one for all the images that I use within the app.

- `/assets/fonts`: Here is where I save the fonts that I'll use.

- `/.github`: I've added a Pull Request template as well as two different Issue templates. One Issue template is to report a bug and the other one is for a feature request.

**Added files**

`.prettierrc.json` - Configuration to auto ident anf format the files
`tslin.json` - Configuration that checks for linting errors in typescript
`scripts/run_setup.sh` - Bash script that installs `commitlint` globally on your machine. More information about `commitlint` further down on this file.
`commitlint.config.js` - Commitlint configuration file.

## Added dependencies

**Dependencies**

- loadash
- immer
- i18n-js
- native-base
- react-native-date-picker
- react-native-gesture-handler
- react-native-vector-icons

**Dev Dependenices**

- prettier
- tslint
- tslint-config-prettier
- tslint-react

## Extra configuration

I"ve added a folder called `scripts` with a run_setup.sh script That installs `commitlint` globally on your machine. You can execute it by running: 

```
yarn run setup
```

### Commitlint

[Commitlint](https://commitlint.js.org/#/) is a tool that let's you check and configure how you want the commits to be written. If the commit that you write doesn't meet the requirements it wont let you commit the files and you will have to re write the your commit message again until it meets the specified requirements. 

I find this tool to be really helpful specially on large teams since it allows you to have an standard throught your commits. 



