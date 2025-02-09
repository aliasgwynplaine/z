#!/bin/bash

echo "[*] changing links..."
sed -i 's/\[\[\([1-90A-Za-z\-]*\)\]\]/\[\1\](\1\.md)/g' src/*
echo "[*] latex delimiters..."
sed -i -E 's/\$([^$]+)\$/\\\\(\1\\\\)/g' src/*
sed -i -E -z 's/\$\$(.*?)\$\$/\\\\[\1\\\\]/g' src/*
echo "[*] updating SUMMARY.md..."

if [ -f src/SUMMARY ]; then 
	rm src/SUMMARY.md
fi

cd src

for f in $(ls *.md); do
	echo "[${f%.*}]($f)" >> SUMMARY.md
done

cd -
echo "[*] Done !"
