# An exclusive website for the rarest of browsers.

Only 1% of internet users can access this website!

To access it, you must be running one of [these browsers](https://browserl.ist/?q=%3C+0.01%25).

## The Pitch

Many websites restrict which browsers can use them. If you aren't using a popular or updated browser, the web as a whole conspires against you, forcing you to change your behaviour to participate in the hive mind.

**One Percent** only lets the most underdog of browsers in, so the most left out browsers have a place to call home where they can feel like they belong.

The potential is great for a niche, small community of technically-skilled people who are interested in actively using "antique" software.

## Challenges

- It's just a User Agent filter, so spoofing a User Agent gets you in. I consider that a high enough bar.

  An interesting exercise would be to write some JS to filter access from the clientside. The JS would need to be executable down to IE5.5.

- Security of server and users is paramount, as we are letting browsers that we outdated for a reason to hit the site.

- Aesthetics are limited by ancient CSS engines. Basic site should be minimal.

## Pivots

- JSFiddle with comments, users can mess around and compete for internet points in potentially wrecking old browsers.

  Knowing all the quirks of all the potential clients was a strong requirement for a webdev back in the day. Lots of people still have these latent memories and skills locked away. Let's set up a way to let them shine!

- A CTF/Puzzle challenge(s). Show the fresh green devs how painful development was back in the day, and how good they have it now.

## Running

``sh
npm install
tsc
node .
``
