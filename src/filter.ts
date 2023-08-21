import {
  getUserAgentRegExp,
  getBrowsersList,
} from "browserslist-useragent-regexp";

export function buildUARegex(constraint: string): [RegExp, string[]] {
  const query = { browsers: [constraint] };

  const browsers = getBrowsersList(query);
  const set: Set<string> = new Set();
  for (let { family, version } of browsers) {
    set.add(`${family} v${version.join(".")}`);
  }

  return [getUserAgentRegExp(query), Array.from(set)];
}
