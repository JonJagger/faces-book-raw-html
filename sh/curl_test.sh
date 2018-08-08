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

echo "faces-book: Running unit tests..."

curl -i -f -X GET http://${IP}:${PORT}/test &> ${LOG}
result $? '/test'

echo "faces-book: Checking routes are 200..."

curl -i -f -X GET http://${IP}:${PORT}/ &> ${LOG}
result $? '/'
