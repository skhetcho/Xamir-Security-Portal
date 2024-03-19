# Xamir Security Portal - Ease Your Information Gathering Process

Xamir is a web-based application which utilizes different CLI based security scanning tools
to help pentesters quickly gain insight on their targets that they are analyzing. This tool is meant to
help newbies get into pentesting by presenting the use of different information gathering tools and the
results they produce. More powerful tools could be integrated, however, I plan on using tools which do not require any API keys nor custom configuration beyond a regular setup like `pip install`.

## Security Tools Used
| Tool Name | Brief Description| Source Code |
| ------ | ------ | ------ |
| NMap | Network discovery and security auditing tool to learn more about the target host | https://github.com/nmap/nmap |
| Dmitry | Host identification, Whois lookups, and much more | https://github.com/jaygreig86/dmitry |
| dnsenum&#46;pl | Perl script for dns record harvesting like MX, A, etc... | https://github.com/fwaeytens/dnsenum |
| DNSMAP | Find valuable PII information like contact information and related IP addresses | https://github.com/resurrecting-open-source-projects/dnsmap |
| OSINT-SPY | Multi-functional information gathering and bitcoin blockchain explorer | https://github.com/SharadKumar97/OSINT-SPY |
| Scylla | CLI tool to lookup a specific (or a list of emails belonging to a domain) in compromised databases | https://github.com/k0fin/scylla |

## Programming Languages Used
|Language Name| Used For |
| ------ | ------ |
| JavaScript (Primarily ReactJS) | Front-end dashboard |
| Bash | Automated Tool processing and system configuration |
| Go* | File and data processing |

`* This language may be changed later on to adopt a more efficient language for any determined tasks in the future`

## Multi-language communication
* Planning to use Go to process the tools' output (exec output) into a file and pass it onto the frontend to be display by the ReactJS dashboard
* Will need to implement some form of an API to connect Golang's output with the front end (be able to call separate golang functions from the frontend)


## Deployment technology
Vagrant VM will be more suitable for this project. We will use kalilinux/rolling image for our purpose