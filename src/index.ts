import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";

import {
  getUserAgentRegExp,
  getBrowsersList,
} from "browserslist-useragent-regexp";

const app = new Koa();
const router = new Router();

const query = { browsers: ["< 0.01%"] };
const regexp = getUserAgentRegExp(query);

const permittedBrowsers = getBrowsersList(query)
  .map(({ family, version }) => `- ${family} v${version.join(".")}`)
  .reduce((acc, v) => acc.add(v), new Set());

const list = [...permittedBrowsers].join("\n");

router.get("/", async (ctx, next) => {
  if (regexp.test(ctx.headers["user-agent"])) {
    ctx.body = "🥇🥈🏅 Welcome to the secret 1% club. 🥇🥈🏅";
  } else {
    ctx.body = `You don't belong here! Only one of the following browsers is allowed:\n\n${list}`;
  }
  await next();
});

app.use(logger());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("Koa started at http://localhost:3000");
});
