export GIT_AUTHOR_DATE="2023-$(date +%m-%d\ %H:%M:%S)"
export GIT_COMMITTER_DATE="2023-$(date +%m-%d\ %H:%M:%S)"

git init
echo "Initial commit" > README.md
git add README.md
git add index.js
git commit -m "Initial commit"

unset GIT_AUTHOR_DATE
unset GIT_COMMITTER_DATE
