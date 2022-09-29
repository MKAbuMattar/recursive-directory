echo "Sarting Script"

# check if directory exists dir
if [ -d dir ]; then
    echo "Directory exists"
else
    echo "Directory does not exist"

    # create directory
    mkdir dir

    # go to directory >> dir
    cd dir

    # create directorys [.vscode, assets]
    mkdir .vscode assets

    # go to directory >> .vscode
    cd .vscode

    # create file >> settings.json
    touch settings.json

    # go to directory >> assets
    cd ../assets

    # create directorys [css, icons, images, js]
    mkdir css icons images js

    # go to directory >> css
    cd css

    # create files >> [style.css, normalize.css]
    touch style.css normalize.css

    # go to directory >> icons
    cd ../icons

    # create files >> [favicon.ico, icon.svg]
    touch favicon.ico icon.svg

    # go to directory >> images
    cd ../images

    # create files >> [logo.png, logo.svg]
    touch logo.png logo.svg

    # go to directory >> js
    cd ../js

    # create files >> [main.js]
    touch main.js

    # go to directory >> dir
    cd ../..

    # create files >> [.prettierrc, index.html, manifest.webmanifest]
    touch .prettierrc index.html manifest.webmanifest
fi

# check if directory exists empty
if [ -d empty ]; then
    echo "Directory exists"
else
    echo "Directory does not exist"

    # create directory
    mkdir empty
fi

echo "Script Finished"



