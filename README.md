# UP Iris Photography Website

![UP Iris](http://res.cloudinary.com/kdphotography-assets/image/upload/c_scale,w_256/v1/upirisorg/web/static/web/media/private/logo.png)

![PyPI - Python Version](https://img.shields.io/pypi/pyversions/django?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/kvdomingo/upirisorg?style=flat-square)


## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
- [Python](https://python.org/downloads) 3.7
- [Git](https://git-scm.com/)

### Installing
A step by step series of examples that tell you how to get a development env running

1. Install Git and Python (links above).

2. Install and update Python package manager and virtualenv (`pip`).
```shell
> python -m pip install -U pip virtualenv
```

3. Clone and extract repository to your machine
```shell
> git clone https://github.com/kvdomingo/upirisorg.git
```

4. Checkout a new `develop` branch. **DO NOT** make any modifications directly in the `master` branch. Similarly, **DO NOT** push directly to the `master` branch.
```shell
> git checkout -b develop
```

5. Navigate to the extracted repository and create a virtual environment.
```shell
> python -m venv env
```

6. Activate the virtual environment
```shell
# Windows
.\env\Scripts\activate

# Linux/macOS
source env/bin/activate
```

7. Install remaining prerequisites
```shell
> pip install -r requirements.txt
```

### Deploying locally
Open a terminal and run
```shell
> python manage.py runserver
```

Access the local server at `http://localhost:8000`.

## Deployment
```shell
> git add .
> git commit -m <DESCRIPTIVE_COMMIT_MESSAGE>
> git push origin <GITHUB_BRANCH>
```
where `GITHUB_BRANCH` should reflect the type of changes you are implementing (e.g., `feature/some-amazing-new-feature`, `bugfix/crush-critical-bug`).

## Contributing
Email us at [upirisorg@gmail.com](mailto:upirisorg.gmail.com).

## Authors
- **Kenneth V. Domingo** - [Email](mailto:hello@kvdomingo.xyz) | [Website](https://kvdomingo.xyz) | [GitHub](https://github.com/kvdomingo)
