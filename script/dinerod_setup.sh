#!/bin/bash
# Download latest node and install.
dinlink=`curl -s https://api.github.com/repos/dinero-crypto/dinero/releases/latest | grep browser_download_url | grep linux64 | cut -d '"' -f 4`
mkdir -p /tmp/dinero
cd /tmp/dinero
curl -Lo dinero.tar.gz $dinlink
tar -xzf dinero.tar.gz
sudo mv ./bin/* /usr/local/bin
cd
rm -rf /tmp/dinero
mkdir ~/.dinero

# Setup configuration for node.
rpcuser=$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c 13 ; echo '')
rpcpassword=$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c 32 ; echo '')
cat >~/.dinero/dinero.conf <<EOL
rpcuser=$rpcuser
rpcpassword=$rpcpassword
daemon=1
txindex=1
EOL

# Start node.
dinerod
