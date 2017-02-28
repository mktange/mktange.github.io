ECHO OFF

FOR /F "tokens=* USEBACKQ" %%F ^
IN (`node -e "process.stdout.write(require('./package.json').repository)"`) ^
DO SET GIT_DEPLOY_REPO=%%F

IF NOT EXIST dist (
  ECHO Build is necessary before deploying
  EXIT /B 1
)

CD dist
IF EXIST .git (RMDIR .git /s /q)

git init && ^
git add . && ^
git commit -m "Deploy of GitHub Pages" && ^
git push --force "%GIT_DEPLOY_REPO%" master