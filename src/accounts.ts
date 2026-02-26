type Account = {
  service: string
  name: string
  url: string
  note?: string
}

export const accounts: Account[] = [
  {
    service: 'Bluesky',
    name: '@skrm.ch',
    url: 'https://bsky.app/profile/skrm.ch',
    note: '2026年Mastodonからクロスポスト',
  },
  {
    service: 'Mastodon',
    name: '@skrm.ch@bsky.brid.gy',
    url: 'https://elk.zone/mastodon.social/@skrm.ch@bsky.brid.gy',
    note: 'Blueskyのブリッジアカウント（MastodonクライアントからフォローなどができるBlueskyのクローンアカウント）',
  },
  {
    service: 'Mastodon',
    name: '@sakuramochi0@mastodon.social',
    url: 'https://main.elk.zone/mastodon.social/@sakuramochi0',
    note: '2025年まで使っていたメインアカウント。Blueskyアカウントにも自分でクロスポストしてた。現在はBlueskyアカウントがメイン。',
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
