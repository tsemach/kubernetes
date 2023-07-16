# systemctl start httpd
# systemctl enable httpd

_ip=$(ifconfig | grep -C2 eth0 | grep inet | awk '{print $2}')
echo "<h1>Helllo K8S! this is $_ip</h1>" > /usr/share/nginx/html/index.html
