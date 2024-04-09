#!/bin/bash

# while [ 1 ]; do echo running; sleep 2; done
# exit 0

PIDFILE=/tmp/nestjs.pid

_term() { 
  echo "BASH: Caught SIGTERM signal!"
  if [ ! -f $PIDFILE ]; then 
    echo "BASH: unable to find $PIDFILE"
    return
  fi
  kill -SIGTERM `cat $PIDFILE`
  wait "$child"
}

trap _term TERM INT

run() {
  npm run $1 &
  
  child=$! 
  wait "$child"

  exit $?
}

if [ -z $NODE_ENV ]
then
  echo NODE_ENV not set. Setting to development.
  NODE_ENV=development
fi

if [ X$NODE_ENV = Xlocal ]; then
  echo "Running in env local"
  run start:debug
fi

if [ X$NODE_ENV = Xdevelopment ]; then
  echo "Running in development env"
  run start:debug
fi

echo "Running in prod env"
run start:prod

