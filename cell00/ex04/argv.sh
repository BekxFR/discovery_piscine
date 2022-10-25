#!/bin/bash
if [[ $# -eq 0 ]] ; then
    echo 'No arguments supplied'
    exit 0
fi
for n in 1 2 3
do
	echo $1
	shift
	if [[ $1 -eq 0 ]] ; then
		exit 0
	fi
done