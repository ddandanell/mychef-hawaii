#!/bin/zsh
# Loopback names for the myCHEF Hawaii island network.
# *.localhost already resolves on Chrome; this also covers Safari and the
# production hostnames for local preview.
set -euo pipefail
BLOCK='# mychef-hawaii island departments
127.0.0.1 oahu.localhost maui.localhost kauai.localhost bigisland.localhost
127.0.0.1 mychef-hawaii.com www.mychef-hawaii.com
127.0.0.1 oahu.mychef-hawaii.com maui.mychef-hawaii.com kauai.mychef-hawaii.com bigisland.mychef-hawaii.com'
if grep -q 'mychef-hawaii island departments' /etc/hosts; then
  echo "Wildcard hosts already present in /etc/hosts"
  exit 0
fi
echo "Adding island wildcard names to /etc/hosts (needs sudo)"
printf '\n%s\n' "$BLOCK" | sudo tee -a /etc/hosts >/dev/null
echo "Done. Hub: http://localhost:3000  Islands: http://oahu.localhost:3000"
