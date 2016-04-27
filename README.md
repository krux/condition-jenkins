# condition-jenkins

[![npm version](https://badge.fury.io/js/%40krux%2Fcondition-jenkins.svg)](http://badge.fury.io/js/%40krux%2Fcondition-jenkins)
[![Build Status](https://jenkins-ci.org/krux/condition-jenkins.svg)](https://jenkins-ci.org/krux/condition-jenkins)
[![Coverage Status](https://coveralls.io/repos/krux/condition-jenkins/badge.svg?service=github)](https://coveralls.io/github/krux/condition-jenkins)

[![Dependency Status](https://david-dm.org/krux/condition-jenkins/master.svg)](https://david-dm.org/krux/condition-jenkins/master)
[![devDependency Status](https://david-dm.org/krux/condition-jenkins/master/dev-status.svg)](https://david-dm.org/krux/condition-jenkins/master#info=devDependencies)

## Installation

To install this plugin, execute:

```shell
npm install --save-dev @krux/condition-jenkins
```

## Usage

To use Jenkins for the CI, make the following changes:

* In the Jenkins build configuration, check 'Inject environment variables to the build process' and set `CI=true` in 'Properties Content'
* In the Jenkins build configuration, check 'Inject passwords to the build as environment variables' and set `GH_TOKEN` appropriately
* Configure `release` in your `package.json` as follows (showing `master` as the branch, but you can change that):

```
   "release": {
     "branch": "master",
     "verifyConditions": {
       "path": "./node_modules/@krux/condition-jenkins"
     }
   }
```
