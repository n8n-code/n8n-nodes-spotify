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

<details>
<summary><b>Albums</b> (9 operations)</summary>

- Get Several Albums
- Get Album
- Get Album Tracks
- Get Artist s Albums
- Get New Releases
- Delete Remove Users Saved Albums
- Get User s Saved Albums
- Put Save Albums for Current User
- Get Check User s Saved Albums

</details>

<details>
<summary><b>Tracks</b> (17 operations)</summary>

- Get Album Tracks
- Get Artist s Top Tracks
- Get Track s Audio Analysis
- Get Tracks Audio Features
- Get Track s Audio Features
- Get User s Top Items
- Delete Remove User s Saved Tracks
- Get User s Saved Tracks
- Put Save Tracks for Current User
- Get Check User s Saved Tracks
- Delete Remove Playlist Items
- Get Playlist Items
- Post Add Items to Playlist
- Put Update Playlist Items
- Get Recommendations
- Get Several Tracks
- Get Track

</details>

<details>
<summary><b>Artists</b> (9 operations)</summary>

- Get Several Artists
- Get Artist
- Get Artist s Albums
- Get Artist s Related Artists
- Get Artist s Top Tracks
- Delete Unfollow Artists or Users
- Get Followed Artists
- Put Follow Artists or Users
- Get Check If User Follows Artists or Users

</details>

<details>
<summary><b>Audiobooks</b> (7 operations)</summary>

- Get Several Audiobooks
- Get an Audiobook
- Get Audiobook Chapters
- Delete Remove User s Saved Audiobooks
- Get User s Saved Audiobooks
- Put Save Audiobooks for Current User
- Get Check User s Saved Audiobooks

</details>

<details>
<summary><b>Chapters</b> (3 operations)</summary>

- Get Audiobook Chapters
- Get Several Chapters
- Get a Chapter

</details>

<details>
<summary><b>Categories</b> (3 operations)</summary>

- Get Several Browse Categories
- Get Single Browse Category
- Get Category s Playlists

</details>

<details>
<summary><b>Playlists</b> (16 operations)</summary>

- Get Category s Playlists
- Get Featured Playlists
- Get Current User s Playlists
- Get Playlist
- Put Change Playlist Details
- Delete Unfollow Playlist
- Put Follow Playlist
- Get Check if Users Follow Playlist
- Get Playlist Cover Image
- Put Add Custom Playlist Cover Image
- Delete Remove Playlist Items
- Get Playlist Items
- Post Add Items to Playlist
- Put Update Playlist Items
- Get User s Playlists
- Post Create Playlist

</details>

<details>
<summary><b>Episodes</b> (7 operations)</summary>

- Get Several Episodes
- Get Episode
- Delete Remove User s Saved Episodes
- Get User s Saved Episodes
- Put Save Episodes for Current User
- Get Check User s Saved Episodes
- Get Show Episodes

</details>

<details>
<summary><b>Markets</b> (1 operations)</summary>

- Get Available Markets

</details>

<details>
<summary><b>Users</b> (11 operations)</summary>

- Get Current User s Profile
- Delete Unfollow Artists or Users
- Get Followed Artists
- Put Follow Artists or Users
- Get Check If User Follows Artists or Users
- Get User s Top Items
- Delete Unfollow Playlist
- Put Follow Playlist
- Get Check if Users Follow Playlist
- Get User s Profile
- Get User s Playlists

</details>

<details>
<summary><b>Library</b> (28 operations)</summary>

- Delete Remove Users Saved Albums
- Get User s Saved Albums
- Put Save Albums for Current User
- Get Check User s Saved Albums
- Delete Remove User s Saved Audiobooks
- Get User s Saved Audiobooks
- Put Save Audiobooks for Current User
- Get Check User s Saved Audiobooks
- Delete Remove User s Saved Episodes
- Get User s Saved Episodes
- Put Save Episodes for Current User
- Get Check User s Saved Episodes
- Delete Unfollow Artists or Users
- Get Followed Artists
- Put Follow Artists or Users
- Get Check If User Follows Artists or Users
- Get Current User s Playlists
- Delete Remove User s Saved Shows
- Get User s Saved Shows
- Put Save Shows for Current User
- Get Check User s Saved Shows
- Get User s Top Items
- Delete Remove User s Saved Tracks
- Get User s Saved Tracks
- Put Save Tracks for Current User
- Get Check User s Saved Tracks
- Put Change Playlist Details
- Post Create Playlist

</details>

<details>
<summary><b>Player</b> (15 operations)</summary>

- Get Playback State
- Put Transfer Playback
- Get Currently Playing Track
- Get Available Devices
- Post Skip To Next
- Put Pause Playback
- Put Start Resume Playback
- Post Skip To Previous
- Get the User s Queue
- Post Add Item to Playback Queue
- Get Recently Played Tracks
- Put Set Repeat Mode
- Put Seek To Position
- Put Toggle Playback Shuffle
- Put Set Playback Volume

</details>

<details>
<summary><b>Shows</b> (7 operations)</summary>

- Delete Remove User s Saved Shows
- Get User s Saved Shows
- Put Save Shows for Current User
- Get Check User s Saved Shows
- Get Several Shows
- Get Show
- Get Show Episodes

</details>

<details>
<summary><b>Genres</b> (1 operations)</summary>

- Get Available Genre Seeds

</details>

<details>
<summary><b>Search</b> (1 operations)</summary>

- Get Search for Item

</details>

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
