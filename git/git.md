# Git

## Initial Settings

- Username and email

```bash
$ git config --global user.name "Young"
$ git config --global user.email young@example.com
```

- Default editor

```bash
$ git config --global core.editor vim
```

- List all the settings

```bash
$ git config --list
```

## Basics

- `git clone` : Clone a repository into a new directory

```bash
$ git clone <repository> [<directory>]
```

- `git init` : Create an empty Git repository or reinitialize an existing one

```bash
$ git init
```

- `git add` : Add file contents to the <a href=https://git-scm.com/about/staging-area>index</a>

```bash
$ git add <filename>
```

- `git commit` : Record changes to the repository

```bash
$ git commit -m <message>
```

## Check

- `git status` : Show the working tree status

```bash
$ git status [-s or --short]
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   img/img1.png

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   git.md
        deleted:    src/img1.png
```

<center>
<img src ='./img/img1.png' />
</center>

- `git diff` : Show changes between commits, commit and working tree, etc

- `git log` : Show commit logs

```bash
$ git log
commit bc405e691a71395ddeb65052feafea60a4fa5897 (HEAD -> master, origin/master)
Author: Young <young@example.com>
Date:   Wed Oct 24 12:46:00 2018 +0900

    Add image file

commit 44554290c71b73e4e4c4f5f2356927a5c7b5aa66
Author: Young <young@example.com>
Date:   Wed Oct 24 11:32:03 2018 +0900

    Add git folder
```

## Reset

Undo changes you have made.

- `git reset` : Reset current HEAD to the specified state. Here are some <a href="https://stackoverflow.com/questions/24568936/what-is-difference-between-git-reset-hard-head1-and-git-reset-soft-head/24569160">options</a>.

  - soft

    When using `git reset --soft HEAD~1` you will remove the last commit from the current branch, but the file changes will stay in your working tree. Also the changes will stay on your index, so following with a `git commit` will create a commit with the exact same changes as the commit you "removed" before.

  - mixed

    This is the default mode and quite similar to soft. When "removing" a commit with `git reset HEAD~1` you will still keep the changes in your working tree but not on the index; so if you want to "redo" the commit, you will have to add the changes (`git add`) before commiting.

  - hard

    When using `git reset --hard HEAD~1` you will lose <b>all uncommited changes</b> in addition to the changes introduced in the last commit. The changes won't stay in your working tree so doing a `git status` command will tell you that you don't have any changes in your repository.

    Tread carefully with this one. If you accidentally remove uncommited changes which were never tracked by `git` (speak: committed or at least added to the index), you have no way of getting them back using `git`.

```bash
$ git reset --soft HEAD~1
$ git reset HEAD~1
$ git reset --hard HEAD~1
```

- `git revert` : Given one or more existing commits, revert the changes that the related patches introduce, and record some new commits that record them.

```bash
$ git revert HEAD~3
```

- `git checkout` : Updates files in the working tree to match the version in the index or the specified tree. If no pathspec was given, `git checkout` will also update HEAD to set the specified branch as the current branch.

```bash
$ git checkout -- modified_filename
```

## .gitignore file

A gitignore file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected;

## Reference

- <a href=https://git-scm.com> Git Official Website </a>
- <a href=https://try.github.io/>Resources to learn Git </a>

## Useful Websites

- <a href=https://learngitbranching.js.org/> Learn Git Branching </a>
- <a href=https://github.com/github/gitignore/> .gitignore examples </a>
