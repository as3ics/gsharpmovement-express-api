#!/bin/bash

USERNAME="ubuntu"
CERT="~/.as3ics/weshallprevail.pem"
ENV="./.env"
SERVER_A="ec2-18-219-65-101.us-east-2.compute.amazonaws.com"
HOST="/home/ubuntu/current/"

scp -i $CERT -rp $ENV $USERNAME@$SERVER_A:$HOST