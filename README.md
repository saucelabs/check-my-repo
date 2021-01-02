# Check My Repo

**Check My Repo** is a tool for OSPOs Open Source Program Offices, to automatically check their repositories health and quality.
Built upon [Repolinter](https://github.com/todogroup/repolinter) and using [open source best practices](https://opensource.guide/building-community/) as reference, this tools verifies if repositories contains:

- [] Readme.md file
- [] Changelog.md file or uses GitHib Releases
- [] Codeowners file with a “Maintain” role
- [] License file with copyright attributed to Sauce Labs
- [] Security: if does not have binaries
- [] Test directory

Although part of best practices, as all Sauce Labs repositories are under Sauce Labs:

- [x] Code of conduct
- [x] Contribution guidelines
- [x] Support file
      Therefore, this tool does not check for those files, but they can easily be implemented on your project by adding them into **repolinter.json** configuration file, using [repolinter dafault file](https://github.com/todogroup/repolinter/blob/master/rulesets/default.json).

## How does it works

To a detailed understanding you can check the activity diagram under diagrams directory.

## Getting Started

### To run in terminal

1. Clone this project
2. Install dependencies

```
npm install
```

```
node node src/index.js
```

It enables you to verify all Sauce Labs public repositories, as it is set up as default.
If you would like to check your own organization repos:

```
node node src/index.js <your organization github name>
```

### To run in browser

3. Open frontend folder

```
cd fronted
```

4. Run server

```
npm run serve
```

5. Open in browser network link provided in terminal

```
Cmd + click
```

6. Click **Check** button

If you have any questions or comments, get in touch with us [opensource@saucelabs](mailto:opensource@saucelabs.com)

### Prerequisites

You need to have Node.js install version 12 or latter.
This project is currently using version 14.
To check if you have and which Node.js version you can type

```
node -v
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our process for submitting pull requests to us, and please ensure you follow the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/saucelabs/automated-oss-quality-check/).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Thanks to [Todo Group](https://todogroup.org/) for developing Repolinter and kindly supporting us during this development.
