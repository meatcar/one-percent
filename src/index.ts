import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";
import { buildUARegex } from "./filter";

const port = process.env.PORT || 3000;

const app = new Koa();
const router = new Router();

/*
 * We clamp each browser to 0.01% market share, so collectively they add up to 1%-ish world-wide share.
 */
const [regexp, browsers] = buildUARegex("< 0.01%");
const prettyList = browsers.map((s) => `- ${s}`).join("\n");

router.get("/", async (ctx, next) => {
  const ua = ctx.headers["user-agent"] || "";
  if (regexp.test(ua)) {
    ctx.body = "🥇🥈🏅 Welcome to the secret 1% club. 🥇🥈🏅";
  } else {
    ctx.body = `You don't belong here! Only one of the following browsers is allowed:\n\n${prettyList}`;
  }
  await next();
});

app.use(logger());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Koa started at http://localhost:${port}`);
});
