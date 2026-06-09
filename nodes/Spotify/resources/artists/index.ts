import type { INodeProperties } from 'n8n-workflow';

export const artistsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Artists"
					]
				}
			},
			"options": [
				{
					"name": "Get Multiple Artists",
					"value": "Get Multiple Artists",
					"action": "Get Several Artists\n",
					"description": "Get Spotify catalog information for several artists based on their Spotify IDs.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/artists"
						}
					}
				},
				{
					"name": "Get An Artist",
					"value": "Get An Artist",
					"action": "Get Artist\n",
					"description": "Get Spotify catalog information for a single artist identified by their unique Spotify ID.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/artists/{{$parameter[\"id\"]}}"
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
					"name": "Get An Artists Related Artists",
					"value": "Get An Artists Related Artists",
					"action": "Get Artist's Related Artists\n",
					"description": "Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's [listening history](http://news.spotify.com/se/2010/02/03/related-artists/).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/artists/{{$parameter[\"id\"]}}/related-artists"
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
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /artists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Artists"
					],
					"operation": [
						"Get Multiple Artists"
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
			"description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/#spotify-uris-and-ids) for the artists. Maximum: 50 IDs.\n",
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
						"Artists"
					],
					"operation": [
						"Get Multiple Artists"
					]
				}
			}
		},
		{
			"displayName": "GET /artists/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Artists"
					],
					"operation": [
						"Get An Artist"
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
						"Artists"
					],
					"operation": [
						"Get An Artist"
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
						"Artists"
					],
					"operation": [
						"Get An Artists Albums"
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
						"Artists"
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
			"default": "single,appears_on",
			"type": "string",
			"description": "A comma-separated list of keywords that will be used to filter the response. If not supplied, all album types will be returned. <br/>\nValid values are:<br/>- `album`<br/>- `single`<br/>- `appears_on`<br/>- `compilation`<br/>For example: `include_groups=album,single`.\n",
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
						"Artists"
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
						"Artists"
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
						"Artists"
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
						"Artists"
					],
					"operation": [
						"Get An Artists Albums"
					]
				}
			}
		},
		{
			"displayName": "GET /artists/{id}/related-artists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Artists"
					],
					"operation": [
						"Get An Artists Related Artists"
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
						"Artists"
					],
					"operation": [
						"Get An Artists Related Artists"
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
						"Artists"
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
						"Artists"
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
						"Artists"
					],
					"operation": [
						"Get An Artists Top Tracks"
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
						"Artists"
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
						"Artists"
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
						"Artists"
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
						"Artists"
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
						"Artists"
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
						"Artists"
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
						"Artists"
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
						"Artists"
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
						"Artists"
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
						"Artists"
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
						"Artists"
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
						"Artists"
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
						"Artists"
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
						"Artists"
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
						"Artists"
					],
					"operation": [
						"Check Current User Follows"
					]
				}
			}
		},
];
