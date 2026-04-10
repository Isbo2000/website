# My website :D

Currently it is very much not done yet

---

### website

> docker run -it --restart always -d -p 81:81 -p 82:82 --name website -v /home/isbo/website/conf/nginx.conf:/etc/nginx/nginx/conf.ro -v /home/isbo/website/conf.d:/etc/nginx/conf.d -v /home/isbo/website/html:/usr/share/nginx/html -v /home/isbo/website/logs:/var/log/nginx -v /home/isbo/website/ssl:/etc/nginx/ssl nginx

---

### cdn

>docker run -it --restart always -d -p 82:82 --name cdn -v /home/isbo/cdn/conf/nginx.conf:/etc/nginx/nginx/conf.ro -v /home/isbo/cdn/conf.d:/etc/nginx/conf.d -v /home/isbo/cdn/html:/usr/share/nginx/html -v /home/isbo/cdn/logs:/var/log/nginx -v /home/isbo/cdn/ssl:/etc/nginx/ssl nginx

>sudo mount -t cifs -o rw,vers=3.0,credentials=/root/.smbcredentials //192.168.1.219/Cdn /home/isbo/cdn/html

>//192.168.1.219/Cdn /home/isbo/cdn/html cifs rw,vers=3.0,credentials=/root/.smbcredentials


---

### dev:

> docker run -it --restart always -d -p 80:80 --name dev -v /home/isbo/dev/conf/nginx.conf:/etc/nginx/nginx/.conf.ro -v /home/isbo/dev/dev.conf.d:/etc/nginx/conf.d -v /home/isbo/dev/html:/usr/share/nginx/html -v /home/isbo/dev/logs:/var/log/nginx -v /home/isbo/dev/ssl:/etc/nginx/ssl nginx