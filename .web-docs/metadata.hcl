# Copyright (c) 2025 Corey Hemminger
# SPDX-License-Identifier: Apache-2.0

# For more information on using and configuring this file for your plugin, please read the
# documentation located at https://github.com/hashicorp/integration-template
integration {
  name = "Host Info"
  description = "The Host Info plugin detects the operating system, version, and CPU architecture of the host where Packer is running"
  identifier = "packer/stromweld/host-info"
  flags = []
  docs {
    process_docs = true
    readme_location = "./README.md"
    external_url = "https://github.com/Stromweld/packer-plugin-host-info"
  }
  license {
    type = "Apache-2.0"
    url = "https://github.com/Stromweld/packer-plugin-host-info/blob/main/LICENSE"
  }
  component {
    type = "data-source"
    name = "Host Info"
    slug = "datasource"
  }
}
