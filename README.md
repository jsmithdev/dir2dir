# dir2dir

Copy a directory to a renamed directory while renaming matching child files (via cli)

## Install

`npm i -g dir2dir`

## Usage

`dir2dir path/to/originalComponent path/to/newComponent`

works well with Salesforce LWCs as well:

`dir2dir force-app/main/default/lwc/myLwc force-app/main/default/lwc/myCopiedLwc`

## Purpose

I use to clone a web-component

For example, if originalComponent has the path and contents:

directory/originalComponent

- originalComponent.css
- originalComponent.html
- originalComponent.js

then 

`dir2dir directory/originalComponent directory/newComponent`

would create:

directory/newComponent

- newComponent.css
- newComponent.html
- newComponent.js

---

written while thinking of a 🐶 by [Jamie Smith](https://jsmith.dev)
