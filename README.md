# @n8n-dev/n8n-nodes-spotify

![spotify Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-spotify.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-spotify)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing spotify API integrations by hand.**

Every time you connect n8n to spotify, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to spotify took 5 minutes, not half a day?**

This node gives you **15+ resources** out of the box: **Albums**, **Tracks**, **Artists**, **Audiobooks**, **Chapters**, and 10 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-spotify
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-spotify`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **spotify API** → paste your API key
3. Drag the **spotify** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Albums | Get several albums, Get album, Get album tracks, Get artists albums, Get new releases, Delete remove users saved albums, Get users saved albums, Put save albums for current user, Get check users saved albums |
| Tracks | Get album tracks, Get artists top tracks, Get tracks audio analysis, Get tracks audio features, Get tracks audio features, Get users top items, Delete remove users saved tracks, Get users saved tracks, Put save tracks for current user, Get check users saved tracks, Delete remove playlist items, Get playlist items, Post add items to playlist, Put update playlist items, Get recommendations, Get several tracks, Get track |
| Artists | Get several artists, Get artist, Get artists albums, Get artists related artists, Get artists top tracks, Delete unfollow artists or users, Get followed artists, Put follow artists or users, Get check if user follows artists or users |
| Audiobooks | Get several audiobooks, Get an audiobook, Get audiobook chapters, Delete remove users saved audiobooks, Get users saved audiobooks, Put save audiobooks for current user, Get check users saved audiobooks |
| Chapters | Get audiobook chapters, Get several chapters, Get a chapter |
| Categories | Get several browse categories, Get single browse category, Get categorys playlists |
| Playlists | Get categorys playlists, Get featured playlists, Get current users playlists, Get playlist, Put change playlist details, Delete unfollow playlist, Put follow playlist, Get check if users follow playlist, Get playlist cover image, Put add custom playlist cover image, Delete remove playlist items, Get playlist items, Post add items to playlist, Put update playlist items, Get users playlists, Post create playlist |
| Episodes | Get several episodes, Get episode, Delete remove users saved episodes, Get users saved episodes, Put save episodes for current user, Get check users saved episodes, Get show episodes |
| Markets | Get available markets |
| Users | Get current users profile, Delete unfollow artists or users, Get followed artists, Put follow artists or users, Get check if user follows artists or users, Get users top items, Delete unfollow playlist, Put follow playlist, Get check if users follow playlist, Get users profile, Get users playlists |
| Library | Delete remove users saved albums, Get users saved albums, Put save albums for current user, Get check users saved albums, Delete remove users saved audiobooks, Get users saved audiobooks, Put save audiobooks for current user, Get check users saved audiobooks, Delete remove users saved episodes, Get users saved episodes, Put save episodes for current user, Get check users saved episodes, Delete unfollow artists or users, Get followed artists, Put follow artists or users, Get check if user follows artists or users, Get current users playlists, Delete remove users saved shows, Get users saved shows, Put save shows for current user, Get check users saved shows, Get users top items, Delete remove users saved tracks, Get users saved tracks, Put save tracks for current user, Get check users saved tracks, Put change playlist details, Post create playlist |
| Player | Get playback state, Put transfer playback, Get currently playing track, Get available devices, Post skip to next, Put pause playback, Put startresume playback, Post skip to previous, Get the users queue, Post add item to playback queue, Get recently played tracks, Put set repeat mode, Put seek to position, Put toggle playback shuffle, Put set playback volume |
| Shows | Delete remove users saved shows, Get users saved shows, Put save shows for current user, Get check users saved shows, Get several shows, Get show, Get show episodes |
| Genres | Get available genre seeds |
| Search | Get search for item |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from spotify docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official spotify OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **spotify** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the spotify API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
