<template>
  <div>
    <header class="flex flex-col-reverse py-24 md:(items-center flex-row)">
      <div class="md:w-8/12">
        <div class="space-y-px">
          <div
            class="
              font-semibold
              text-2xl text-gray-900
              md:text-3xl md:text-4xl
              dark:text-gray-100
            "
          >
            <h1>Full-stack <span class="text-blue-600">web developer</span></h1>
            <h1>and <span class="text-blue-600">Student</span></h1>
          </div>

          <p class="text-gray-800 dark:text-gray-200">
            Hi there! My name is Talha. I'm a high school student in Turkey. I
            am trying to improve my code and math skills. I want to study
            Computer Science at college.
          </p>
        </div>

        <Status class="mt-2" />
      </div>

      <div class="flex flex-shrink-0 mb-8 md:(justify-end mb-0 w-4/12)">
        <SmartImage
          src="/icon.png"
          class="
            rounded-full
            h-40
            ring-black ring-4 ring-opacity-5
            w-40
            dark:(ring-white
            ring-opacity-5)
          "
        />
      </div>
    </header>

    <section id="projects">
      <h2 class="font-semibold mt-10 text-2xl text-gray-900 dark:text-gray-100">
        My best projects
      </h2>

      <!-- <div class="mt-2 grid gap-2 md:(gap-4 grid-cols-3)">
        <div
          v-for="(project, index) in getProjects.featured"
          :key="`project-featured-${index}`"
        >
          <SmartLink
            v-if="project.to || project.href"
            :href="project.to || project.href"
            title="Click to visit this project"
            :blank="!!project.href"
          >
            <CardProject
              :title="project.title"
              :description="project.description"
              :image="project.image"
              class="h-full"
            />
          </SmartLink>

          <CardProject
            v-else
            :title="project.title"
            :description="project.description"
            :image="project.image"
            class="h-full"
          />
        </div>
      </div> 

      <div class="mt-2 grid gap-2 md:(mt-4 gap-4 grid-cols-2)">
        <SmartLink
          v-for="(project, index) in getProjects.rest"
          :key="`project-rest-${index}`"
          :href="project.to"
        >
          <CardProject
            :title="project.title"
            :description="project.description"
            class="h-full"
          />
        </SmartLink>
      </div> -->

      <div class="mt-2 grid gap-2 md:(mt-4 gap-4 grid-cols-2)">
        <SmartLink
          v-for="(project, index) in projects"
          :key="`project-rest-${index}`"
          :href="project.href"
          blank
        >
          <CardProject
            :title="project.title"
            :description="project.description"
            class="h-full"
          />
        </SmartLink>
      </div>
    </section>

    <section
      id="experiences"
      class="mt-4 grid gap-6 sm:mt-6 md:(md:mt-10 gap-8 grid-cols-2)"
    >
      <div>
        <h3 class="font-semibold text-xl text-gray-900 dark:text-gray-100">
          Experience
        </h3>

        <div class="mt-4 grid gap-2">
          <CardExperience
            v-for="(experience, index) in experiences.jobs"
            :key="`experience-job-${index}`"
            :title="experience.title"
            :url="experience.url"
            :date="experience.date"
            :position="experience.position"
          />
        </div>
      </div>

      <div>
        <h3 class="font-semibold text-xl text-gray-900 dark:text-gray-100">
          Education
        </h3>

        <div class="mt-4 grid gap-2">
          <CardExperience
            v-for="(experience, index) in experiences.education"
            :key="`experience-education-${index}`"
            :title="experience.title"
            :url="experience.url"
            :date="experience.date"
            :position="experience.position"
          />
        </div>
      </div>
    </section>

    <section id="technologies" class="mt-6">
      <h3
        class="
          font-semibold
          mt-4
          text-xl text-gray-900
          md:mt-10
          dark:text-gray-100
        "
      >
        Technologies I use
      </h3>

      <div class="mt-4">
        <img
          v-for="(skill, i) in skills"
          :key="i"
          class="my-2 mx-2 inline-block"
          :src="skill.img"
          :alt="skill.title"
        />
        <!-- <div
          v-for="(skill, i) in skills"
          :key="i"
          class="
            flex
            space-x-2
            text-gray-900
            items-center
            overflow-hidden
            dark:text-gray-100
          "
        >
          <img :src="skill.img" :alt="skill.title" />
        </div> -->
      </div>
    </section>

    <section id="repositories" class="mt-6">
      <h2 class="font-semibold mt-10 text-xl text-gray-900 dark:text-gray-100">
        My GitHub repositories
      </h2>

      <div class="mt-4">
        <div
          v-if="$fetchState.pending"
          class="grid gap-2 grid-cols-1 md:grid-cols-2"
        >
          <SkeletonLoader
            v-for="item in 7"
            :key="`repo-skeleton-${item}`"
            type="repository"
          />
        </div>

        <div
          v-else-if="$fetchState.error"
          class="text-gray-900 dark:text-gray-100"
        >
          Couldn't load GitHub repositories.
        </div>

        <div
          v-else-if="repos.length > 0"
          class="grid gap-2 grid-cols-1 md:grid-cols-2"
        >
          <SmartLink
            v-for="(repo, index) in repos"
            :key="`repo-${index}`"
            :href="repo.html_url"
            title="Click here to visit this repository"
            blank
          >
            <CardRepository
              :name="repo.name"
              :language="repo.language"
              :stars="repo.stargazers_count"
              :description="repo.description"
              class="h-full"
            />
          </SmartLink>
        </div>
      </div>
    </section>

    <section id="socials" class="mt-6">
      <h2 class="font-semibold mt-10 text-xl text-gray-900 dark:text-gray-100">
        Follow me
      </h2>

      <Socials class="mt-2" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

