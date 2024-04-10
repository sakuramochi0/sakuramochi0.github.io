<script lang="ts">
import repos from '../assets/sakuramochi0-repos.json'

interface Account {
  service: string
  name: string
  url: string
}

interface Repo {
  name: string
  html_url: string
  homepage: string
  description: string
}

export default {
  name: 'Home',
  computed: {
    featuredRepos(): Repo[] {
      const repositoryList: string[] = [
        'twitter-archive-skrmch_prism',
        'pristagram',
        'prettyrhythm-prismstone-album',
        'prichan-stylesheet',
        'kinpri-rush-minigame-simulator',
        'sakuramochi0.github.io',
      ]

      return repositoryList
        .map((repoName) =>
          (repos as Repo[]).find((repo) => repo.name === repoName)
        )
        .filter((repo): repo is Repo => !!repo)
    },
    accounts(): Account[] {
      return [
        {
          service: 'GitHub',
          name: '@sakuramochi0',
          url: 'https://github.com/sakuramochi0',
        },
        {
          service: 'Mastodon',
          name: '@sakuramochi0@mastodon.social',
          url: 'https://mastodon.social/@sakuramochi0',
        },
        {
          service: 'Twitter (archive)',
          name: '@skrmch_prism',
          url: 'https://storage.googleapis.com/twitter-archive-skrmch_prism/index.html#/tweets/tweets',
        },
      ]
    },
  },
}
</script>

<template>
  <img alt="Rainbow emoji" src="/src/assets/rainbow.svg" width="100" />
  <h1>さくらもち<br />* sakuramochi *</h1>
  <ul id="account-list">
    <strong>Profiles:</strong>
    <li v-for="account in accounts">
      🌟{{ account.service }}:
      <a rel="me" :href="account.url">{{ account.name }}</a>
    </li>
  </ul>
  <div id="card-container">
    <div class="card" v-for="repo in featuredRepos">
      <div class="title">
        <span class="emoji">{{ repo.description.slice(0, 2) }}</span>
        {{ repo.name }}
      </div>
      <p class="description">
        {{ repo.description.slice(2) }}
      </p>
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
    <div class="card">
      <div class="title">
        <span class="emoji">📕</span>
        『樹の下で』
      </div>
      <p class="description">ずっと昔に書いたマナりつ小説 💕💎</p>
      <div class="buttons">
        <a
          class="button"
          href="https://archive.is/N6c0q"
          target="_blank"
          rel="noopener"
        >
          <img alt="Earth icon" src="/src/assets/earth.svg" />
          Archive
        </a>
      </div>
    </div>
    <div class="card">
      <div class="title">
        <span class="emoji">❓</span>
        and more...
      </div>
      <p class="description"></p>
    </div>
  </div>
  <footer>
    <p>skrm.ch is using Google Analytics</p>
  </footer>
</template>

<style lang="scss">
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

  #account-list {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-inline: auto;
    row-gap: 0.5em;
    max-width: 24em;

    li {
      list-style-type: none;
    }
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

  .card:nth-child(6n + 1) {
    background: rgba(255, 91, 41, 0.2);
  }
  .card:nth-child(6n + 2) {
    background: rgba(255, 147, 32, 0.2);
  }
  .card:nth-child(6n + 3) {
    background: rgba(249, 218, 51, 0.2);
  }
  .card:nth-child(6n + 4) {
    background: rgba(155, 205, 70, 0.2);
  }
  .card:nth-child(6n + 5) {
    background: rgba(31, 194, 234, 0.2);
  }
  .card:nth-child(6n + 6) {
    background: rgba(135, 126, 250, 0.2);
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 4px 0 rgb(0 0 0 / 10%);

    .title {
      display: flex;
      align-items: center;
      font-size: 1.25rem;
      font-weight: bold;

      .emoji {
        margin-right: 0.5rem;
        font-size: 2rem;
      }
    }

    .description {
      align-items: start;
      flex-grow: 1;
      margin-block: 0.75rem;
    }

    .buttons {
      align-self: end;

      .button {
        display: inline-flex;
        align-items: center;
        padding: 0.4rem 0.6rem;
        border-radius: 0.5rem;
        text-decoration: none;
        color: dimgray;
        background: rgba(255, 255, 255, 0.5);

        &:hover {
          background: rgba(255, 255, 255, 0.75);
        }

        img {
          width: 1.25rem;
          margin-right: 0.25em;
        }
      }

      .button + .button {
        margin-left: 0.5rem;
      }
    }
  }
}

footer {
  margin-top: 2rem;
  color: gray;
}
</style>
