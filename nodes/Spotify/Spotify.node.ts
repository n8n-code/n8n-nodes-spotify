import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { albumsDescription } from './resources/albums';
import { tracksDescription } from './resources/tracks';
import { artistsDescription } from './resources/artists';
import { audiobooksDescription } from './resources/audiobooks';
import { chaptersDescription } from './resources/chapters';
import { categoriesDescription } from './resources/categories';
import { playlistsDescription } from './resources/playlists';
import { episodesDescription } from './resources/episodes';
import { marketsDescription } from './resources/markets';
import { usersDescription } from './resources/users';
import { libraryDescription } from './resources/library';
import { playerDescription } from './resources/player';
import { showsDescription } from './resources/shows';
import { genresDescription } from './resources/genres';
import { searchDescription } from './resources/search';

export class Spotify implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'spotify',
		name: 'N8nDevSpotify',
		icon: { light: 'file:./spotify.png', dark: 'file:./spotify.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'You can use Spotify\'s Web API to discover music and podcasts, manage your Spotify library, control audio playback, and much more. Browse our available Web API endpoints using the sidebar at left, o..',
		defaults: { name: 'spotify' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevSpotifyApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Albums",
					"value": "Albums",
					"description": ""
				},
				{
					"name": "Tracks",
					"value": "Tracks",
					"description": ""
				},
				{
					"name": "Artists",
					"value": "Artists",
					"description": ""
				},
				{
					"name": "Audiobooks",
					"value": "Audiobooks",
					"description": ""
				},
				{
					"name": "Chapters",
					"value": "Chapters",
					"description": ""
				},
				{
					"name": "Categories",
					"value": "Categories",
					"description": ""
				},
				{
					"name": "Playlists",
					"value": "Playlists",
					"description": ""
				},
				{
					"name": "Episodes",
					"value": "Episodes",
					"description": ""
				},
				{
					"name": "Markets",
					"value": "Markets",
					"description": ""
				},
				{
					"name": "Users",
					"value": "Users",
					"description": ""
				},
				{
					"name": "Library",
					"value": "Library",
					"description": ""
				},
				{
					"name": "Player",
					"value": "Player",
					"description": ""
				},
				{
					"name": "Shows",
					"value": "Shows",
					"description": ""
				},
				{
					"name": "Genres",
					"value": "Genres",
					"description": ""
				},
				{
					"name": "Search",
					"value": "Search",
					"description": ""
				}
			],
			"default": ""
		},
		...albumsDescription,
		...tracksDescription,
		...artistsDescription,
		...audiobooksDescription,
		...chaptersDescription,
		...categoriesDescription,
		...playlistsDescription,
		...episodesDescription,
		...marketsDescription,
		...usersDescription,
		...libraryDescription,
		...playerDescription,
		...showsDescription,
		...genresDescription,
		...searchDescription
		],
	};
}
