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
| Albums | GET Get Several Albums
, GET Get Album
, GET Get Album Tracks
, GET Get Artist's Albums
, GET Get New Releases
, DELETE Remove Users' Saved Albums
, GET Get User's Saved Albums
, PUT Save Albums for Current User
, GET Check User's Saved Albums
 |
| Tracks | GET Get Album Tracks
, GET Get Artist's Top Tracks
, GET Get Track's Audio Analysis
, GET Get Tracks' Audio Features
, GET Get Track's Audio Features
, GET Get User's Top Items
, DELETE Remove User's Saved Tracks
, GET Get User's Saved Tracks
, PUT Save Tracks for Current User
, GET Check User's Saved Tracks
, DELETE Remove Playlist Items
, GET Get Playlist Items
, POST Add Items to Playlist
, PUT Update Playlist Items
, GET Get Recommendations
, GET Get Several Tracks
, GET Get Track
 |
| Artists | GET Get Several Artists
, GET Get Artist
, GET Get Artist's Albums
, GET Get Artist's Related Artists
, GET Get Artist's Top Tracks
, DELETE Unfollow Artists or Users
, GET Get Followed Artists
, PUT Follow Artists or Users
, GET Check If User Follows Artists or Users
 |
| Audiobooks | GET Get Several Audiobooks
, GET Get an Audiobook
, GET Get Audiobook Chapters
, DELETE Remove User's Saved Audiobooks
, GET Get User's Saved Audiobooks
, PUT Save Audiobooks for Current User
, GET Check User's Saved Audiobooks
 |
| Chapters | GET Get Audiobook Chapters
, GET Get Several Chapters
, GET Get a Chapter
 |
| Categories | GET Get Several Browse Categories
, GET Get Single Browse Category
, GET Get Category's Playlists
 |
| Playlists | GET Get Category's Playlists
, GET Get Featured Playlists
, GET Get Current User's Playlists
, GET Get Playlist
, PUT Change Playlist Details
, DELETE Unfollow Playlist
, PUT Follow Playlist
, GET Check if Users Follow Playlist
, GET Get Playlist Cover Image
, PUT Add Custom Playlist Cover Image
, DELETE Remove Playlist Items
, GET Get Playlist Items
, POST Add Items to Playlist
, PUT Update Playlist Items
, GET Get User's Playlists
, POST Create Playlist
 |
| Episodes | GET Get Several Episodes
, GET Get Episode
, DELETE Remove User's Saved Episodes
, GET Get User's Saved Episodes
, PUT Save Episodes for Current User
, GET Check User's Saved Episodes
, GET Get Show Episodes
 |
| Markets | GET Get Available Markets
 |
| Users | GET Get Current User's Profile
, DELETE Unfollow Artists or Users
, GET Get Followed Artists
, PUT Follow Artists or Users
, GET Check If User Follows Artists or Users
, GET Get User's Top Items
, DELETE Unfollow Playlist
, PUT Follow Playlist
, GET Check if Users Follow Playlist
, GET Get User's Profile
, GET Get User's Playlists
 |
| Library | DELETE Remove Users' Saved Albums
, GET Get User's Saved Albums
, PUT Save Albums for Current User
, GET Check User's Saved Albums
, DELETE Remove User's Saved Audiobooks
, GET Get User's Saved Audiobooks
, PUT Save Audiobooks for Current User
, GET Check User's Saved Audiobooks
, DELETE Remove User's Saved Episodes
, GET Get User's Saved Episodes
, PUT Save Episodes for Current User
, GET Check User's Saved Episodes
, DELETE Unfollow Artists or Users
, GET Get Followed Artists
, PUT Follow Artists or Users
, GET Check If User Follows Artists or Users
, GET Get Current User's Playlists
, DELETE Remove User's Saved Shows
, GET Get User's Saved Shows
, PUT Save Shows for Current User
, GET Check User's Saved Shows
, GET Get User's Top Items
, DELETE Remove User's Saved Tracks
, GET Get User's Saved Tracks
, PUT Save Tracks for Current User
, GET Check User's Saved Tracks
, PUT Change Playlist Details
, POST Create Playlist
 |
| Player | GET Get Playback State
, PUT Transfer Playback
, GET Get Currently Playing Track
, GET Get Available Devices
, POST Skip To Next
, PUT Pause Playback
, PUT Start/Resume Playback
, POST Skip To Previous
, GET Get the User's Queue
, POST Add Item to Playback Queue
, GET Get Recently Played Tracks
, PUT Set Repeat Mode
, PUT Seek To Position
, PUT Toggle Playback Shuffle
, PUT Set Playback Volume
 |
| Shows | DELETE Remove User's Saved Shows
, GET Get User's Saved Shows
, PUT Save Shows for Current User
, GET Check User's Saved Shows
, GET Get Several Shows
, GET Get Show
, GET Get Show Episodes
 |
| Genres | GET Get Available Genre Seeds
 |
| Search | GET Search for Item
 |

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
