## 🔥 My Personal Website

I reccomend you to fork original repo instead of mine if you want to use this website. My version is old and i may have broke something :|

### 🔧 Getting Started

If you are interested in downloading the code, compiling it and running it, you need some tools!

First of all, all of the systems require [Node.js](https://nodejs.org/) to work, so you'll have to download it and install it on your device. This program comes with a package manager called `NPM` where you'll use to download all the dependencies of this project, including (but not limited to) Nuxt.js, Vue.js and Tailwind CSS.

If you aren't already using `yarn`, I recommend yarn because it is faster and runs better on most machines. You can install yarn globally to your system using `npm install yarn -g` command. Then you'll have access to `yarn` on your terminal (you might need to restart it).

- Download the source as a ZIP folder or clone it via `git` using the `git clone` command.
- Install dependencies with your preffered package manager.
  - With yarn: `yarn`
  - With NPM: `npm install`
- If you are going to use Firebase, you'll need to rename `.env.example` to `.env` and fill the config.
  - **P.S.** You don't need Firebase in this project except for the Daily page. If you are not going to create one for your own, or use Firebase for other purposes, you'll have to do this step. Otherwise you can just remove the file, delete the parts where it is imported and used, then you'll be ready to go.
- Now you can start the app using one of these commands.
  - For development:
    - With yarn: `yarn dev`
    - With NPM: `npm run dev`
  - To build and compile:
    - With yarn: `yarn generate` (or `yarn build`)
    - With NPM: `npm run generate` or (`npm run build`)

If you are wondering about **how to host it on free/paid static hosting services** like (Netlify, Vercel etc.), you can refer to [Nuxt.js docs](https://nuxtjs.org/docs/2.x/deployment/netlify-deployment). My project is hosted on [Netlify](https://netlify.com).

### 🙏 Thanks

[WindiCSS](https://github.com/windicss/windicss) - [Tailwind CSS](https://github.com/tailwindcss/tailwindcss)

This project wouldn't be possible if Nuxt.js team wouldn't have created such an amazing framework, and of course Vue.js is the king 👑. Thank you all contributors that made this projec even better! Tailwind CSS is a really good CSS utility framework that helped me a lot and I can't get myself out of it anymore! Last but not least, I'd like to thank to the module authors, they're all amazing and I appreciate your work!
