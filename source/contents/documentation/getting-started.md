---
title: Quick Start
template: documentation.jade
---

Quick Start
===========

Since UNTV aims to provide support for as many codecs as possible, it uses a custom build of [Node-Webkit](https://github.com/rogerwang/node-webkit) which I have compiled for linux64, darwin32, and win32. You may, however, use the upstream builds of Node-Webkit, but you will sacrifice playback support for just about everything except for `.ogg` and `.webm`. 

Clone the repository:

```
git clone https://github.com/gordonwritescode/untv.git
```

Install dependencies using Node Package Manager:

```
cd untv && sudo npm install
```

Make sure you have CoffeeScript installed globally (we use `cake` for tasks):

```
sudo npm install coffee-script -g
```

Run `cake setup` from the project root to download your platform's custom build of node-webkit and unpack it to the `bin/` directory.

> Alternatively download the custom build of node-webkit here: 
> https://file.ac/s4Lt3Vo6rls/
> Then, unzip and place contents in the `bin/nw-0.8.4-custom` directory.

Run `cake start` from the project root to launch UNTV.

Run `cake build` from the project root to bundle a distributable release for your platform.
