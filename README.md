# My website :D

Currently it is very much not done yet

docker run -it --restart always -d -p 81:81 --name website -v /home/isbo/website/conf/nginx.conf:/etc/nginx/nginx/conf.ro -v /home/isbo/website/conf.d:/etc/nginx/conf.d -v /home/isbo/website/html:/usr/share/nginx/html -v /home/isbo/website/logs:/var/log/nginx -v /home/isbo/website/ssl:/etc/nginx/ssl nginx

dev:

docker run -it --restart always -d -p 80:80 --name dev -v /home/isbo/dev/conf/nginx.conf:/etc/nginx/nginx/conf.ro -v /home/isbo/dev/conf.d:/etc/nginx/conf.d -v /home/isbo/dev/html:/usr/share/nginx/html -v /home/isbo/dev/logs:/var/log/nginx -v /home/isbo/dev/ssl:/etc/nginx/ssl nginx