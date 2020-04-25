# UP Iris Photography Website

![UP Iris](http://res.cloudinary.com/kdphotography-assets/image/upload/c_scale,w_256/v1/upirisorg/web/static/web/media/private/logo.png)

[![CircleCI](https://circleci.com/gh/kvdomingo/upirisorg.svg?style=svg)](https://circleci.com/gh/kvdomingo/upirisorg)
[![codecov](https://codecov.io/gh/kvdomingo/upirisorg/branch/master/graph/badge.svg)](https://codecov.io/gh/kvdomingo/upirisorg)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Kenneth-V-Domingo/upirisorg)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/django?style=flat-square)
![node-current](https://img.shields.io/node/v/react?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/kvdomingo/upirisorg?style=flat-square)


## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
- [Python](https://python.org/downloads) 3.6.8 or above
- [Node.js](https://nodejs.org/en/) 10 or above
- [Git](https://git-scm.com/)
- [`requirements.txt`](./requirements.txt)

### Installing
A step by step series of examples that tell you how to get a development env running

1. Install Git, Python, and Node.js (links above).

1. Install and update Python package manager (`pip`) and virtualenv.
```shell
> python -m pip install -U pip virtualenv
```

1. Clone and extract repository to your machine
```shell
> git clone https://github.com/kvdomingo/upirisorg.git
```

1. Checkout a new `develop` branch. **DO NOT** make any modifications directly in the `master` branch. Similarly, **DO NOT** push directly to the `master` branch.
```shell
> git checkout -b develop
```

1. `cd` to repo folder and create a new virtualenv
```shell
> python -m venv env
```

1. Activate virtualenv
```shell
# Linux/macOS
> source env/bin/activate
# Windows
> .\env\scripts\activate
```

1. Install remaining prerequisites
```shell
> pip install -r requirements.txt
```

1. Setup JSX preprocessor
```shell
> npm init -y
> npm install babel-cli@6 babel-preset-react-app@3
```

### Deploying locally
```shell
> python manage.py runserver
```

Access the local server at `http://localhost:8000`.

### Running the tests
```shell
> python manage.py test
```

## Deployment
```shell
> git add .
> git commit -m <DESCRIPTIVE_COMMIT_MESSAGE>
> git push origin <GITHUB_BRANCH>
```
where `GITHUB_BRANCH` should reflect the type of changes you are implementing (e.g., `feature/some-amazing-new-feature`, `bugfix/crush-critical-bug`).

## CI/CD
- Check the status of the build at [CircleCI](https://circleci.com/gh/kvdomingo/upirisorg)
- Check and approve visual tests at [Percy](https://percy.io/Kenneth-V-Domingo/upirisorg)
- Check coverage test reports at [Codecov](https://codecov.io/gh/kvdomingo/upirisorg)

## Contributing
Email us at [upirisorg@gmail.com](mailto:upirisorg.gmail.com).

## Authors
- **Kenneth V. Domingo** - [Email](mailto:hello@kvdomingo.xyz) | [Website](https://kvdomingo.xyz) | [GitHub](https://github.com/kvdomingo)
