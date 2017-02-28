FOR /F "tokens=* USEBACKQ" %%F IN (`node -e "process.stdout.write(require('./package.json').repository)"`) DO SET GITHUB_REPO=%%F

cd dist && ^
rimraf .git && ^
git init && ^
git add . && ^
git commit -m "Deploy of GitHub Pages" && ^
git push --force "%GITHUB_REPO%" master:master