import type { INodeProperties } from 'n8n-workflow';

export const episodesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					]
				}
			},
			"options": [
				{
					"name": "Get Multiple Episodes",
					"value": "Get Multiple Episodes",
					"action": "Get Several Episodes\n",
					"description": "Get Spotify catalog information for several episodes based on their Spotify IDs.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/episodes"
						}
					}
				},
				{
					"name": "Get An Episode",
					"value": "Get An Episode",
					"action": "Get Episode\n",
					"description": "Get Spotify catalog information for a single episode identified by its\nunique Spotify ID.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/episodes/{{$parameter[\"id\"]}}"
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
					"name": "Get A Shows Episodes",
					"value": "Get A Shows Episodes",
					"action": "Get Show Episodes\n",
					"description": "Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}/episodes"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /episodes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get Multiple Episodes"
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
						"Episodes"
					],
					"operation": [
						"Get Multiple Episodes"
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
						"Episodes"
					],
					"operation": [
						"Get Multiple Episodes"
					]
				}
			}
		},
		{
			"displayName": "GET /episodes/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get An Episode"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids) for the episode.",
			"default": "512ojhOuo1ktJprKbVcKyQ",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get An Episode"
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
						"Episodes"
					],
					"operation": [
						"Get An Episode"
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
						"Episodes"
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
						"Episodes"
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
						"Episodes"
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
						"Episodes"
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
						"Episodes"
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
						"Episodes"
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
						"Episodes"
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
						"Episodes"
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
						"Episodes"
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
						"Episodes"
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
						"Episodes"
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
						"Episodes"
					],
					"operation": [
						"Check Users Saved Episodes"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}/episodes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get A Shows Episodes"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids)\nfor the show.\n",
			"default": "38bS44xjbVVZ3No3ByF1dJ",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Episodes"
					],
					"operation": [
						"Get A Shows Episodes"
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
						"Episodes"
					],
					"operation": [
						"Get A Shows Episodes"
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
						"Episodes"
					],
					"operation": [
						"Get A Shows Episodes"
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
						"Episodes"
					],
					"operation": [
						"Get A Shows Episodes"
					]
				}
			}
		},
];
