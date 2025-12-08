# Copyright IBM Corp. 2020, 2025
# SPDX-License-Identifier: MPL-2.0

source "null" "basic-example" {
  communicator = "none"
}

build {
  sources = [
    "source.null.basic-example"
  ]

  post-processor "scaffolding-my-post-processor" {
    mock = "my-mock-config"
  }
}
