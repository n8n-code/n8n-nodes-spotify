import type { INodeProperties } from 'n8n-workflow';

export const libraryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					]
				}
			},
			"options": [
				{
					"name": "Remove Albums User",
					"value": "Remove Albums User",
					"action": "Remove Users' Saved Albums\n",
					"description": "Remove one or more albums from the current user's 'Your Music' library.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/albums"
						}
					}
				},
				{
					"name": "Get Users Saved Albums",
					"value": "Get Users Saved Albums",
					"action": "Get User's Saved Albums\n",
					"description": "Get a list of the albums saved in the current Spotify user's 'Your Music' library.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/albums"
						}
					}
				},
				{
					"name": "Save Albums User",
					"value": "Save Albums User",
					"action": "Save Albums for Current User\n",
					"description": "Save one or more albums to the current user's 'Your Music' library.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/albums"
						}
					}
				},
				{
					"name": "Check Users Saved Albums",
					"value": "Check Users Saved Albums",
					"action": "Check User's Saved Albums\n",
					"description": "Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/albums/contains"
						}
					}
				},
				{
					"name": "Remove Audiobooks User",
					"value": "Remove Audiobooks User",
					"action": "Remove User's Saved Audiobooks\n",
					"description": "Remove one or more audiobooks from the Spotify user's library.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/audiobooks"
						}
					}
				},
				{
					"name": "Get Users Saved Audiobooks",
					"value": "Get Users Saved Audiobooks",
					"action": "Get User's Saved Audiobooks\n",
					"description": "Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/audiobooks"
						}
					}
				},
				{
					"name": "Save Audiobooks User",
					"value": "Save Audiobooks User",
					"action": "Save Audiobooks for Current User\n",
					"description": "Save one or more audiobooks to the current Spotify user's library.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/audiobooks"
						}
					}
				},
				{
					"name": "Check Users Saved Audiobooks",
					"value": "Check Users Saved Audiobooks",
					"action": "Check User's Saved Audiobooks\n",
					"description": "Check if one or more audiobooks are already saved in the current Spotify user's library.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/audiobooks/contains"
						}
					}
				},
				{
					"name": "Remove Episodes User",
					"value": "Remove Episodes User",
					"action": "Remove User's Saved Episodes\n",
					"description": "Remove one or more episodes from the current user's library.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/episodes"
						}
					}
				},
				{
					"name": "Get Users Saved Episodes",
					"value": "Get Users Saved Episodes",
					"action": "Get User's Saved Episodes\n",
					"description": "Get a list of the episodes saved in the current Spotify user's library.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/episodes"
						}
					}
				},
				{
					"name": "Save Episodes User",
					"value": "Save Episodes User",
					"action": "Save Episodes for Current User\n",
					"description": "Save one or more episodes to the current user's library.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/episodes"
						}
					}
				},
				{
					"name": "Check Users Saved Episodes",
					"value": "Check Users Saved Episodes",
					"action": "Check User's Saved Episodes\n",
					"description": "Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/episodes/contains"
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
					"name": "Get A List Of Current Users Playlists",
					"value": "Get A List Of Current Users Playlists",
					"action": "Get Current User's Playlists\n",
					"description": "Get a list of the playlists owned or followed by the current Spotify\nuser.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/playlists"
						}
					}
				},
				{
					"name": "Remove Shows User",
					"value": "Remove Shows User",
					"action": "Remove User's Saved Shows\n",
					"description": "Delete one or more shows from current Spotify user's library.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/shows"
						}
					}
				},
				{
					"name": "Get Users Saved Shows",
					"value": "Get Users Saved Shows",
					"action": "Get User's Saved Shows\n",
					"description": "Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/shows"
						}
					}
				},
				{
					"name": "Save Shows User",
					"value": "Save Shows User",
					"action": "Save Shows for Current User\n",
					"description": "Save one or more shows to current Spotify user's library.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/shows"
						}
					}
				},
				{
					"name": "Check Users Saved Shows",
					"value": "Check Users Saved Shows",
					"action": "Check User's Saved Shows\n",
					"description": "Check if one or more shows is already saved in the current Spotify user's library.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/shows/contains"
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
					"name": "Remove Tracks User",
					"value": "Remove Tracks User",
					"action": "Remove User's Saved Tracks\n",
					"description": "Remove one or more tracks from the current user's 'Your Music' library.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/tracks"
						}
					}
				},
				{
					"name": "Get Users Saved Tracks",
					"value": "Get Users Saved Tracks",
					"action": "Get User's Saved Tracks\n",
					"description": "Get a list of the songs saved in the current Spotify user's 'Your Music' library.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/tracks"
						}
					}
				},
				{
					"name": "Save Tracks User",
					"value": "Save Tracks User",
					"action": "Save Tracks for Current User\n",
					"description": "Save one or more tracks to the current user's 'Your Music' library.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/me/tracks"
						}
					}
				},
				{
					"name": "Check Users Saved Tracks",
					"value": "Check Users Saved Tracks",
					"action": "Check User's Saved Tracks\n",
					"description": "Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/tracks/contains"
						}
					}
				},
				{
					"name": "Change Playlist Details",
					"value": "Change Playlist Details",
					"action": "Change Playlist Details\n",
					"description": "Change a playlist's name and public/private state. (The user must, of\ncourse, own the playlist.)\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/playlists/{{$parameter[\"playlist_id\"]}}"
						}
					}
				},
				{
					"name": "Create Playlist",
					"value": "Create Playlist",
					"action": "Create Playlist\n",
					"description": "Create a playlist for a Spotify user. (The playlist will be empty until\nyou [add tracks](/documentation/web-api/reference/#/operations/add-tracks-to-playlist).)\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user_id\"]}}/playlists"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /me/albums",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Remove Albums User"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids) for the albums. Maximum: 20 IDs.\n",
			"default": "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Remove Albums User"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A JSON array of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `[\"4iV5W9uYEdYUVa79Axb7Rh\", \"1301WleyT98MSxVHPZCA6M\"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n",
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
						"Library"
					],
					"operation": [
						"Remove Albums User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/albums",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Get Users Saved Albums"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n",
			"default": 10,
			"type": "number",
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
						"Library"
					],
					"operation": [
						"Get Users Saved Albums"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n",
			"default": 5,
			"type": "number",
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
						"Library"
					],
					"operation": [
						"Get Users Saved Albums"
					]
				}
			}
		},
		{
			"displayName": "Market",
			"name": "market",
			"description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/se/account/overview/).\n",
			"default": "ES",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Get Users Saved Albums"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/albums",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Save Albums User"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids) for the albums. Maximum: 20 IDs.\n",
			"default": "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Save Albums User"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A JSON array of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `[\"4iV5W9uYEdYUVa79Axb7Rh\", \"1301WleyT98MSxVHPZCA6M\"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n",
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
						"Library"
					],
					"operation": [
						"Save Albums User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/albums/contains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Check Users Saved Albums"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids) for the albums. Maximum: 20 IDs.\n",
			"default": "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Check Users Saved Albums"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/audiobooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Remove Audiobooks User"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.\n",
			"default": "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Remove Audiobooks User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/audiobooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Get Users Saved Audiobooks"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n",
			"default": 10,
			"type": "number",
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
						"Library"
					],
					"operation": [
						"Get Users Saved Audiobooks"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n",
			"default": 5,
			"type": "number",
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
						"Library"
					],
					"operation": [
						"Get Users Saved Audiobooks"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/audiobooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Save Audiobooks User"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.\n",
			"default": "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Save Audiobooks User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/audiobooks/contains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Check Users Saved Audiobooks"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.\n",
			"default": "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Check Users Saved Audiobooks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/episodes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Remove Episodes User"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.\n",
			"default": "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Remove Episodes User"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A JSON array of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n",
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
						"Library"
					],
					"operation": [
						"Remove Episodes User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/episodes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Get Users Saved Episodes"
					]
				}
			}
		},
		{
			"displayName": "Market",
			"name": "market",
			"description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/se/account/overview/).\n",
			"default": "ES",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Get Users Saved Episodes"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n",
			"default": 10,
			"type": "number",
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
						"Library"
					],
					"operation": [
						"Get Users Saved Episodes"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n",
			"default": 5,
			"type": "number",
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
						"Library"
					],
					"operation": [
						"Get Users Saved Episodes"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/episodes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Save Episodes User"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). Maximum: 50 IDs.\n",
			"default": "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Save Episodes User"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A JSON array of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n",
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
						"Library"
					],
					"operation": [
						"Save Episodes User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/episodes/contains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Check Users Saved Episodes"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids) for the episodes. Maximum: 50 IDs.\n",
			"default": "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Check Users Saved Episodes"
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
						"Library"
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
			"description": "The ID type: either `artist` or `user`.\n",
			"default": "artist",
			"type": "options",
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
						"Library"
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
			"description": "A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50 IDs can be sent in one request.\n",
			"default": "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
			"type": "string",
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
						"Library"
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
						"Library"
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
						"Library"
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
			"description": "The ID type: currently only `artist` is supported.\n",
			"default": "artist",
			"type": "options",
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
						"Library"
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
			"description": "The last artist ID retrieved from the previous request.\n",
			"default": "0I2XqVXqHScXjHhk6AYYRe",
			"type": "string",
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
						"Library"
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
			"description": "The maximum number of items to return. Default: 20\\. Minimum: 1\\. Maximum: 50\\.\n",
			"default": 10,
			"type": "number",
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
						"Library"
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
						"Library"
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
			"description": "The ID type.\n",
			"default": "artist",
			"type": "options",
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
						"Library"
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
			"description": "A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids).\nA maximum of 50 IDs can be sent in one request.\n",
			"default": "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
			"type": "string",
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
						"Library"
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
						"Library"
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
						"Library"
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
			"description": "The ID type: either `artist` or `user`.\n",
			"default": "artist",
			"type": "options",
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
						"Library"
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
			"description": "A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids) to check. For example: `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50 IDs can be sent in one request.\n",
			"default": "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Check Current User Follows"
					]
				}
			}
		},
		{
			"displayName": "GET /me/playlists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Get A List Of Current Users Playlists"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n",
			"default": 10,
			"type": "number",
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
						"Library"
					],
					"operation": [
						"Get A List Of Current Users Playlists"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "'The index of the first playlist to return. Default:\n0 (the first object). Maximum offset: 100.000\\. Use with `limit` to get the\nnext set of playlists.'\n",
			"default": 5,
			"type": "number",
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
						"Library"
					],
					"operation": [
						"Get A List Of Current Users Playlists"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/shows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Remove Shows User"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids) for the shows. Maximum: 50 IDs.\n",
			"default": "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Remove Shows User"
					]
				}
			}
		},
		{
			"displayName": "Market",
			"name": "market",
			"description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/se/account/overview/).\n",
			"default": "ES",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Remove Shows User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/shows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Get Users Saved Shows"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n",
			"default": 10,
			"type": "number",
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
						"Library"
					],
					"operation": [
						"Get Users Saved Shows"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n",
			"default": 5,
			"type": "number",
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
						"Library"
					],
					"operation": [
						"Get Users Saved Shows"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/shows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Save Shows User"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids) for the shows. Maximum: 50 IDs.\n",
			"default": "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Save Shows User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/shows/contains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Check Users Saved Shows"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids) for the shows. Maximum: 50 IDs.\n",
			"default": "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Check Users Saved Shows"
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
						"Library"
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
			"description": "The type of entity to return. Valid values: `artists` or `tracks`\n",
			"default": "artists",
			"type": "options",
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
						"Library"
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
			"description": "Over what time frame the affinities are computed. Valid values: `long_term` (calculated from several years of data and including all new data as it becomes available), `medium_term` (approximately last 6 months), `short_term` (approximately last 4 weeks). Default: `medium_term`\n",
			"default": "medium_term",
			"type": "string",
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
						"Library"
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
			"description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n",
			"default": 10,
			"type": "number",
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
						"Library"
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
			"description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n",
			"default": 5,
			"type": "number",
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
						"Library"
					],
					"operation": [
						"Get Users Top Artists And Tracks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/tracks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Remove Tracks User"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.\n",
			"default": "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Remove Tracks User"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A JSON array of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `[\"4iV5W9uYEdYUVa79Axb7Rh\", \"1301WleyT98MSxVHPZCA6M\"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n",
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
						"Library"
					],
					"operation": [
						"Remove Tracks User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/tracks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Get Users Saved Tracks"
					]
				}
			}
		},
		{
			"displayName": "Market",
			"name": "market",
			"description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/se/account/overview/).\n",
			"default": "ES",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Get Users Saved Tracks"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n",
			"default": 10,
			"type": "number",
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
						"Library"
					],
					"operation": [
						"Get Users Saved Tracks"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n",
			"default": 5,
			"type": "number",
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
						"Library"
					],
					"operation": [
						"Get Users Saved Tracks"
					]
				}
			}
		},
		{
			"displayName": "PUT /me/tracks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Save Tracks User"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.\n",
			"default": "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Save Tracks User"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A JSON array of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `[\"4iV5W9uYEdYUVa79Axb7Rh\", \"1301WleyT98MSxVHPZCA6M\"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n",
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
						"Library"
					],
					"operation": [
						"Save Tracks User"
					]
				}
			}
		},
		{
			"displayName": "GET /me/tracks/contains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Check Users Saved Tracks"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.\n",
			"default": "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
			"type": "string",
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
						"Library"
					],
					"operation": [
						"Check Users Saved Tracks"
					]
				}
			}
		},
		{
			"displayName": "PUT /playlists/{playlist_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Change Playlist Details"
					]
				}
			}
		},
		{
			"displayName": "Playlist Id",
			"name": "playlist_id",
			"required": true,
			"description": "The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) of the playlist.\n",
			"default": "3cEYpjA9oz9GiPac4AsH4n",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Change Playlist Details"
					]
				}
			}
		},
		{
			"displayName": "Collaborative",
			"name": "collaborative",
			"type": "boolean",
			"default": true,
			"description": "If `true`, the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. <br/>\n_**Note**: You can only set `collaborative` to `true` on non-public playlists._\n",
			"routing": {
				"send": {
					"property": "collaborative",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Change Playlist Details"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Value for playlist description as displayed in Spotify Clients and in the Web API.\n",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Change Playlist Details"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The new name for the playlist, for example `\"My New Playlist Title\"`\n",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Change Playlist Details"
					]
				}
			}
		},
		{
			"displayName": "Public",
			"name": "public",
			"type": "boolean",
			"default": true,
			"description": "If `true` the playlist will be public, if `false` it will be private.\n",
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
						"Library"
					],
					"operation": [
						"Change Playlist Details"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user_id}/playlists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Create Playlist"
					]
				}
			}
		},
		{
			"displayName": "User Id",
			"name": "user_id",
			"required": true,
			"description": "The user's [Spotify user ID](/documentation/web-api/#spotify-uris-and-ids).\n",
			"default": "smedjan",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Create Playlist"
					]
				}
			}
		},
		{
			"displayName": "Collaborative",
			"name": "collaborative",
			"type": "boolean",
			"default": true,
			"description": "Defaults to `false`. If `true` the playlist will be collaborative. _**Note**: to create a collaborative playlist you must also set `public` to `false`. To create collaborative playlists you must have granted `playlist-modify-private` and `playlist-modify-public` [scopes](/documentation/general/guides/authorization-guide/#list-of-scopes)._\n",
			"routing": {
				"send": {
					"property": "collaborative",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Create Playlist"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "value for playlist description as displayed in Spotify Clients and in the Web API.\n",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Create Playlist"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name for the new playlist, for example `\"Your Coolest Playlist\"`. This name does not need to be unique; a user may have several playlists with the same name.\n",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Library"
					],
					"operation": [
						"Create Playlist"
					]
				}
			}
		},
		{
			"displayName": "Public",
			"name": "public",
			"type": "boolean",
			"default": true,
			"description": "Defaults to `true`. If `true` the playlist will be public, if `false` it will be private. To be able to create private playlists, the user must have granted the `playlist-modify-private` [scope](/documentation/general/guides/authorization-guide/#list-of-scopes)\n",
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
						"Library"
					],
					"operation": [
						"Create Playlist"
					]
				}
			}
		},
];
