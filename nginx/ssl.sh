#!/bin/sh

apt-get install python3-certbot-nginx -y

certbot certonly --nginx --noninteractive --agree-tos -d tasktrackr.sr.flipr.ai --register-unsafely-without-email

cp default.conf.backup /etc/nginx/conf.d/default.conf
