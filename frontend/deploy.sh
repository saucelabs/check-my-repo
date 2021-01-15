#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

if [ -n "$GITHUB_TOKEN" ]
then
  echo -e "\033[0;32mDeploying site via GitHub Actions...\033[0m"
  touch ~/.git-credentials
  chmod 0600 ~/.git-credentials
  echo $GITHUB_TOKEN > ~/.git-credentials
  git config credential.helper store
  git config user.email "oss-sauce-bot@users.noreply.github.com"
  git config user.name "OSS Sauce Bot"
fi

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:saucelabs/check-my-repo.git master:gh-pages
cd -
