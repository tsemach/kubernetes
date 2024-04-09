# Installing Using Strimzi
````bash
kubectl create namespace kafka
````

````bash
curl -s -L http://strimzi.io/install/latest \
  | sed 's/namespace: .*/namespace: kafka/' \
  | kubectl apply -f - -n kafka

````

kafka-persistent-single.yaml download from https://strimzi.io/examples/latest/kafka/kafka-persistent-single.yaml
kafka-persistent.yaml download from https://github.com/strimzi/strimzi-kafka-operator/blob/0.37.0/examples/kafka/kafka-persistent.yaml

````bash
kubectl apply -f kafka-persistent.yaml -n kafka
````

Watch the progress of installing with
````bash
kubectl wait kafka/kafka-cluster --for=condition=Ready --timeout=300s -n kafka 
````

Test the queue by sending message:
````bash
kubectl -n kafka run kafka-consumer -ti --image=quay.io/strimzi/kafka:0.37.0-kafka-3.5.1 --rm=true --restart=Never -- bin/kafka-console-consumer.sh --bootstrap-server kafka-cluster-kafka-bootstrap:9092 --topic my-topic --from-beginning
````

Receiving message from kafka
````bash
kubectl -n kafka run kafka-consumer -ti --image=quay.io/strimzi/kafka:0.37.0-kafka-3.5.1 --rm=true --restart=Never -- bin/kafka-console-consumer.sh --bootstrap-server kafka-cluster-kafka-bootstrap:9092 --topic my-topic --from-beginning
````


