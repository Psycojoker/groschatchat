set -eux

rm -rf images/*
touch images/empty

echo "images = [" > js/images.js

for image in $(ls base_images)
do
    gm convert base_images/$image -auto-orient -strip -interlace Line -define jpeg:preserve-settings images/$image
    echo "'$image'," >> js/images.js
done

sed -i '$s/,$//' js/images.js
echo "]" >> js/images.js
