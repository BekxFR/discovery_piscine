#!/bin/bash
if [[ $# -eq 0 ]] ; then
    echo 'No arguments supplied'
    exit 0
fi
for n
do
	mkdir ex$1
	shift
done
