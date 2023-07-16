# create a key for user tom
openssl genrsa -out dev-tom.key 2048

# create creatificate signing request for user tom
openssl req --new --key dev-tom.key --subj "/CN=tom" --out dev-tom.csr

# apply the csr
kubectl appy -f dev-tom-csr.yaml

# check the state of the csr
kubectl get csr

# approve the certificate signing request
kubectl certificate approve dev-tom

# save the certificate to dev-tom.crt
# from kubectl get csr dev-tom -o yaml, take certificate attribute from the status
echo <certificate> | base64 --decode > dev-tom.crt