const npm_url = function (name, version, path) {
  return `https://cdn.jsdelivr.net/npm/${name}@${version}/${path}`;
}

const gh_url = function (owner, repo, version, path) {
  return `https://cdn.jsdelivr.net/gh/${owner}/${repo}@${version}/${path}`;
}

module.exports = {
  npm_url,
  gh_url,
}
