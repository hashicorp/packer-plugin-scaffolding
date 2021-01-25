# Packer Plugin Scaffolding

This repository is a template for a Packer multi-plugin. It is intended as a starting point for creating Packer plugins, containing:
- A builder (`builder/scaffolding`)
- A provisioner (`provisioner/scaffolding`)
- A post-processor (`post-processor/scaffolding`)
- A data source (`datasource/scaffolding`)
- Docs (`docs/`)

These folders contain boilerplate code that you will need to edit to create your own Packer multi-plugin.
A full guide to creating Packer plugins can be found at [Extending Packer](https://www.packer.io/docs/extending).

In this repository you will also find a pre-defined GitHub Action configuration for the release workflow
(`.goreleaser.yml` and `.github/workflows/release.yml`).

Please see the [GitHub template repository documentation](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)
for how to create a new repository from this template on GitHub.

## Running Acceptance Tests

Make sure to install the plugin with `go install .` and to have Packer installed locally.
Once everything needed is set up, run: 
```
PACKER_ACC=1 go test -count 1 -v ./... -timeout=120m
```

This will run the acceptance tests for all plugins in this set.

## Requirements

-	[packer-plugin-sdk](https://github.com/hashicorp/packer-plugin-sdk) >= 0.0.7
-	[Go](https://golang.org/doc/install) >= 1.15
