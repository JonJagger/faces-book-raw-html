#!/bin/bash
# The faces-book server must be running on the given port

readonly MY_DIR="$( cd "$( dirname "${0}" )" && pwd )"

readonly PORT=${1:-80}
readonly IP=${2:-localhost}
readonly CURL_LOG="/tmp/faces-book-curl.log"

# - - - - - - - - - - - - - - - - - - - - - - - - - - -

curl_route()
{
  route=$1
  curl -i -f -X GET "http://${IP}:${PORT}${route}" &> ${CURL_LOG}
  status=$?
  if [ "${status}" -eq "0" ]; then
    echo "PASS ${status} ${route}"
  else
    echo "FAIL ${status} ${route}"
    cat ${CURL_LOG}
    ${MY_DIR}/logs.sh
  fi
}

# - - - - - - - - - - - - - - - - - - - - - - - - - - -

echo "faces-book: Running unit tests..."
curl_route "/test"

echo "faces-book: Checking routes are 200..."
curl_route "/"
