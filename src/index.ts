import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";

import {getUserAgentRegExp} from "browserslist-useragent-regexp";

const app = new Koa();
const router = new Router();

const regexp = getUserAgentRegExp({browsers: ['< 0.01%']});

router.get("/", async (ctx, next) => {
  if (regexp.test(ctx.headers["user-agent"])) {
    ctx.body = "🥇🥈🏅 Welcome to the secret 1% club. 🥇🥈🏅";
  }else {
    ctx.body = "You don't belong here!";
  }
  await next();
});

app.use(logger());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {console.log("Koa started at http://localhost:3000")});
