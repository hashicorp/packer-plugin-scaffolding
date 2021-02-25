## The Example Folder
 
This folder must contain a fully working example of the plugin usage. The example must define the `required_plugins` block.
A pre-defined GitHub Action will run `packer init` and `packer build` against it and test your plugin with
the latest version available of Packer.

The folder can contain multiple HCL2 compatible files. The action will execute Packer at this folder level 
running `packer init -upgrade .` and `packer build .`.

If the plugin requires authentication, the configuration should be provided via GitHub Secrets
and set as environment variables in the action config file.
