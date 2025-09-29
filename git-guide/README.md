Git Usage Guide

Git Add

The git add command stages changes (new files, modifications, or deletions) in your working directory to be committed.

Basic Usage:





Stage a specific file: git add filename.txt



Stage all changes: git add .

Useful Flags:





-A or --all: Stages all changes, including new files, modifications, and deletions (equivalent to git add . but more explicit).



-u or --update: Stages only modified and deleted files, ignoring new untracked files (useful for quick updates without adding extras).



-p or --patch: Interactively stages hunks of changes within files (great for reviewing and selectively staging parts of a file).

Example: git add -p lets you choose which changes to stage interactively.

Git Push

The git push command uploads local commits to a remote repository (e.g., GitHub).

Basic Usage:





Push to the default branch: git push



Push to a specific remote and branch: git push origin main

Useful Flags:





-u or --set-upstream: Sets the upstream tracking branch (e.g., git push -u origin main links your local main to remote main for future pushes/pulls).



-f or --force: Overwrites the remote branch with your local one (use cautiously; safer alternative is --force-with-lease to check for conflicts).



--tags: Pushes all local tags to the remote (useful for versioning releases).

Example: git push -u origin feature-branch to push and set tracking.

Git Pull

The git pull command fetches and merges changes from a remote repository into your local branch.

Basic Usage:





Pull from the default remote/branch: git pull



Pull from a specific remote and branch: git pull origin main

Useful Flags:





--rebase: Rebases your local commits on top of the fetched changes instead of merging (keeps history linear; use git pull --rebase for cleaner timelines).



--ff-only or --fast-forward-only: Only allows the pull if it can fast-forward (no merge commit needed; aborts if there are conflicts or divergent changes).



--no-ff: Forces a merge commit even if fast-forward is possible (useful for preserving merge history).

Example: git pull --rebase origin main to rebase your work on the latest remote changes.

Changing the Origin URL

The "origin" is the default remote repository alias. Use git remote commands to manage it.

Basic Usage:





View current remotes: git remote -v



Change origin URL: git remote set-url origin https://new-url.com/repo.git

Useful Flags/Related Commands:





git remote add origin new-url: Adds a new remote if none exists (not for changing; use set-url for updates).



git remote rename old-name new-name: Renames a remote (e.g., from "origin" to "upstream").



git remote remove origin: Deletes the remote (useful before re-adding with a new URL).

Example: To switch from HTTPS to SSH: git remote set-url origin git@github.com:user/repo.git

Git Stash

The git stash command temporarily saves your working directory changes (staged or unstaged) without committing, allowing you to switch branches or pull cleanly.

Basic Usage:





Stash changes: git stash



Apply the latest stash: git stash apply

Useful Flags/Subcommands:





pop: Applies the stash and removes it from the stash list (e.g., git stash pop).



list: Lists all stashes (e.g., git stash list shows stash@{0}, stash@{1}, etc.).



drop: Removes a specific stash (e.g., git stash drop stash@{1}).



--include-untracked or -u: Stashes untracked files too (useful for new files).

Example: git stash -u to stash everything, then git stash pop to restore.

Git Revert

The git revert command creates a new commit that undoes the changes from a previous commit, preserving history.

Basic Usage:





Revert a commit: git revert COMMIT_HASH

Useful Flags:





--no-commit or -n: Applies the revert changes but doesn't commit them automatically (allows editing before committing).



-m or --mainline: For reverting merge commits, specifies which parent to revert against (e.g., git revert -m 1 MERGE_HASH).



--edit or -e: Opens the commit message editor (default behavior, but explicit for customization).

Example: git revert HEAD to undo the last commit.

Git Reset

The git reset command moves the current branch pointer to a specified commit, potentially altering the index and working directory.

Basic Usage:





Reset to a commit: git reset COMMIT_HASH

Useful Flags:





--soft: Moves the branch pointer but keeps changes staged (safe for reorganizing commits).



--mixed: Moves the pointer, unstages changes, but keeps them in the working directory (default).



--hard: Moves the pointer and discards all changes (dangerous; use for complete resets, e.g., git reset --hard HEAD~1 to discard the last commit).

Example: git reset --soft HEAD~2 to squash the last two commits into one.

Git Log

The git log command displays commit history.

Basic Usage:





View log: git log

Useful Flags:





--oneline: Shows each commit on a single line with abbreviated hash and message (compact view).



--graph: Displays a text-based graph of branch/merge history (visualizes branches).



--author=NAME: Filters by author (e.g., git log --author=John).



--since=DATE or --until=DATE: Filters by date (e.g., git log --since="1 week ago").

Example: git log --oneline --graph for a quick, visual history.

Git Diff

The git diff command shows differences between commits, branches, or the working directory.

Basic Usage:





Diff unstaged changes: git diff



Diff staged changes: git diff --cached

Useful Flags:





--cached or --staged: Shows differences in the index (staged but not committed).



--word-diff: Highlights changes at the word level instead of lines (easier to read).



COMMIT1 COMMIT2: Compares two commits (e.g., git diff main feature-branch).

Example: git diff HEAD~1 HEAD to see changes in the last commit.

Git Show

The git show command displays details about a commit, tag, or object.

Basic Usage:





Show a commit: git show COMMIT_HASH

Useful Flags:





--name-only: Lists only the files changed in the commit (quick overview).



--pretty=format:FORMAT: Customizes output (e.g., git show --pretty=format:"%H %an %s" for hash, author, subject).



BRANCH or TAG: Shows the tip commit of a branch or tag (e.g., git show main).

Example: git show HEAD --name-only to list files from the last commit.
