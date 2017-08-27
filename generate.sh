set -eux

rm -rf images/*

echo "images = [" > js/images.js

for image in $(ls base_images | shuf)
do
    gm convert base_images/$image -auto-orient -strip -interlace Line -define jpeg:preserve-settings images/$image
    echo "'$image'," >> js/images.js
done

sed -i '$s/,$//' js/images.js
echo "]" >> js/images.js
