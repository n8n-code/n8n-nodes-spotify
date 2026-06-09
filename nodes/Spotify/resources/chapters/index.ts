import type { INodeProperties } from 'n8n-workflow';

export const chaptersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Chapters"
					]
				}
			},
			"options": [
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
					"name": "Get Several Chapters",
					"value": "Get Several Chapters",
					"action": "Get Several Chapters\n",
					"description": "Get Spotify catalog information for several chapters identified by their Spotify IDs.<br />\n**Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chapters"
						}
					}
				},
				{
					"name": "Get A Chapter",
					"value": "Get A Chapter",
					"action": "Get a Chapter\n",
					"description": "Get Spotify catalog information for a single chapter.<br />\n**Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chapters/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
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
						"Chapters"
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
						"Chapters"
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
						"Chapters"
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
						"Chapters"
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
						"Chapters"
					],
					"operation": [
						"Get Audiobook Chapters"
					]
				}
			}
		},
		{
			"displayName": "GET /chapters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chapters"
					],
					"operation": [
						"Get Several Chapters"
					]
				}
			}
		},
		{
			"displayName": "Ids",
			"name": "ids",
			"required": true,
			"default": "0IsXVP0JmcB2adSE338GkK,3ZXb8FKZGU0EHALYX6uCzU,0D5wENdkdwbqlrHoaJ9g29",
			"type": "string",
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids). For example: `ids=0IsXVP0JmcB2adSE338GkK,3ZXb8FKZGU0EHALYX6uCzU`. Maximum: 50 IDs.\n",
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
						"Chapters"
					],
					"operation": [
						"Get Several Chapters"
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
						"Chapters"
					],
					"operation": [
						"Get Several Chapters"
					]
				}
			}
		},
		{
			"displayName": "GET /chapters/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chapters"
					],
					"operation": [
						"Get A Chapter"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "0D5wENdkdwbqlrHoaJ9g29",
			"type": "string",
			"description": "The [Spotify ID](/documentation/web-api/#spotify-uris-and-ids)\nfor the chapter.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Chapters"
					],
					"operation": [
						"Get A Chapter"
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
						"Chapters"
					],
					"operation": [
						"Get A Chapter"
					]
				}
			}
		},
];
