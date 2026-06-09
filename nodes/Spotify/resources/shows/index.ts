import type { INodeProperties } from 'n8n-workflow';

export const showsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					]
				}
			},
			"options": [
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
					"name": "Get Multiple Shows",
					"value": "Get Multiple Shows",
					"action": "Get Several Shows\n",
					"description": "Get Spotify catalog information for several shows based on their Spotify IDs.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows"
						}
					}
				},
				{
					"name": "Get A Show",
					"value": "Get A Show",
					"action": "Get Show\n",
					"description": "Get Spotify catalog information for a single show identified by its\nunique Spotify ID.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shows/{{$parameter[\"id\"]}}"
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
						"Shows"
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
			"default": "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
			"type": "string",
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids) for the shows. Maximum: 50 IDs.\n",
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
						"Shows"
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
						"Shows"
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
						"Shows"
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
						"Shows"
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
						"Shows"
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
						"Shows"
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
			"default": "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
			"type": "string",
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids) for the shows. Maximum: 50 IDs.\n",
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
						"Shows"
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
						"Shows"
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
			"default": "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
			"type": "string",
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids) for the shows. Maximum: 50 IDs.\n",
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
						"Shows"
					],
					"operation": [
						"Check Users Saved Shows"
					]
				}
			}
		},
		{
			"displayName": "GET /shows",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get Multiple Shows"
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
						"Shows"
					],
					"operation": [
						"Get Multiple Shows"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"default": "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
			"type": "string",
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids) for the shows. Maximum: 50 IDs.\n",
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
						"Shows"
					],
					"operation": [
						"Get Multiple Shows"
					]
				}
			}
		},
		{
			"displayName": "GET /shows/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get A Show"
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
						"Shows"
					],
					"operation": [
						"Get A Show"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "38bS44xjbVVZ3No3ByF1dJ",
			"type": "string",
			"description": "The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids)\nfor the show.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
					],
					"operation": [
						"Get A Show"
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
						"Shows"
					],
					"operation": [
						"Get A Shows Episodes"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "38bS44xjbVVZ3No3ByF1dJ",
			"type": "string",
			"description": "The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids)\nfor the show.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Shows"
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
						"Shows"
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
						"Shows"
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
						"Shows"
					],
					"operation": [
						"Get A Shows Episodes"
					]
				}
			}
		},
];
