# Contributing Guidelines

Thanks for taking the time to contribute!

The following is a set of guidelines for contributing to LIA. 

## Getting Started

LIA app is built on top of [React](https://reactjs.org/). If you are new to React, please head over to [this](https://reactjs.org/tutorial/tutorial.html) great article.

## Code Style Guide
[See: airbnb style guide](https://github.com/airbnb/javascript)

## Consider in the whole app:

* Comment every util’s function and, optionally, comment any behavior that you think needs a documentation using [jsdoc's guide](http://usejsdoc.org/index.html).

* Write descriptive commits for each file you modify, create or delete.

## Folder Structure:
```
-file /folder

/lia
  /public
  /build
  /src 
    /__tests__ 
      /__snapshots__ 
      -testName.test.js 
    /redux
      -initialState.js
      -actions.js
      /reducers
      /boundedActions 
    /router 
      -index.js 
    /utils 
      -utilName.js 
    /components 
      -componentName.js
```

## Community

* The whole LIA documentation, such as setting up a development environment, setting up with the LIA webapp project, and testing, can be read [here](https://github.com/Jobsity/lia/tree/readme/docs).

* If you have any questions regarding LIA, open an [issue](https://github.com/Jobsity/lia/issues/new).

## Issue
Ensure the bug was not already reported by searching on GitHub under [issues](https://github.com/Jobsity/lia/issues). If you're unable to find an open issue addressing the bug, open a [new issue](https://github.com/Jobsity/lia/issues/new).


Please pay attention to the following points while opening an issue.

### Write detailed information
Detailed information is very helpful to understand an issue.

For example:
* How to reproduce the issue, step-by-step.
* The expected behavior (or what is wrong).
* Screenshots for GUI issues.
* The application version.
* The operating system.

## Pull Requests
Pull Requests are always welcome. 

1. When you edit the code, please run `tests` to check the formatting of your code before you `git commit`.
2. Ensure the PR description clearly describes the problem and solution. It should include:
   * The operating system on which you tested.
   * The relevant issue number, if applicable.
