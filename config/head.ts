import { NuxtOptionsHead } from "@nuxt/types/config/head"

/* Define constants */
const image = "https://karasu.xyz/icon.png"
const description =
  "Young Web Developer from Turkey. Interested in programming, robotics and math. Trying to improv his skills!"

const Head: NuxtOptionsHead = {
  title: "Talha Karasu",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: description,
    },
    /* Twitter */
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary",
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "@talhabw",
    },
    {
      hid: "twitter:creator",
      name: "twitter:creator",
      content: "@talhabw",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "karasu.xyz",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: image,
    },
    /* Open-Graph */
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "karasu.xyz",
    },
    {
      hid: "og:description",
      name: "og:description",
      content: description,
    },
    {
      hid: "og:image",
      name: "og:image",
      content: image,
    },
    /* Others */
    {
      hid: "theme-color",
      name: "theme-color",
      content: "#111827",
    },
  ].map((i) => {
    // @ts-ignore-next-line
    if (i.name && !i.property) i.property = i.name
    return i
  }),
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "https://karasu.xyz/assets/icons/icon.ico",
    },
  ],
}

export default Head
