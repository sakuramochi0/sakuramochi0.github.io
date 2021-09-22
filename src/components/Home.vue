<script lang="ts">
import repos from '../assets/sakuramochi0-repos.json'

interface Repo {
  name: string
  html_url: string
  homepage: string
  description: string
}

export default {
  name: 'Home',
  data() {
    return {}
  },
  computed: {
    featuredRepos() {
      const repositoryList: string[] = [
        'twitter-archive-skrmch_prism',
        'prettyrhythm-prismstone-album',
        'prichan-stylesheet',
        'kinpri-rush-minigame-simulator',
        'sakuramochi0.github.io',
      ]

      return (repos as Repo[]).filter((repo) =>
        repositoryList.includes(repo.name)
      )
    },
  },
}
</script>

<template>
  <img alt="Rainbow emoji" src="/src/assets/rainbow.svg" width="100" />
  <h1>さくらもち<br />* sakuramochi *</h1>
  <p>
    🌟GitHub: <a href="https://github.com/sakuramochi0">@sakuramochi0 </a>
    <br />
    🌟Twitter (archive):
    <a
      href="https://storage.googleapis.com/twitter-archive-skrmch_prism/index.html#/tweets/tweets"
      >@skrmch_prism</a
    >
  </p>
  <div id="card-container">
    <div class="card" v-for="repo in featuredRepos">
      <div class="title">
        <span class="emoji">{{ repo.description.slice(0, 2) }}</span>
        {{ repo.name }}
      </div>
      <div class="description">
        <p>{{ repo.description.slice(2) }}</p>
      </div>
      <div class="buttons">
        <a class="button" :href="repo.html_url" target="_blank" rel="noopener">
          <img alt="GitHub icon" src="/src/assets/github.svg" />
          GitHub</a
        >
        <a class="button" :href="repo.homepage" target="_blank" rel="noopener">
          <img alt="GitHub icon" src="/src/assets/earth.svg" />
          Service</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --snow: rgba(255, 255, 255, 0.8);
}

#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5e5e5e;
  margin: 60px auto;
  max-width: 1200px;

  a {
    color: #a90036;
  }

  .button {
    background: lightpink;
    border: none;
    padding: 0.4rem 0.6rem;
    border-radius: 10px;
    color: white;
    text-decoration: none;

    &:hover {
      background: #ffd5db;
    }
  }

  .button + .button {
    margin-left: 5px;
  }
}

#card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin-top: 2rem;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    border-radius: 10px;
    background: var(--snow);

    .title {
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: bold;

      .emoji {
        margin-right: 12px;
        font-size: 36px;
      }
    }

    .description {
      align-items: start;
      flex-grow: 1;
    }

    .buttons {
      align-self: end;

      .button {
        display: inline-flex;
        align-items: center;

        img {
          width: 20px;
          margin-right: 0.25em;

          filter: invert(1);
        }
      }
    }
  }
}
#card-container {
}
</style>
