import type { INodeProperties } from 'n8n-workflow';

export const audiobooksDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Audiobooks"
					]
				}
			},
			"options": [
				{
					"name": "Get Multiple Audiobooks",
					"value": "Get Multiple Audiobooks",
					"action": "Get Several Audiobooks\n",
					"description": "Get Spotify catalog information for several audiobooks identified by their Spotify IDs.<br />\n**Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/audiobooks"
						}
					}
				},
				{
					"name": "Get An Audiobook",
					"value": "Get An Audiobook",
					"action": "Get an Audiobook\n",
					"description": "Get Spotify catalog information for a single audiobook.<br />\n**Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/audiobooks/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Get Audiobook Chapters",
					"value": "Get Audiobook Chapters",
					"action": "Get Audiobook Chapters\n",
					"description": "Get Spotify catalog information about an audiobook's chapters.<br />\n**Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/audiobooks/{{$parameter[\"id\"]}}/chapters"
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
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /audiobooks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audiobooks"
					],
					"operation": [
						"Get Multiple Audiobooks"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"default": "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
			"type": "string",
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.\n",
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
						"Audiobooks"
					],
					"operation": [
						"Get Multiple Audiobooks"
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
						"Audiobooks"
					],
					"operation": [
						"Get Multiple Audiobooks"
					]
				}
			}
		},
		{
			"displayName": "GET /audiobooks/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audiobooks"
					],
					"operation": [
						"Get An Audiobook"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "7iHfbu1YPACw6oZPAFJtqe",
			"type": "string",
			"description": "The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids)\nfor the audiobook.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Audiobooks"
					],
					"operation": [
						"Get An Audiobook"
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
						"Audiobooks"
					],
					"operation": [
						"Get An Audiobook"
					]
				}
			}
		},
		{
			"displayName": "GET /audiobooks/{id}/chapters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Audiobooks"
					],
					"operation": [
						"Get Audiobook Chapters"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "7iHfbu1YPACw6oZPAFJtqe",
			"type": "string",
			"description": "The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids)\nfor the audiobook.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Audiobooks"
					],
					"operation": [
						"Get Audiobook Chapters"
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
						"Audiobooks"
					],
					"operation": [
						"Get Audiobook Chapters"
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
						"Audiobooks"
					],
					"operation": [
						"Get Audiobook Chapters"
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
						"Audiobooks"
					],
					"operation": [
						"Get Audiobook Chapters"
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
						"Audiobooks"
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
			"default": "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
			"type": "string",
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.\n",
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
						"Audiobooks"
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
						"Audiobooks"
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
						"Audiobooks"
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
						"Audiobooks"
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
						"Audiobooks"
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
			"default": "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
			"type": "string",
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.\n",
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
						"Audiobooks"
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
						"Audiobooks"
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
			"default": "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
			"type": "string",
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.\n",
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
						"Audiobooks"
					],
					"operation": [
						"Check Users Saved Audiobooks"
					]
				}
			}
		},
];
