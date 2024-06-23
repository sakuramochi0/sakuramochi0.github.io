type Account = {
  service: string
  name: string
  url: string
}

export const accounts: Account[] = [
  {
    service: 'GitHub',
    name: '@sakuramochi0',
    url: 'https://github.com/sakuramochi0',
  },
  {
    service: 'Mastodon',
    name: '@sakuramochi0@mastodon.social',
    url: 'https://main.elk.zone/mastodon.social/@sakuramochi0',
  },
  {
    service: 'Twitter (archive)',
    name: '@skrmch_prism',
    url: 'https://storage.googleapis.com/twitter-archive-skrmch_prism/index.html#/tweets/tweets',
  },
  {
    service: 'Email',
    name: 'sakuramochi.mochi.0@gmail.com',
    url: 'mailto:sakuramochi.mochi.0@gmail.com',
  },
]
