rm -rf images/*

echo "images = [" > js/images.js

for image in $(ls base_images | shuf)
do
    echo gm convert base_images/$image -auto-orient -strip -interlace Line -define jpeg:preserve-settings images/$image
    gm convert base_images/$image -auto-orient -strip -interlace Line -define jpeg:preserve-settings images/$image

    background_image="$(echo $image | sed 's/\./-background./')"
    echo gm convert base_images/$image -auto-orient -strip -resize 10% -interlace Line -define jpeg:preserve-settings images/$bacground_image
    gm convert base_images/$image -auto-orient -strip -resize 10% -interlace Line -define jpeg:preserve-settings images/$background_image

    echo "'$image'," >> js/images.js
done

sed -i '$s/,$//' js/images.js
echo "]" >> js/images.js
