# Packer Plugin Scaffolding

This repository is a template for a Packer multi-component plugin. It is intended as a starting point for creating Packer plugins, containing:
- A builder ([builder/scaffolding](builder/scaffolding))
- A provisioner ([provisioner/scaffolding](provisioner/scaffolding))
- A post-processor ([post-processor/scaffolding](post-processor/scaffolding))
- A data source ([datasource/scaffolding](datasource/scaffolding))
- Docs ([docs](docs))
- A working example ([example](example))

These folders contain boilerplate code that you will need to edit to create your own Packer multi-component plugin.
A full guide to creating Packer plugins can be found at [Extending Packer](https://www.packer.io/docs/plugins/creation).

In this repository you will also find a pre-defined GitHub Action configuration for the release workflow
(`.goreleaser.yml` and `.github/workflows/release.yml`). The release workflow configuration makes sure the GitHub
release artifacts are created with the correct binaries and naming conventions.

Please see the [GitHub template repository documentation](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)
for how to create a new repository from this template on GitHub.

## Packer plugin projects

Here's a non exaustive list of Packer plugins that you can checkout:

* [github.com/hashicorp/packer-plugin-docker](https://github.com/hashicorp/packer-plugin-docker)
* [github.com/exoscale/packer-plugin-exoscale](https://github.com/exoscale/packer-plugin-exoscale)
* [github.com/sylviamoss/packer-plugin-comment](https://github.com/sylviamoss/packer-plugin-comment)
* [github.com/hashicorp/packer-plugin-hashicups](https://github.com/hashicorp/packer-plugin-hashicups)

Looking at their code will give you good examples.

## Running Acceptance Tests

Make sure to install the plugin with `go build .` and to have Packer installed locally.
Then source the built binary to the plugin path with `cp packer-plugin-scaffolding ~/.packer.d/plugins/packer-plugin-scaffolding`
Once everything needed is set up, run:
```
PACKER_ACC=1 go test -count 1 -v ./... -timeout=120m
```

This will run the acceptance tests for all plugins in this set.

## Test Plugin Example Action

This scaffolding configures a [manually triggered plugin test action](/.github/workflows/test-plugin-example.yml).
By default, the action will run Packer at the latest version to init, validate, and build the example configuration
within the [example](example) folder. This is useful to quickly test a basic template of your plugin against Packer.

The example must contain the `required_plugins` block and require your plugin at the latest or any other released version.
This will help test and validate plugin releases.

## Registering Plugin as Packer Integration

Partner and community plugins can be hard to find if a user doesn't know what 
they are looking for. To assist with plugin discovery Packer offers an integration
portal at https://developer.hashicorp.com/packer/integrations to list known integrations 
that work with the latest release of Packer. 

Registering a plugin as an integration requires [metadata configuration](./metadata.hcl) within the plugin
repository and approval by the Packer team. To initiate the process of registering your 
plugin as a Packer integration refer to the [Developing Plugins](https://developer.hashicorp.com/packer/docs/plugins/creation#registering-plugins) page.

# Requirements

-	[packer-plugin-sdk](https://github.com/hashicorp/packer-plugin-sdk) >= v0.2.9
-	[Go](https://golang.org/doc/install) >= 1.20

## Packer Compatibility
This scaffolding template is compatible with Packer >= v1.7.0
