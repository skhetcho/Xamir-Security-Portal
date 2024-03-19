# Xamir Security Portal - Ease Your Information Gathering Process

Xamir is a web-based application which utilizes different CLI based security scanning tools
to help pentesters quickly gain insight on their targets that they are analyzing. This tool is meant to
help newbies get into pentesting by presenting the use of different information gathering tools and the
results they produce. More powerful tools could be integrated, however, I plan on using tools which do not require any API keys nor custom configuration beyond a regular setup like `pip install`.

## Security Tools Used
| Tool Name | Brief Description| Source Code |
| ------ | ------ | ------ |
| NMap | Network discovery and security auditing tool to learn more about the target host | https://github.com/nmap/nmap |
| Wpscan | Wordpress site scanner | https://wpscan.com/wordpress-security-scanner |
| uniscan | Website directory harvester | https://tools.kali.org/web-applications/uniscan |
| DNSMAP | Find valuable PII information like contact information and related IP addresses | https://github.com/resurrecting-open-source-projects/dnsmap |

#####More? You can just use ```apt-get install <package>``` because it is ready with Kali-linux package repos 
## Programming Languages Used
|Language Name| Used For |
| ------ | ------ |
| JavaScript (Primarily ReactJS and the API server) | Front-end & Back-end |
| Bash | Automated Tool processing and system configuration (install.sh) |
| Python| File and data processing |


## Multi-language communication
* We have deployed an API using Express.js on Node.js. This gave us access to interact with many tools that were written in different languages like Python, C, Perl, and such. We would gather their output and nicely display it in a CLI like interface on the front end through the developed REST API.
* We have also utilized Python for one of the tools "dnsmap" to properly display its output on the CLI using a python script as a middleware. The Python script would read from a file created by the Express server and would return its content back to the Server through a ```spawn``` from ```child_process``` package which is available for Node.js


## Deployment technology
1. ```git clone https://github.com/skhetcho/Xamir-Security-Portal.git```
2. ```cd security-portal```
3. ```docker-compose up --build```
**That is all you need to do.**

[![Display](https://i.imgur.com/RXsJhcf.png "Display")](https://i.imgur.com/RXsJhcf.png "Display")

I previously intended to use Vagrant however Docker was well equipped to conduct the needs of this project. In addition, docker allows an easier process to deploy instances of the
application on subdomains. This allows us in the future to provide dedicated subdomains with ``root`` access to a shell command similar to how we see in the project
without the risk of temperament of the main server's security.
