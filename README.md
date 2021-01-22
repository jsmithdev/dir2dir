# dir2dir

Copy a directory to a renamed directory while renaming matching child files

## Purpose

I use to clone a web-component

For example if I run

`dir2dir /directory/originalComponent /directory/newComponent`

if originalComponent has the structure

/directory/originalComponent

- originalComponent.css
- originalComponent.html
- originalComponent.js

this will create

/directory/newComponent

- newComponent.css
- newComponent.html
- newComponent.js

Salesforce dev? It works well with LWC/s as well as

`dir2dir force-app/main/default/lwc/productManager force-app/main/default/lwc/itemManager`

## Install

`npm i -g dir2dir`

---

written while thinking of a 🐶 by [Jamie Smith](https://jsmith.dev)
