apt-get -y update && apt-get -y dist-upgrade && apt-get -y autoremove && apt-get clean

# install nmap wpscan uniscan and git
apt-get -y install nmap wpscan uniscan git nano
curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
apt-get -y install nodejs

# update wpscan
wpscan --update

# Install pip
apt-get -y install pip
# Install libc-bin if it hasn't
apt-get -y install libc-bin
# Install dnsmap
git clone https://github.com/resurrecting-open-source-projects/dnsmap.git
cd dnsmap/
apt-get -y install autoconf
./autogen.sh
./configure
make
make install
###########################