#!/bin/bash

APP_NAME=postgres
NAMESPACE=postgres

kubectl create namespace ${NAMESPACE} --dry-run=client -o yaml | kubectl apply -f -
helm upgrade --install $APP_NAME ./helm/$APP_NAME -n $NAMESPACE --set image.tag=latest