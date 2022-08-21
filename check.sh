#!/bin/bash
testfor () {
if [[ $1 = {* ]]
then :
else echo $i
fi
}

mapfile -t arr < names.txt

for i in "${arr[@]}"; do url="https://api.mojang.com/users/profiles/minecraft/${i}"
output=$(wget $url -q -O -)
testfor $output
sleep 1
done
