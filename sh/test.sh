#!/bin/bash
#set -x

readonly PORT=${1:-80}
readonly IP=${2:-localhost}
readonly LOG="/tmp/faces-book.log"

# - - - - - - - - - - - - - - - - - - - - - - - - - - -

result()
{
  status=$1
  path=$2
  if [ "${status}" -eq "0" ]; then
    echo "PASS ${status} ${path}"
  else
    echo "FAIL ${status} ${path}"
    cat ${LOG}
  fi
}

# - - - - - - - - - - - - - - - - - - - - - - - - - - -

echo "faces-book: Basic route checking..."
curl -i -f -X GET http://${IP}:${PORT}/ &> ${LOG}
result $? '/'
