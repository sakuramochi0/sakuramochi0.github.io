import repos from './assets/sakuramochi0-repos.json'

type Repo = {
  name: string
  html_url: string
  homepage: string
  description: string
}

const repositoryList: string[] = [
  'garden',
  'twitter-archive-skrmch_prism',
  'pristagram',
  'prettyrhythm-prismstone-album',
  'prichan-stylesheet',
  'kinpri-rush-minigame-simulator',
  'sakuramochi0.github.io',
]

export const featuredRepos: Repo[] = repositoryList
  .map((repoName) => (repos as Repo[]).find((repo) => repo.name === repoName))
  .filter((repo): repo is Repo => !!repo)
