# Windmill Dashboard on Nuxt3 + Vue3

This project is not really a fork but a remake on Nuxt3 + Vue3 of this open source project : [Windmill Dashboard by estevanmaito](https://github.com/estevanmaito/windmill-dashboard)

At the very start, I just needed a fully ready free Tailwind dashboard template for another project of mine, but thought to myself that I needed anyway to rework everything into components so I first remade the whole project on Nuxt3, splitting everything into Vue3 components and Nuxt3 pages, put in the necessary logic and middleware to make everything work just like on the [original one](https://windmill-dashboard.vercel.app/) and decided to share it with whoever would need a Nuxt3 + Tailwind ready to use dashboard.

No auth system is implemented, no data is dynamic, it's all static : either hardcoded or in .js files in `src/utils/` for complex data (charts, table, SVG mapping). It's just a plain boilerplate to pick components from ! The business logic of your future app is your part.

🚀 See it live right [here](https://windmill-dashboard-nuxt3.vercel.app/)

## 📦 Used packages / dependencies

- [Nuxt3](https://nuxt.com/) with [Vue3](https://vuejs.org/) of course
- [Nuxt TypeScript](https://typescript.nuxtjs.org/)
- Tailwind CSS via [Nuxt/Tailwind](https://tailwindcss.nuxt.dev/) package
- [Pinia](https://pinia.vuejs.org/ssr/nuxt.html)
- Chart.js via [vue-chartjs](https://vue-chartjs.org/) package
- [click-outside-vue3](https://www.npmjs.com/package/click-outside-vue3)
- [just-kebab-case](https://www.npmjs.com/package/just-kebab-case)

## 🧲 Prerequisite

- The latest stable version of [Node](https://nodejs.org/en/download/) v18.12.1 to this date
- Your favourite package manager wether it's [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- Some basic knowledge of Vue3, Nuxt3 and state management with Pinia (you really not need be an experienced Vue3 developer, I wasn't when I did this project)

## 📥 Installing and running

- Clone or Fork this repository or download the latest release then open the directory
- `npm install`
- `nuxt dev` to start (you might need to run `npx nuxt dev` if the `nuxt` script is not recognized by your environment)
- [http://localhost:3000](http://localhost:3000) is the default host and port but be mindfull of what the command says, it might not be the same port depending on which ports are used on your envionrment
- When you launch the app in your browser, you land on the login page. As there is no auth system implementend, you just need to click on "Log in" to access the dashboard.

## 🤝 Contributing

Should you want to contribute to this project or if you have any suggestions to improve and optimize anything in this project, please feel free to Fork it and submit a PR or open an issue ! :)

## 👨‍💻 Authors

- [**Samyr Rakoto**](https://github.com/samyrrakoto) - *Made all the vanilla HTML/JS transformations to Nuxt3*

## 🫶 Thanks

- To [**Estevan Maito**](https://github.com/estevanmaito) for this awesome Tailwind dashboard
- To [**Clément Gauthier**](https://github.com/klaymant) for his expertise in TS, and for challenging my commits to get the best of TypeScript and Nuxt3 / Vue3
