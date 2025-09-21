#!/bin/bash
cd apache-jena-fuseki-4.6.1
date +"%H:%M:%S INFO  WebURL          :: http://localhost:3030/"
cmd.exe /c fuseki-server.bat
cd ..