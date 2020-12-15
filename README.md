# Packer Plugin Scaffolding

This repository is a template for a Packer multi-plugin. It is intended as a starting point for creating Packer plugins, containing:
- A builder (`builder/scaffolding`)
- A provisioner (`provisioner/scaffolding`)
- A post-processor (`post-processor/scaffolding`)
- Docs (`docs/`)

These files contain boilerplate code that you will need to edit to create your own Packer multi-plugin. 
A full guide to creating Packer plugins can be found at [Extanding Packer](https://www.packer.io/docs/extending).

In this repository you will also find a pre-defined GitHub Action configuration for the release workflow 
(`.goreleaser.yml` and `.github/workflows/release.yml`).

Please see the [GitHub template repository documentation](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) 
for how to create a new repository from this template on GitHub.

## Requirements

-	[packer-plugin-sdk](https://github.com/hashicorp/packer-plugin-sdk) >= 0.1.0
-	[Go](https://golang.org/doc/install) >= 1.15
