export const GITHUB_URLS = [
  "alive.github.com",
  "api.github.com",
  "assets-cdn.github.com",
  "avatars.githubusercontent.com",
  "avatars0.githubusercontent.com",
  "avatars1.githubusercontent.com",
  "avatars2.githubusercontent.com",
  "avatars3.githubusercontent.com",
  "avatars4.githubusercontent.com",
  "avatars5.githubusercontent.com",
  "camo.githubusercontent.com",
  "central.github.com",
  "cloud.githubusercontent.com",
  "codeload.github.com",
  "collector.github.com",
  "copilot-proxy.githubusercontent.com",
  "desktop.githubusercontent.com",
  "education.github.com",
  "favicons.githubusercontent.com",
  "gist.github.com",
  "github-cloud.s3.amazonaws.com",
  "github-com.s3.amazonaws.com",
  "github-production-release-asset-2e65be.s3.amazonaws.com",
  "github-production-repository-file-5c1aeb.s3.amazonaws.com",
  "github-production-user-asset-6210df.s3.amazonaws.com",
  "github.blog",
  "github.com",
  "github.community",
  "github.githubassets.com",
  "github.global.ssl.fastly.net",
  "github.io",
  "github.map.fastly.net",
  "githubcopilot.com",
  "githubstatus.com",
  "live.github.com",
  "media.githubusercontent.com",
  "objects.githubusercontent.com",
  "origin-tracker.githubusercontent.com",
  "pipelines.actions.githubusercontent.com",
  "raw.githubusercontent.com",
  "user-images.githubusercontent.com",
  "vscode.dev",
  "private-user-images.githubusercontent.com",
  "api.themoviedb.org",
  "image.tmdb.org",
  "tmdb.org",
  "www.themoviedb.org",
  "opensubtitles.org",
  "www.opensubtitles.org",
  "hub.docker.com",
  "registry.hub.docker.com",
  "index.docker.io",
  "k8s.gcr.io",
  "gcr.io",
  "ghcr.io",
  "quay.io",
  "huggingface.co",
  "www.huggingface.co",
  "cdn-lfs.huggingface.co",
]

export const HOSTS_TEMPLATE = `# github hosts
# 加速 GitHub 访问

{content}

# 数据更新时间：{updateTime}
`

export const GITHUB_API_BASE = "https://api.github.com"

export const HOSTS_PATH = "hosts"

export const DNS_PROVIDERS = [
  {
    url: (domain: string) => `https://101.102.103.104/dns-query?name=${domain}&type=A`,
    headers: { Accept: "application/dns-json" },
    name: "TWQuad101 DNS",
  },
  {
    url: (domain: string) => `https://dns.alidns.com/resolve?name=${domain}&type=1`,
    headers: { Accept: "application/dns-json" },
    name: "alidns",
  },   

]
 /*{
   url: (domain: string) => `https://1.1.1.1/dns-query?name=${domain}&type=A`,
    headers: { Accept: "application/dns-json" },
    name: "Cloudflare DNS",
  },
  {
    url: (domain: string) => `https://dns.google/resolve?name=${domain}&type=A`,
    headers: { Accept: "application/dns-json" },
    name: "Google DNS",
  },*/
