#!/bin/bash

STAGE=$(jq -r '.stage' config.json)

if [[ "$STAGE" == "Development" ]]; then
  echo '{ "stage": "Testing" }' > config.json
elif [[ "$STAGE" == "Testing" ]]; then
  echo '{ "stage": "Staging" }' > config.json
elif [[ "$STAGE" == "Staging" ]]; then
  echo '{ "stage": "Production" }' > config.json
else
  echo '{ "stage": "Development" }' > config.json
fi

echo "Stage updated successfully!"
