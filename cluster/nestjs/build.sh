docker build -t nestjs:latest .
docker tag nestjs:latest 192.168.122.1:5000/nestjs:latest 

docker push 192.168.122.1:5000/nestjs:latest

