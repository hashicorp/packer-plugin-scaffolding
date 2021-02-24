## Example
 
This folder must contain a working example of the plugin so that a pre-defined 
GitHub Action can run `packer init` and `packer build` against it.

This example should be compatible with HCL2 and can contain multiple files. 
The action will execute Packer at this folder level with `packer init .` and `packer build .`.

