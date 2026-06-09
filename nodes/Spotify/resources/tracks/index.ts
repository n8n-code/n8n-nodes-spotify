import type { INodeProperties } from 'n8n-workflow';

export const tracksDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					]
				}
			},
			"options": [
				{
					"name": "Get An Albums Tracks",
					"value": "Get An Albums Tracks",
					"action": "Get Album Tracks\n",
					"description": "Get Spotify catalog information about an album’s tracks.\nOptional parameters can be used to limit the number of tracks returned.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/albums/{{$parameter[\"id\"]}}/tracks"
						}
					}
				},
				{
					"name": "Get An Artists Top Tracks",
					"value": "Get An Artists Top Tracks",
					"action": "Get Artist's Top Tracks\n",
					"description": "Get Spotify catalog information about an artist's top tracks by country.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/artists/{{$parameter[\"id\"]}}/top-tracks"
						}
					}
				},
				{
					"name": "Get Audio Analysis",
					"value": "Get Audio Analysis",
					"action": "Get Track's Audio Analysis\n",
					"description": "Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/audio-analysis/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Several Audio Features",
					"value": "Get Several Audio Features",
					"action": "Get Tracks' Audio Features\n",
					"description": "Get audio features for multiple tracks based on their Spotify IDs.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/audio-features"
						}
					}
				},
				{
					"name": "Get Audio Features",
					"value": "Get Audio Features",
					"action": "Get Track's Audio Features\n",
					"description": "Get audio feature information for a single track identified by its unique\nSpotify ID.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/audio-features/{{$parameter[\"id\"]}}"
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
					"name": "Remove Tracks Playlist",
					"value": "Remove Tracks Playlist",
					"action": "Remove Playlist Items\n",
					"description": "Remove one or more items from a user's playlist.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/playlists/{{$parameter[\"playlist_id\"]}}/tracks"
						}
					}
				},
				{
					"name": "Get Playlists Tracks",
					"value": "Get Playlists Tracks",
					"action": "Get Playlist Items\n",
					"description": "Get full details of the items of a playlist owned by a Spotify user.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playlists/{{$parameter[\"playlist_id\"]}}/tracks"
						}
					}
				},
				{
					"name": "Add Tracks To Playlist",
					"value": "Add Tracks To Playlist",
					"action": "Add Items to Playlist\n",
					"description": "Add one or more items to a user's playlist.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/playlists/{{$parameter[\"playlist_id\"]}}/tracks"
						}
					}
				},
				{
					"name": "Reorder Or Replace Playlists Tracks",
					"value": "Reorder Or Replace Playlists Tracks",
					"action": "Update Playlist Items\n",
					"description": "Either reorder or replace items in a playlist depending on the request's parameters.\nTo reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.\nTo replace items, include `uris` as either a query parameter or in the request's body.\nReplacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.\n<br/>\n**Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.\nThese operations can't be applied together in a single request.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/playlists/{{$parameter[\"playlist_id\"]}}/tracks"
						}
					}
				},
				{
					"name": "Get Recommendations",
					"value": "Get Recommendations",
					"action": "Get Recommendations\n",
					"description": "Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.\n\nFor artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/recommendations"
						}
					}
				},
				{
					"name": "Get Several Tracks",
					"value": "Get Several Tracks",
					"action": "Get Several Tracks\n",
					"description": "Get Spotify catalog information for multiple tracks based on their Spotify IDs.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tracks"
						}
					}
				},
				{
					"name": "Get Track",
					"value": "Get Track",
					"action": "Get Track\n",
					"description": "Get Spotify catalog information for a single track identified by its\nunique Spotify ID.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/tracks/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /albums/{id}/tracks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get An Albums Tracks"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "4aawyAB9vmqN3uQ7FjRGTy",
			"type": "string",
			"description": "The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) of the album.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get An Albums Tracks"
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
						"Tracks"
					],
					"operation": [
						"Get An Albums Tracks"
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
						"Tracks"
					],
					"operation": [
						"Get An Albums Tracks"
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
						"Tracks"
					],
					"operation": [
						"Get An Albums Tracks"
					]
				}
			}
		},
		{
			"displayName": "GET /artists/{id}/top-tracks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get An Artists Top Tracks"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "0TnOYISbd1XYRBk9myaseg",
			"type": "string",
			"description": "The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) of the artist.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get An Artists Top Tracks"
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
						"Tracks"
					],
					"operation": [
						"Get An Artists Top Tracks"
					]
				}
			}
		},
		{
			"displayName": "GET /audio-analysis/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Audio Analysis"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "11dFghVXANMlKmJXsNCbNl",
			"type": "string",
			"description": "The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids)\nfor the track.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Audio Analysis"
					]
				}
			}
		},
		{
			"displayName": "GET /audio-features",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Several Audio Features"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"default": "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
			"type": "string",
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids)\nfor the tracks. Maximum: 100 IDs.\n",
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
						"Tracks"
					],
					"operation": [
						"Get Several Audio Features"
					]
				}
			}
		},
		{
			"displayName": "GET /audio-features/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Audio Features"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "11dFghVXANMlKmJXsNCbNl",
			"type": "string",
			"description": "The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the track.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Audio Features"
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
						"Tracks"
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
						"Tracks"
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
						"Tracks"
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
						"Tracks"
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
						"Tracks"
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
						"Tracks"
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
			"default": "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
			"type": "string",
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.\n",
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
						"Tracks"
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
						"Tracks"
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
						"Tracks"
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
						"Tracks"
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
						"Tracks"
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
						"Tracks"
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
						"Tracks"
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
			"default": "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
			"type": "string",
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.\n",
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
						"Tracks"
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
						"Tracks"
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
						"Tracks"
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
			"default": "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
			"type": "string",
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.\n",
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
						"Tracks"
					],
					"operation": [
						"Check Users Saved Tracks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /playlists/{playlist_id}/tracks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Remove Tracks Playlist"
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
						"Tracks"
					],
					"operation": [
						"Remove Tracks Playlist"
					]
				}
			}
		},
		{
			"displayName": "Snapshot ID",
			"name": "snapshot_id",
			"type": "string",
			"default": "",
			"description": "The playlist's snapshot ID against which you want to make the changes.\nThe API will validate that the specified items exist and in the specified positions and make the changes,\neven if more recent changes have been made to the playlist.\n",
			"routing": {
				"send": {
					"property": "snapshot_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Remove Tracks Playlist"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tracks",
			"name": "tracks",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "An array of objects containing [Spotify URIs](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids) of the tracks or episodes to remove.\nFor example: `{ \"tracks\": [{ \"uri\": \"spotify:track:4iV5W9uYEdYUVa79Axb7Rh\" },{ \"uri\": \"spotify:track:1301WleyT98MSxVHPZCA6M\" }] }`. A maximum of 100 objects can be sent at once.\n",
			"routing": {
				"send": {
					"property": "tracks",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Remove Tracks Playlist"
					]
				}
			}
		},
		{
			"displayName": "GET /playlists/{playlist_id}/tracks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Playlists Tracks"
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
						"Tracks"
					],
					"operation": [
						"Get Playlists Tracks"
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
						"Tracks"
					],
					"operation": [
						"Get Playlists Tracks"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"default": "items(added_by.id,track(name,href,album(name,href)))",
			"type": "string",
			"description": "Filters for the query: a comma-separated list of the\nfields to return. If omitted, all fields are returned. For example, to get\njust the total number of items and the request limit:<br/>`fields=total,limit`<br/>A\ndot separator can be used to specify non-reoccurring fields, while parentheses\ncan be used to specify reoccurring fields within objects. For example, to\nget just the added date and user ID of the adder:<br/>`fields=items(added_at,added_by.id)`<br/>Use\nmultiple parentheses to drill down into nested objects, for example:<br/>`fields=items(track(name,href,album(name,href)))`<br/>Fields\ncan be excluded by prefixing them with an exclamation mark, for example:<br/>`fields=items.track.album(!external_urls,images)`\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Playlists Tracks"
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
						"Tracks"
					],
					"operation": [
						"Get Playlists Tracks"
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
						"Tracks"
					],
					"operation": [
						"Get Playlists Tracks"
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
						"Tracks"
					],
					"operation": [
						"Get Playlists Tracks"
					]
				}
			}
		},
		{
			"displayName": "POST /playlists/{playlist_id}/tracks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Add Tracks To Playlist"
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
						"Tracks"
					],
					"operation": [
						"Add Tracks To Playlist"
					]
				}
			}
		},
		{
			"displayName": "Position",
			"name": "position",
			"default": 0,
			"type": "number",
			"description": "The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0`; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they are listed in the query string or request body.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "position",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Add Tracks To Playlist"
					]
				}
			}
		},
		{
			"displayName": "Uris",
			"name": "uris",
			"default": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M",
			"type": "string",
			"description": "A comma-separated list of [Spotify URIs](/documentation/web-api/#spotify-uris-and-ids) to add, can be track or episode URIs. For example:<br/>`uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:track:1301WleyT98MSxVHPZCA6M, spotify:episode:512ojhOuo1ktJprKbVcKyQ`<br/>A maximum of 100 items can be added in one request. <br/>\n_**Note**: it is likely that passing a large number of item URIs as a query parameter will exceed the maximum length of the request URI. When adding a large number of items, it is recommended to pass them in the request body, see below._\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "uris",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Add Tracks To Playlist"
					]
				}
			}
		},
		{
			"displayName": "Position",
			"name": "position",
			"type": "number",
			"default": 0,
			"description": "The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0` ; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: `{\"uris\": [\"spotify:track:4iV5W9uYEdYUVa79Axb7Rh\",\"spotify:track:1301WleyT98MSxVHPZCA6M\"], \"position\": 3}`\n",
			"routing": {
				"send": {
					"property": "position",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Add Tracks To Playlist"
					]
				}
			}
		},
		{
			"displayName": "Uris",
			"name": "uris",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A JSON array of the [Spotify URIs](/documentation/web-api/#spotify-uris-and-ids) to add. For example: `{\"uris\": [\"spotify:track:4iV5W9uYEdYUVa79Axb7Rh\",\"spotify:track:1301WleyT98MSxVHPZCA6M\", \"spotify:episode:512ojhOuo1ktJprKbVcKyQ\"]}`<br/>A maximum of 100 items can be added in one request. _**Note**: if the `uris` parameter is present in the query string, any URIs listed here in the body will be ignored._\n",
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
						"Tracks"
					],
					"operation": [
						"Add Tracks To Playlist"
					]
				}
			}
		},
		{
			"displayName": "PUT /playlists/{playlist_id}/tracks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Reorder Or Replace Playlists Tracks"
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
						"Tracks"
					],
					"operation": [
						"Reorder Or Replace Playlists Tracks"
					]
				}
			}
		},
		{
			"displayName": "Uris",
			"name": "uris",
			"default": "",
			"type": "string",
			"description": "A comma-separated list of [Spotify URIs](/documentation/web-api/#spotify-uris-and-ids) to set, can be track or episode URIs. For example: `uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M,spotify:episode:512ojhOuo1ktJprKbVcKyQ`<br/>A maximum of 100 items can be set in one request.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "uris",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Reorder Or Replace Playlists Tracks"
					]
				}
			}
		},
		{
			"displayName": "Insert Before",
			"name": "insert_before",
			"type": "number",
			"default": 0,
			"description": "The position where the items should be inserted.<br/>To reorder the items to the end of the playlist, simply set _insert_before_ to the position after the last item.<br/>Examples:<br/>To reorder the first item to the last position in a playlist with 10 items, set _range_start_ to 0, and _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0.\n",
			"routing": {
				"send": {
					"property": "insert_before",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Reorder Or Replace Playlists Tracks"
					]
				}
			}
		},
		{
			"displayName": "Range Length",
			"name": "range_length",
			"type": "number",
			"default": 0,
			"description": "The amount of items to be reordered. Defaults to 1 if not set.<br/>The range of items to be reordered begins from the _range_start_ position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To move the items at index 9-10 to the start of the playlist, _range_start_ is set to 9, and _range_length_ is set to 2.\n",
			"routing": {
				"send": {
					"property": "range_length",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Reorder Or Replace Playlists Tracks"
					]
				}
			}
		},
		{
			"displayName": "Range Start",
			"name": "range_start",
			"type": "number",
			"default": 0,
			"description": "The position of the first item to be reordered.\n",
			"routing": {
				"send": {
					"property": "range_start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Reorder Or Replace Playlists Tracks"
					]
				}
			}
		},
		{
			"displayName": "Snapshot ID",
			"name": "snapshot_id",
			"type": "string",
			"default": "",
			"description": "The playlist's snapshot ID against which you want to make the changes.\n",
			"routing": {
				"send": {
					"property": "snapshot_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Reorder Or Replace Playlists Tracks"
					]
				}
			}
		},
		{
			"displayName": "Uris",
			"name": "uris",
			"type": "json",
			"default": "[\n  null\n]",
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
						"Tracks"
					],
					"operation": [
						"Reorder Or Replace Playlists Tracks"
					]
				}
			}
		},
		{
			"displayName": "GET /recommendations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"default": 10,
			"type": "number",
			"description": "The target size of the list of recommended tracks. For seeds with unusually small pools or when highly restrictive filtering is applied, it may be impossible to generate the requested number of recommended tracks. Debugging information for such cases is available in the response. Default: 20\\. Minimum: 1\\. Maximum: 100.\n",
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
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
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
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Seed Artists",
			"name": "seed_artists",
			"required": true,
			"default": "4NHQUGzhtTLFvgF5SZesLK",
			"type": "string",
			"description": "A comma separated list of [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids) for seed artists.  Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "seed_artists",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Seed Genres",
			"name": "seed_genres",
			"required": true,
			"default": "classical,country",
			"type": "string",
			"description": "A comma separated list of any genres in the set of [available genre seeds](#available-genre-seeds).  Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "seed_genres",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Seed Tracks",
			"name": "seed_tracks",
			"required": true,
			"default": "0c6xIDDpzE81m2q797ordA",
			"type": "string",
			"description": "A comma separated list of [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids) for a seed track.  Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "seed_tracks",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Min Acousticness",
			"name": "min_acousticness",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_acousticness",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Max Acousticness",
			"name": "max_acousticness",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_acousticness",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Target Acousticness",
			"name": "target_acousticness",
			"default": 0,
			"type": "number",
			"description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "target_acousticness",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Min Danceability",
			"name": "min_danceability",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_danceability",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Max Danceability",
			"name": "max_danceability",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_danceability",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Target Danceability",
			"name": "target_danceability",
			"default": 0,
			"type": "number",
			"description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "target_danceability",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Min Duration Ms",
			"name": "min_duration_ms",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_duration_ms",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Max Duration Ms",
			"name": "max_duration_ms",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_duration_ms",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Target Duration Ms",
			"name": "target_duration_ms",
			"default": 0,
			"type": "number",
			"description": "Target duration of the track (ms)",
			"routing": {
				"send": {
					"type": "query",
					"property": "target_duration_ms",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Min Energy",
			"name": "min_energy",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_energy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Max Energy",
			"name": "max_energy",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_energy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Target Energy",
			"name": "target_energy",
			"default": 0,
			"type": "number",
			"description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "target_energy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Min Instrumentalness",
			"name": "min_instrumentalness",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_instrumentalness",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Max Instrumentalness",
			"name": "max_instrumentalness",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_instrumentalness",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Target Instrumentalness",
			"name": "target_instrumentalness",
			"default": 0,
			"type": "number",
			"description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "target_instrumentalness",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Min Key",
			"name": "min_key",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Max Key",
			"name": "max_key",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Target Key",
			"name": "target_key",
			"default": 0,
			"type": "number",
			"description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "target_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Min Liveness",
			"name": "min_liveness",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_liveness",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Max Liveness",
			"name": "max_liveness",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_liveness",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Target Liveness",
			"name": "target_liveness",
			"default": 0,
			"type": "number",
			"description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "target_liveness",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Min Loudness",
			"name": "min_loudness",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_loudness",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Max Loudness",
			"name": "max_loudness",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_loudness",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Target Loudness",
			"name": "target_loudness",
			"default": 0,
			"type": "number",
			"description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "target_loudness",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Min Mode",
			"name": "min_mode",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_mode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Max Mode",
			"name": "max_mode",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_mode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Target Mode",
			"name": "target_mode",
			"default": 0,
			"type": "number",
			"description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "target_mode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Min Popularity",
			"name": "min_popularity",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_popularity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Max Popularity",
			"name": "max_popularity",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_popularity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Target Popularity",
			"name": "target_popularity",
			"default": 0,
			"type": "number",
			"description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "target_popularity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Min Speechiness",
			"name": "min_speechiness",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_speechiness",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Max Speechiness",
			"name": "max_speechiness",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_speechiness",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Target Speechiness",
			"name": "target_speechiness",
			"default": 0,
			"type": "number",
			"description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "target_speechiness",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Min Tempo",
			"name": "min_tempo",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_tempo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Max Tempo",
			"name": "max_tempo",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_tempo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Target Tempo",
			"name": "target_tempo",
			"default": 0,
			"type": "number",
			"description": "Target tempo (BPM)",
			"routing": {
				"send": {
					"type": "query",
					"property": "target_tempo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Min Time Signature",
			"name": "min_time_signature",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_time_signature",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Max Time Signature",
			"name": "max_time_signature",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_time_signature",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Target Time Signature",
			"name": "target_time_signature",
			"default": 0,
			"type": "number",
			"description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "target_time_signature",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Min Valence",
			"name": "min_valence",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "min_valence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Max Valence",
			"name": "max_valence",
			"default": 0,
			"type": "number",
			"description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "max_valence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "Target Valence",
			"name": "target_valence",
			"default": 0,
			"type": "number",
			"description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "target_valence",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Recommendations"
					]
				}
			}
		},
		{
			"displayName": "GET /tracks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Several Tracks"
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
						"Tracks"
					],
					"operation": [
						"Get Several Tracks"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"default": "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
			"type": "string",
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.\n",
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
						"Tracks"
					],
					"operation": [
						"Get Several Tracks"
					]
				}
			}
		},
		{
			"displayName": "GET /tracks/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Track"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "11dFghVXANMlKmJXsNCbNl",
			"type": "string",
			"description": "The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids)\nfor the track.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Tracks"
					],
					"operation": [
						"Get Track"
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
						"Tracks"
					],
					"operation": [
						"Get Track"
					]
				}
			}
		},
];
