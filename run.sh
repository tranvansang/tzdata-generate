#!/usr/bin/env bash
set -Eeuo pipefail

filename=${1%.tar.gz}

mkdir -p input/
pushd input
wget https://data.iana.org/time-zones/releases/${filename}.tar.lz
tar --lzip -xvf ${filename}.tar.lz
rm rf -rf ${filename}.tar.lz
popd
yarn
yarn all
