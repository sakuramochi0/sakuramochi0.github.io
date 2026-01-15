type Account = {
  service: string
  name: string
  url: string
  note?: string
}

export const accounts: Account[] = [
  {
    service: 'Mastodon',
    name: '@sakuramochi0@mastodon.social',
    url: 'https://main.elk.zone/mastodon.social/@sakuramochi0',
  },
  {
    service: 'Bluesky',
    name: '@skrm.ch',
    url: 'https://bsky.app/profile/skrm.ch',
    note: 'Mastodonからクロスポスト',
  },
  {
    service: 'GitHub',
    name: '@sakuramochi0',
    url: 'https://github.com/sakuramochi0',
  },
  {
    service: 'Email',
    name: 'me@skrm.ch',
    url: 'mailto:me@skrm.ch',
  },
]
