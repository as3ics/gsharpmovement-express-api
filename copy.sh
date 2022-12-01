#!/bin/bash

USERNAME="ubuntu"
CERT="~/.as3ics/weshallprevail.pem"
ENV="./.env"
SERVER_A="ec2-18-116-12-48.us-east-2.compute.amazonaws.com"
HOST="/home/ubuntu/server/"

scp -i $CERT -rp $ENV $USERNAME@$SERVER_A:$HOST