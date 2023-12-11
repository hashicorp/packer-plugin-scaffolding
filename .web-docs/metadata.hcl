# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

# Details on using this Integration template can be found at https://github.com/hashicorp/integration-template
# Alternatively this metadata.hcl file can be placed under the docs/ subdirectory or any other config subdirectory that 
# makes senses for the plugin. 
integration {
  name = "Integration Template"
  description = "This is an integration template"
  identifier = "packer/hashicorp/scaffolding"
  flags = [ "community" ]
  docs {
    process_docs = true
    # We recommend using the default readme_location of just `./README.md` here
    # This projects README needs to document the interface of an integration.
    #
    # If you need a separate README from what you will display on GitHub vs
    # what is shown on HashiCorp Developer, this is totally valid, though!
    readme_location = "./INTEGRATION_README.md"
    external_url = "https://github.com/hashicorp/integration-template"
  }
  license {
    type = "MPL-2.0"
    url = "https://github.com/hashicorp/integration-template/blob/main/LICENSE.md"
  }
  component {
    type = "builder"
    name = "Component Name (e.g HappyCloud EBS)"
    slug = "name"
  }
  component {
    type = "provisioner"
    name = "Component Name (e.g HappyCloud Shell)"
    slug = "name"
  }
  component {
    type = "post-processor"
    name = "Component Name"
    slug = "name"
  }
  component {
    type = "data-source"
    name = "Component Name"
    slug = "name"
  }
}
