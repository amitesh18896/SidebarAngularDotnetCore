command to upload project in github using gitbush

amite@DESKTOP-6SEBQ8S MINGW64 ~ (master)
$ cd "C:\Users\amite\source\repos\SidebarApi"

amite@DESKTOP-6SEBQ8S MINGW64 ~/source/repos/SidebarApi (master)
$ git init
Reinitialized existing Git repository in C:/Users/amite/source/repos/SidebarApi/.git/

amite@DESKTOP-6SEBQ8S MINGW64 ~/source/repos/SidebarApi (master)
$ git remote add origin https://github.com/amitesh18896/SidebarAngularDotnetCore.git
error: remote origin already exists.

amite@DESKTOP-6SEBQ8S MINGW64 ~/source/repos/SidebarApi (master)
$ git add .

amite@DESKTOP-6SEBQ8S MINGW64 ~/source/repos/SidebarApi (master)
$ git commit -m "Initial commit"
Author identity unknown

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'amite@DESKTOP-6SEBQ8S.(none)')

amite@DESKTOP-6SEBQ8S MINGW64 ~/source/repos/SidebarApi (master)
$
  git branch -M main

amite@DESKTOP-6SEBQ8S MINGW64 ~/source/repos/SidebarApi (main)
$ git push -u origin main
Enumerating objects: 236, done.
Counting objects: 100% (236/236), done.
Delta compression using up to 4 threads
Compressing objects: 100% (218/218), done.
Writing objects: 100% (236/236), 2.76 MiB | 23.00 KiB/s, done.
Total 236 (delta 34), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (34/34), done.
To https://github.com/amitesh18896/SidebarAngularDotnetCore.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.

amite@DESKTOP-6SEBQ8S MINGW64 ~/source/repos/SidebarApi (main)
$

![image](https://github.com/user-attachments/assets/5f6a1f0d-45a9-4d66-a257-361240443a0a)


