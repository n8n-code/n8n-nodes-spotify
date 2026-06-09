import type { INodeProperties } from 'n8n-workflow';

export const usersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					]
				}
			},
			"options": [
				{
					"name": "Get Current Users Profile",
					"value": "Get Current Users Profile",
					"action": "Get Current User's Profile\n",
					"description": "Get detailed profile information about the current user (including the\ncurrent user's username).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me"
						}
					}
				},
				{
					"name": "Unfollow Artists Users",
					"value": "Unfollow Artists Users",
					"action": "Unfollow Artists or Users\n",
					"description": "Remove the current user as a follower of one or more artists or other Spotify users.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/following"
						}
					}
				},
				{
					"name": "Get Followed",
					"value": "Get Followed",
					"action": "Get Followed Artists\n",
					"description": "Get the current user's followed artists.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/following"
						}
					}
				},
				{
					"name": "Follow Artists Users",
					"value": "Follow Artists Users",
					"action": "Follow Artists or Users\n",
					"description": "Add the current user as a follower of one or more artists or other Spotify users.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/following"
						}
					}
				},
				{
					"name": "Check Current User Follows",
					"value": "Check Current User Follows",
					"action": "Check If User Follows Artists or Users\n",
					"description": "Check to see if the current user is following one or more artists or other Spotify users.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/following/contains"
						}
					}
				},
				{
					"name": "Get Users Top Artists And Tracks",
					"value": "Get Users Top Artists And Tracks",
					"action": "Get User's Top Items\n",
					"description": "Get the current user's top artists or tracks based on calculated affinity.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/top/{{$parameter[\"type\"]}}"
						}
					}
				},
				{
					"name": "Unfollow Playlist",
					"value": "Unfollow Playlist",
					"action": "Unfollow Playlist\n",
					"description": "Remove the current user as a follower of a playlist.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/playlists/{{$parameter[\"playlist_id\"]}}/followers"
						}
					}
				},
				{
					"name": "Follow Playlist",
					"value": "Follow Playlist",
					"action": "Follow Playlist\n",
					"description": "Add the current user as a follower of a playlist.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/playlists/{{$parameter[\"playlist_id\"]}}/followers"
						}
					}
				},
				{
					"name": "Check If User Follows Playlist",
					"value": "Check If User Follows Playlist",
					"action": "Check if Users Follow Playlist\n",
					"description": "Check to see if one or more Spotify users are following a specified playlist.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playlists/{{$parameter[\"playlist_id\"]}}/followers/contains"
						}
					}
				},
				{
					"name": "Get Users Profile",
					"value": "Get Users Profile",
					"action": "Get User's Profile\n",
					"description": "Get public profile information about a Spotify user.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user_id\"]}}"
						}
					}
				},
				{
					"name": "Get List Users Playlists",
					"value": "Get List Users Playlists",
					"action": "Get User's Playlists\n",
					"description": "Get a list of the playlists owned or followed by a Spotify user.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user_id\"]}}/playlists"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Current Users Profile"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/following",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Unfollow Artists Users"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"default": "artist",
			"type": "options",
			"description": "The ID type: either `artist` or `user`.\n",
			"options": [
				{
					"name": "Artist",
					"value": "artist"
				},
				{
					"name": "User",
					"value": "user"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Unfollow Artists Users"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"default": "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
			"type": "string",
			"description": "A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50 IDs can be sent in one request.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "ids",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Unfollow Artists Users"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A JSON array of the artist or user [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `{ids:[\"74ASZWbe4lXaubB36ztrGX\", \"08td7MxkoHQkXnWAYD8d6Q\"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Unfollow Artists Users"
					]
				}
			}
		},
		{
			"displayName": "GET /me/following",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Followed"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"default": "artist",
			"type": "options",
			"description": "The ID type: currently only `artist` is supported.\n",
			"options": [
				{
					"name": "Artist",
					"value": "artist"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Followed"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"default": "0I2XqVXqHScXjHhk6AYYRe",
			"type": "string",
			"description": "The last artist ID retrieved from the previous request.\n",
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
						"Users"
					],
					"operation": [
						"Get Followed"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 10,
			"type": "number",
			"description": "The maximum number of items to return. Default: 20\\. Minimum: 1\\. Maximum: 50\\.\n",
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
						"Users"
					],
					"operation": [
						"Get Followed"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/following",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Follow Artists Users"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"default": "artist",
			"type": "options",
			"description": "The ID type.\n",
			"options": [
				{
					"name": "Artist",
					"value": "artist"
				},
				{
					"name": "User",
					"value": "user"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Follow Artists Users"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"default": "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
			"type": "string",
			"description": "A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids).\nA maximum of 50 IDs can be sent in one request.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "ids",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Follow Artists Users"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A JSON array of the artist or user [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids).\nFor example: `{ids:[\"74ASZWbe4lXaubB36ztrGX\", \"08td7MxkoHQkXnWAYD8d6Q\"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n",
			"routing": {
				"send": {
					"property": "ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Follow Artists Users"
					]
				}
			}
		},
		{
			"displayName": "GET /me/following/contains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Check Current User Follows"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"default": "artist",
			"type": "options",
			"description": "The ID type: either `artist` or `user`.\n",
			"options": [
				{
					"name": "Artist",
					"value": "artist"
				},
				{
					"name": "User",
					"value": "user"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Check Current User Follows"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"default": "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
			"type": "string",
			"description": "A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids) to check. For example: `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50 IDs can be sent in one request.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "ids",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Check Current User Follows"
					]
				}
			}
		},
		{
			"displayName": "GET /me/top/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users Top Artists And Tracks"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"default": "artists",
			"type": "options",
			"description": "The type of entity to return. Valid values: `artists` or `tracks`\n",
			"options": [
				{
					"name": "Artists",
					"value": "artists"
				},
				{
					"name": "Tracks",
					"value": "tracks"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users Top Artists And Tracks"
					]
				}
			}
		},
		{
			"displayName": "Time Range",
			"name": "time_range",
			"default": "medium_term",
			"type": "string",
			"description": "Over what time frame the affinities are computed. Valid values: `long_term` (calculated from several years of data and including all new data as it becomes available), `medium_term` (approximately last 6 months), `short_term` (approximately last 4 weeks). Default: `medium_term`\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "time_range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users Top Artists And Tracks"
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
						"Users"
					],
					"operation": [
						"Get Users Top Artists And Tracks"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": 5,
			"type": "number",
			"description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users Top Artists And Tracks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /playlists/{playlist_id}/followers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Unfollow Playlist"
					]
				}
			}
		},
		{
			"displayName": "Playlist ID",
			"name": "playlist_id",
			"required": true,
			"default": "3cEYpjA9oz9GiPac4AsH4n",
			"type": "string",
			"description": "The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) of the playlist.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Unfollow Playlist"
					]
				}
			}
		},
		{
			"displayName": "PUT /playlists/{playlist_id}/followers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Follow Playlist"
					]
				}
			}
		},
		{
			"displayName": "Playlist ID",
			"name": "playlist_id",
			"required": true,
			"default": "3cEYpjA9oz9GiPac4AsH4n",
			"type": "string",
			"description": "The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) of the playlist.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Follow Playlist"
					]
				}
			}
		},
		{
			"displayName": "Public",
			"name": "public",
			"type": "boolean",
			"default": true,
			"description": "Defaults to `true`. If `true` the playlist will be included in user's public playlists, if `false` it will remain private.\n",
			"routing": {
				"send": {
					"property": "public",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Follow Playlist"
					]
				}
			}
		},
		{
			"displayName": "GET /playlists/{playlist_id}/followers/contains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Check If User Follows Playlist"
					]
				}
			}
		},
		{
			"displayName": "Playlist ID",
			"name": "playlist_id",
			"required": true,
			"default": "3cEYpjA9oz9GiPac4AsH4n",
			"type": "string",
			"description": "The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) of the playlist.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Check If User Follows Playlist"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"default": "jmperezperez,thelinmichael,wizzler",
			"type": "string",
			"description": "A comma-separated list of [Spotify User IDs](/documentation/web-api/#spotify-uris-and-ids) ; the ids of the users that you want to check to see if they follow the playlist. Maximum: 5 ids.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "ids",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Check If User Follows Playlist"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users Profile"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"default": "smedjan",
			"type": "string",
			"description": "The user's [Spotify user ID](/documentation/web-api/#spotify-uris-and-ids).\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get Users Profile"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user_id}/playlists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get List Users Playlists"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"default": "smedjan",
			"type": "string",
			"description": "The user's [Spotify user ID](/documentation/web-api/#spotify-uris-and-ids).\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get List Users Playlists"
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
						"Users"
					],
					"operation": [
						"Get List Users Playlists"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"default": 5,
			"type": "number",
			"description": "The index of the first playlist to return. Default:\n0 (the first object). Maximum offset: 100.000\\. Use with `limit` to get the\nnext set of playlists.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users"
					],
					"operation": [
						"Get List Users Playlists"
					]
				}
			}
		},
];
