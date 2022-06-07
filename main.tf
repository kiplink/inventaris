terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.13.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "postgresql" {
  name         = "postgres:13"
  keep_locally = false
}

resource "docker_image" "inventaris" {
  name         = "kiplink/inventaris:1.0"
  keep_locally = true
}

resource "docker_network" "inventaris" {
  name   = "invnet"
  driver = "bridge"
}

resource "docker_container" "postgresql" {
  image = docker_image.postgresql.name
  name  = "postgres"

  networks_advanced {
    name    = docker_network.inventaris.name
    aliases = ["invnet"]
  }

  ports {
    internal = 5432
    external = 5433
  }
  env = ["POSTGRES_PASSWORD=m4tem4tik4"]
  volumes {
    host_path      = "/home/kipz/Volumes/postgre/inventaris"
    container_path = "/var/lib/postgresql/data"
  }
}

resource "docker_container" "inventaris" {
  image = docker_image.inventaris.name
  name  = "inventaris"
  env = [
    "DB_HOST=postgres",
    "DB_USER=postgres",
    "DB_PASS=m4tem4tik4",
    "DB_NAME=inventaris",
    "DB_PORT=5432"
  ]

  networks_advanced {
    name    = docker_network.inventaris.name
    aliases = ["invnet"]
  }

  ports {
    internal = 3000
    external = 3000
  }

  depends_on = [
    docker_container.postgresql
  ]
}