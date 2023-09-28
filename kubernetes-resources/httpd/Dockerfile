FROM nginx

RUN apt update -y
RUN apt install -y net-tools

COPY server.sh /usr/sbin/server.sh
# COPY index.html /usr/share/nginx/html/index.html

# # ENTRYPOINT ["./server.sh"]
CMD ["/usr/sbin/server.sh"]
