FROM nginx

RUN apt update -y
RUN apt install -y net-tools

COPY index.html /usr/share/nginx/html/index.html

# # ENTRYPOINT ["./server.sh"]
# CMD ["./server.sh"]
