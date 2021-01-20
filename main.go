package main

import (
	"fmt"
	"os"
	"packer-plugin-scaffolding/builder/scaffolding"
	scaffoldingPP "packer-plugin-scaffolding/post-processor/scaffolding"
	scaffoldingProv "packer-plugin-scaffolding/provisioner/scaffolding"
	scaffoldingData "packer-plugin-scaffolding/datasource/scaffolding"

	"github.com/hashicorp/packer-plugin-sdk/plugin"
	"github.com/hashicorp/packer-plugin-sdk/version"
)

var (
	// The main version number that is being run at the moment.
	Version = "0.0.1"

	// A pre-release marker for the Version. If this is "" (empty string)
	// then it means that it is a final release. Otherwise, this is a pre-release
	// such as "dev" (in development), "beta", "rc1", etc.
	VersionPrerelease = "dev"
)

var PluginVersion *version.PluginVersion

func init() {
	PluginVersion = version.InitializePluginVersion(
		Version, VersionPrerelease)
}

func main() {
	pps := plugin.NewSet()
	pps.RegisterBuilder("my-builder", new(scaffolding.Builder))
	pps.RegisterProvisioner("my-provisioner", new(scaffoldingProv.Provisioner))
	pps.RegisterPostProcessor("my-post-processor", new(scaffoldingPP.PostProcessor))
	pps.RegisterDatasource("my-datasource", new(scaffoldingData.Datasource))
	pps.SetVersion(PluginVersion)
	err := pps.Run()
	if err != nil {
		fmt.Fprintln(os.Stderr, err.Error())
		os.Exit(1)
	}
}
