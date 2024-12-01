require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const data={
    "login": "Code-o-pathy",
    "id": 118040049,
    "node_id": "U_kgDOBwkl8Q",
    "avatar_url": "https://avatars.githubusercontent.com/u/118040049?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Code-o-pathy",
    "html_url": "https://github.com/Code-o-pathy",
    "followers_url": "https://api.github.com/users/Code-o-pathy/followers",
    "following_url": "https://api.github.com/users/Code-o-pathy/following{/other_user}",
    "gists_url": "https://api.github.com/users/Code-o-pathy/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Code-o-pathy/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Code-o-pathy/subscriptions",
    "organizations_url": "https://api.github.com/users/Code-o-pathy/orgs",
    "repos_url": "https://api.github.com/users/Code-o-pathy/repos",
    "events_url": "https://api.github.com/users/Code-o-pathy/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Code-o-pathy/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "therisingDev",
    "company": null,
    "blog": "",
    "location": "Mumbai",
    "email": null,
    "hireable": true,
    "bio": "Learning to learn something....",
    "twitter_username": null,
    "public_repos": 16,
    "public_gists": 0,
    "followers": 1,
    "following": 3,
    "created_at": "2022-11-12T06:00:06Z",
    "updated_at": "2024-12-01T01:32:52Z"
  }

app.get("/", (req, res) => {
  res.send("<h1>Please login at chai aur code home</h1>");
});

app.get("/twitter", (req, res) => {
  res.send("<h1>Please login at chai aur code</h1>");
});
app.get("/github", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