/* Interfaces */
import { Repository } from "../types/Response/GitHub"

interface Project {
  title: string
  description: string
  href?: string
  to?: string
  image?: string
}

interface Experience {
  title: string
  url: string
  position: string
  date: string
}

interface ExperienceObject {
  jobs: Experience[]
  education: Experience[]
}

export default Vue.extend({
  data() {
    return {
      repos: [] as Repository[],
      projects: [
        {
          title: "Mises Institue Turkey",
          description: "Mises Institue Turkey website",
          href: "https://mises.netlify.app/",
        },
        {
          title: "COVID-19 Case Follower",
          description:
            "Simple app to follow COVID-19 cases all over the world!",
          href: "https://github.com/talhabw/covid-19/",
        },
        {
          title: "Browser History to Telegram",
          description:
            "Simple extension for Chromium browsers that sends every link you opened to a spesific telegram channel.",
          href: "https://github.com/talhabw/browser-history-to-telegram",
        },
      ] as Project[],
      experiences: {
        jobs: [
          {
            title: "Mises Institue Turkey",
            url: "https://misesenstitüsü.com",
            position: "Translator",
            date: "2021-",
          },
        ],
        education: [
          {
            title: "Eskişehir Anadolu Lisesi",
            url: "https://eskisehiranadolulisesi.meb.k12.tr/",
            position: "High School",
            date: "2020 - current",
          },
          {
            title: "Şehit Ali Gaffar Okkan Ortaokulu",
            url: "https://gaffarokkanortaokulu.meb.k12.tr/",
            position: "Middle School",
            date: "2018 - 2020",
          },
        ],
      } as ExperienceObject,
      skills: [
        {
          title: "HTML5",
          img: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
        },
        {
          title: "CSS3",
          img: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
        },
        {
          title: "JavaScript",
          img: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
        },
        {
          title: "NodeJs",
          img: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white",
        },
        {
          title: "Yarn",
          img: "https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white",
        },
        {
          title: "ExpressJs",
          img: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
        },
        {
          title: "VueJs",
          img: "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue-dot-js&logoColor=4FC08D",
        },
        {
          title: "NuxtJs",
          img: "https://img.shields.io/badge/nuxt.js-00C58E?style=for-the-badge&logo=nuxt-dot-js&logoColor=white",
        },
        {
          title: "Go",
          img: "https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white",
        },
      ],
    }
  },
  fetchOnServer: false,
  async fetch() {
    const filter = ["talhabw", "talhabw.github.io"]

    const repos: Repository[] = (
      await this.$axios.get(
        "https://api.github.com/users/talhabw/repos?per_page=100"
      )
    ).data

    this.repos = repos
      ?.filter((repo) => repo.fork === false && !filter.includes(repo.name))
      ?.sort((a, b) => b?.stargazers_count - a?.stargazers_count)
  },
  head: {
    title: "Home",
  },
  computed: {
    /**
     * Slices the first three projects and creates an object with them, and the rest.
     * @returns {{featured: Project[], rest: Project[]}} The projects object.
     */
    /* getProjects(): { featured: Project[]; rest: Project[] } {
      const projects = this.projects

      return {
        featured: projects?.slice(0, 3) || [],
        rest: projects?.slice(3) || [],
      }
    }, */
  },
})
</script>

<style lang="scss" scoped>
.description-link {
  @apply border-gray-500 border-b-2 border-opacity-50 hover:border-opacity-75;
}
</style>
