import type { INodeProperties } from 'n8n-workflow';

export const playerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					]
				}
			},
			"options": [
				{
					"name": "Get Information About The Users Current Playback",
					"value": "Get Information About The Users Current Playback",
					"action": "Get Playback State\n",
					"description": "Get information about the user’s current playback state, including track or episode, progress, and active device.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/player"
						}
					}
				},
				{
					"name": "Transfer A Users Playback",
					"value": "Transfer A Users Playback",
					"action": "Transfer Playback\n",
					"description": "Transfer playback to a new device and determine if it should start playing.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/player"
						}
					}
				},
				{
					"name": "Get The Users Currently Playing Track",
					"value": "Get The Users Currently Playing Track",
					"action": "Get Currently Playing Track\n",
					"description": "Get the object currently being played on the user's Spotify account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/player/currently-playing"
						}
					}
				},
				{
					"name": "Get A Users Available Devices",
					"value": "Get A Users Available Devices",
					"action": "Get Available Devices\n",
					"description": "Get information about a user’s available devices.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/player/devices"
						}
					}
				},
				{
					"name": "Skip Users Playback To Next Track",
					"value": "Skip Users Playback To Next Track",
					"action": "Skip To Next\n",
					"description": "Skips to next track in the user’s queue.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/player/next"
						}
					}
				},
				{
					"name": "Pause A Users Playback",
					"value": "Pause A Users Playback",
					"action": "Pause Playback\n",
					"description": "Pause playback on the user's account.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/player/pause"
						}
					}
				},
				{
					"name": "Start A Users Playback",
					"value": "Start A Users Playback",
					"action": "Start/Resume Playback\n",
					"description": "Start a new context or resume current playback on the user's active device.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/player/play"
						}
					}
				},
				{
					"name": "Skip Users Playback To Previous Track",
					"value": "Skip Users Playback To Previous Track",
					"action": "Skip To Previous\n",
					"description": "Skips to previous track in the user’s queue.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/player/previous"
						}
					}
				},
				{
					"name": "Get Queue",
					"value": "Get Queue",
					"action": "Get the User's Queue\n",
					"description": "Get the list of objects that make up the user's queue.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/player/queue"
						}
					}
				},
				{
					"name": "Add To Queue",
					"value": "Add To Queue",
					"action": "Add Item to Playback Queue\n",
					"description": "Add an item to the end of the user's current playback queue.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/player/queue"
						}
					}
				},
				{
					"name": "Get Recently Played",
					"value": "Get Recently Played",
					"action": "Get Recently Played Tracks\n",
					"description": "Get tracks from the current user's recently played tracks.\n_**Note**: Currently doesn't support podcast episodes._\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/player/recently-played"
						}
					}
				},
				{
					"name": "Set Repeat Mode On Users Playback",
					"value": "Set Repeat Mode On Users Playback",
					"action": "Set Repeat Mode\n",
					"description": "Set the repeat mode for the user's playback. Options are repeat-track,\nrepeat-context, and off.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/player/repeat"
						}
					}
				},
				{
					"name": "Seek To Position In Currently Playing Track",
					"value": "Seek To Position In Currently Playing Track",
					"action": "Seek To Position\n",
					"description": "Seeks to the given position in the user’s currently playing track.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/player/seek"
						}
					}
				},
				{
					"name": "Toggle Shuffle For Users Playback",
					"value": "Toggle Shuffle For Users Playback",
					"action": "Toggle Playback Shuffle\n",
					"description": "Toggle shuffle on or off for user’s playback.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/player/shuffle"
						}
					}
				},
				{
					"name": "Set Volume For Users Playback",
					"value": "Set Volume For Users Playback",
					"action": "Set Playback Volume\n",
					"description": "Set the volume for the user’s current playback device.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/player/volume"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/player",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Get Information About The Users Current Playback"
					]
				}
			}
		},
		{
			"displayName": "Market",
			"name": "market",
			"default": "ES",
			"type": "string",
			"description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/se/account/overview/).\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "market",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Get Information About The Users Current Playback"
					]
				}
			}
		},
		{
			"displayName": "Additional Types",
			"name": "additional_types",
			"default": "",
			"type": "string",
			"description": "A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/>\n_**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/>\nIn addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "additional_types",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Get Information About The Users Current Playback"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/player",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Transfer A Users Playback"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Device Ids",
			"name": "device_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A JSON array containing the ID of the device on which playback should be started/transferred.<br/>For example:`{device_ids:[\"74ASZWbe4lXaubB36ztrGX\"]}`<br/>_**Note**: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return `400 Bad Request`_\n",
			"routing": {
				"send": {
					"property": "device_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Transfer A Users Playback"
					]
				}
			}
		},
		{
			"displayName": "Play",
			"name": "play",
			"type": "boolean",
			"default": true,
			"description": "**true**: ensure playback happens on new device.<br/>**false** or not provided: keep the current playback state.\n",
			"routing": {
				"send": {
					"property": "play",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Transfer A Users Playback"
					]
				}
			}
		},
		{
			"displayName": "GET /me/player/currently-playing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Get The Users Currently Playing Track"
					]
				}
			}
		},
		{
			"displayName": "Market",
			"name": "market",
			"default": "ES",
			"type": "string",
			"description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/se/account/overview/).\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "market",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Get The Users Currently Playing Track"
					]
				}
			}
		},
		{
			"displayName": "Additional Types",
			"name": "additional_types",
			"default": "",
			"type": "string",
			"description": "A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/>\n_**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/>\nIn addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "additional_types",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Get The Users Currently Playing Track"
					]
				}
			}
		},
		{
			"displayName": "GET /me/player/devices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Get A Users Available Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /me/player/next",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Skip Users Playback To Next Track"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "device_id",
			"default": "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
			"type": "string",
			"description": "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.",
			"routing": {
				"send": {
					"type": "query",
					"property": "device_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Skip Users Playback To Next Track"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/player/pause",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Pause A Users Playback"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "device_id",
			"default": "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
			"type": "string",
			"description": "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "device_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Pause A Users Playback"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/player/play",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Start A Users Playback"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "device_id",
			"default": "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
			"type": "string",
			"description": "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.",
			"routing": {
				"send": {
					"type": "query",
					"property": "device_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Start A Users Playback"
					]
				}
			}
		},
		{
			"displayName": "Context Uri",
			"name": "context_uri",
			"type": "string",
			"default": "",
			"description": "Optional. Spotify URI of the context to play.\nValid contexts are albums, artists & playlists.\n`{context_uri:\"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT\"}`\n",
			"routing": {
				"send": {
					"property": "context_uri",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Start A Users Playback"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"type": "json",
			"default": "{}",
			"description": "Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object\n\"position\" is zero based and can’t be negative. Example: `\"offset\": {\"position\": 5}`\n\"uri\" is a string representing the uri of the item to start at. Example: `\"offset\": {\"uri\": \"spotify:track:1301WleyT98MSxVHPZCA6M\"}`\n",
			"routing": {
				"send": {
					"property": "offset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Start A Users Playback"
					]
				}
			}
		},
		{
			"displayName": "Position Ms",
			"name": "position_ms",
			"type": "number",
			"default": 0,
			"description": "integer",
			"routing": {
				"send": {
					"property": "position_ms",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Start A Users Playback"
					]
				}
			}
		},
		{
			"displayName": "Uris",
			"name": "uris",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Optional. A JSON array of the Spotify track URIs to play.\nFor example: `{\"uris\": [\"spotify:track:4iV5W9uYEdYUVa79Axb7Rh\", \"spotify:track:1301WleyT98MSxVHPZCA6M\"]}`\n",
			"routing": {
				"send": {
					"property": "uris",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Start A Users Playback"
					]
				}
			}
		},
		{
			"displayName": "POST /me/player/previous",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Skip Users Playback To Previous Track"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "device_id",
			"default": "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
			"type": "string",
			"description": "The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "device_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Skip Users Playback To Previous Track"
					]
				}
			}
		},
		{
			"displayName": "GET /me/player/queue",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Get Queue"
					]
				}
			}
		},
		{
			"displayName": "POST /me/player/queue",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Add To Queue"
					]
				}
			}
		},
		{
			"displayName": "Uri",
			"name": "uri",
			"required": true,
			"default": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
			"type": "string",
			"description": "The uri of the item to add to the queue. Must be a track or an episode uri.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "uri",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Add To Queue"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "device_id",
			"default": "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
			"type": "string",
			"description": "The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "device_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Add To Queue"
					]
				}
			}
		},
		{
			"displayName": "GET /me/player/recently-played",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Get Recently Played"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 10,
			"type": "number",
			"description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Get Recently Played"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"default": 1484811043508,
			"type": "number",
			"description": "A Unix timestamp in milliseconds. Returns all items\nafter (but not including) this cursor position. If `after` is specified, `before`\nmust not be specified.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Get Recently Played"
					]
				}
			}
		},
		{
			"displayName": "Before",
			"name": "before",
			"default": 0,
			"type": "number",
			"description": "A Unix timestamp in milliseconds. Returns all items\nbefore (but not including) this cursor position. If `before` is specified,\n`after` must not be specified.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "before",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Get Recently Played"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/player/repeat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Set Repeat Mode On Users Playback"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"required": true,
			"default": "context",
			"type": "string",
			"description": "**track**, **context** or **off**.<br/>\n**track** will repeat the current track.<br/>\n**context** will repeat the current context.<br/>\n**off** will turn repeat off.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Set Repeat Mode On Users Playback"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "device_id",
			"default": "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
			"type": "string",
			"description": "The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "device_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Set Repeat Mode On Users Playback"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/player/seek",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Seek To Position In Currently Playing Track"
					]
				}
			}
		},
		{
			"displayName": "Position Ms",
			"name": "position_ms",
			"required": true,
			"default": 25000,
			"type": "number",
			"description": "The position in milliseconds to seek to. Must be a\npositive number. Passing in a position that is greater than the length of\nthe track will cause the player to start playing the next song.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "position_ms",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Seek To Position In Currently Playing Track"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "device_id",
			"default": "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
			"type": "string",
			"description": "The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "device_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Seek To Position In Currently Playing Track"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/player/shuffle",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Toggle Shuffle For Users Playback"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"required": true,
			"default": true,
			"type": "boolean",
			"description": "**true** : Shuffle user's playback.<br/>\n**false** : Do not shuffle user's playback.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Toggle Shuffle For Users Playback"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "device_id",
			"default": "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
			"type": "string",
			"description": "The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "device_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Toggle Shuffle For Users Playback"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/player/volume",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Set Volume For Users Playback"
					]
				}
			}
		},
		{
			"displayName": "Volume Percent",
			"name": "volume_percent",
			"required": true,
			"default": 50,
			"type": "number",
			"description": "The volume to set. Must be a value from 0 to 100 inclusive.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "volume_percent",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Set Volume For Users Playback"
					]
				}
			}
		},
		{
			"displayName": "Device ID",
			"name": "device_id",
			"default": "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
			"type": "string",
			"description": "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "device_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Player"
					],
					"operation": [
						"Set Volume For Users Playback"
					]
				}
			}
		},
];
