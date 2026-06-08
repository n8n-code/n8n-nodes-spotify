import type { INodeProperties } from 'n8n-workflow';

export const albumsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Albums"
					]
				}
			},
			"options": [
				{
					"name": "Get Multiple Albums",
					"value": "Get Multiple Albums",
					"action": "Get Several Albums\n",
					"description": "Get Spotify catalog information for multiple albums identified by their Spotify IDs.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/albums"
						}
					}
				},
				{
					"name": "Get An Album",
					"value": "Get An Album",
					"action": "Get Album\n",
					"description": "Get Spotify catalog information for a single album.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/albums/{{$parameter[\"id\"]}}"
						}
					}
				},
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
					"name": "Get An Artists Albums",
					"value": "Get An Artists Albums",
					"action": "Get Artist's Albums\n",
					"description": "Get Spotify catalog information about an artist's albums.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/artists/{{$parameter[\"id\"]}}/albums"
						}
					}
				},
				{
					"name": "Get New Releases",
					"value": "Get New Releases",
					"action": "Get New Releases\n",
					"description": "Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/browse/new-releases"
						}
					}
				},
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
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /albums",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Albums"
					],
					"operation": [
						"Get Multiple Albums"
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
						"Albums"
					],
					"operation": [
						"Get Multiple Albums"
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
						"Albums"
					],
					"operation": [
						"Get Multiple Albums"
					]
				}
			}
		},
		{
			"displayName": "GET /albums/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Albums"
					],
					"operation": [
						"Get An Album"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) of the album.\n",
			"default": "4aawyAB9vmqN3uQ7FjRGTy",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Albums"
					],
					"operation": [
						"Get An Album"
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
						"Albums"
					],
					"operation": [
						"Get An Album"
					]
				}
			}
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
						"Albums"
					],
					"operation": [
						"Get An Albums Tracks"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) of the album.\n",
			"default": "4aawyAB9vmqN3uQ7FjRGTy",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Albums"
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
						"Albums"
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
						"Albums"
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
						"Albums"
					],
					"operation": [
						"Get An Albums Tracks"
					]
				}
			}
		},
		{
			"displayName": "GET /artists/{id}/albums",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Albums"
					],
					"operation": [
						"Get An Artists Albums"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) of the artist.\n",
			"default": "0TnOYISbd1XYRBk9myaseg",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Albums"
					],
					"operation": [
						"Get An Artists Albums"
					]
				}
			}
		},
		{
			"displayName": "Include Groups",
			"name": "include_groups",
			"description": "A comma-separated list of keywords that will be used to filter the response. If not supplied, all album types will be returned. <br/>\nValid values are:<br/>- `album`<br/>- `single`<br/>- `appears_on`<br/>- `compilation`<br/>For example: `include_groups=album,single`.\n",
			"default": "single,appears_on",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "include_groups",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Albums"
					],
					"operation": [
						"Get An Artists Albums"
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
						"Albums"
					],
					"operation": [
						"Get An Artists Albums"
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
						"Albums"
					],
					"operation": [
						"Get An Artists Albums"
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
						"Albums"
					],
					"operation": [
						"Get An Artists Albums"
					]
				}
			}
		},
		{
			"displayName": "GET /browse/new-releases",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Albums"
					],
					"operation": [
						"Get New Releases"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"description": "A country: an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Provide this parameter if you want the list of returned items to be relevant to a particular country. If omitted, the returned items will be relevant to all countries.\n",
			"default": "SE",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "country",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Albums"
					],
					"operation": [
						"Get New Releases"
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
						"Albums"
					],
					"operation": [
						"Get New Releases"
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
						"Albums"
					],
					"operation": [
						"Get New Releases"
					]
				}
			}
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
						"Albums"
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
						"Albums"
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
						"Albums"
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
						"Albums"
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
						"Albums"
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
						"Albums"
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
						"Albums"
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
						"Albums"
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
						"Albums"
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
						"Albums"
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
						"Albums"
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
						"Albums"
					],
					"operation": [
						"Check Users Saved Albums"
					]
				}
			}
		},
];
