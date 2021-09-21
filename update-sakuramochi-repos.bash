#!/usr/bin/env bash

# Save the latest json file to hold the list of repositories of @sakuramochi0
# Requirements: gh, jq

curl https://api.github.com/users/sakuramochi0/repos?per_page=200 | jq > ./src/assets/sakuramochi0-repos.json
