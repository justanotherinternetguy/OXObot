#!/bin/bash

# Check if a file path is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <file_path>"
    exit 1
fi

file_path=$1

# Check if the file exists
if [ ! -e "$file_path" ]; then
    echo "Error: File not found!"
    exit 1
fi

# Use sed to remove both hashtags and quotes from the file
sed -e "s/'//g" -e 's/#//g' "$file_path" > "${file_path}_without_hashtags_and_quotes"

echo "Hashtags and quotes removed. Output saved to ${file_path}_without_hashtags_and_quotes"
