import type { INodeProperties } from 'n8n-workflow';

export const categoriesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					]
				}
			},
			"options": [
				{
					"name": "Get Categories",
					"value": "Get Categories",
					"action": "Get Several Browse Categories\n",
					"description": "Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/browse/categories"
						}
					}
				},
				{
					"name": "Get A Category",
					"value": "Get A Category",
					"action": "Get Single Browse Category\n",
					"description": "Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/browse/categories/{{$parameter[\"category_id\"]}}"
						}
					}
				},
				{
					"name": "Get A Categories Playlists",
					"value": "Get A Categories Playlists",
					"action": "Get Category's Playlists\n",
					"description": "Get a list of Spotify playlists tagged with a particular category.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/browse/categories/{{$parameter[\"category_id\"]}}/playlists"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /browse/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Get Categories"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"default": "SE",
			"type": "string",
			"description": "A country: an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Provide this parameter if you want to narrow the list of returned categories to those relevant to a particular country. If omitted, the returned items will be globally relevant.\n",
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
						"Categories"
					],
					"operation": [
						"Get Categories"
					]
				}
			}
		},
		{
			"displayName": "Locale",
			"name": "locale",
			"default": "sv_SE",
			"type": "string",
			"description": "The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning \"Spanish (Mexico)\". Provide this parameter if you want the category metadata returned in a particular language. <br/>\n_**Note**: if `locale` is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). The `locale` parameter, combined with the `country` parameter, may give odd results if not carefully matched. For example `country=SE&locale=de_DE` will return a list of categories relevant to Sweden but as German language strings._\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "locale",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Get Categories"
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
						"Categories"
					],
					"operation": [
						"Get Categories"
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
						"Categories"
					],
					"operation": [
						"Get Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /browse/categories/{category_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Get A Category"
					]
				}
			}
		},
		{
			"displayName": "Category ID",
			"name": "category_id",
			"required": true,
			"default": "dinner",
			"type": "string",
			"description": "The [Spotify category ID](/documentation/web-api/#spotify-uris-and-ids) for the category.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Get A Category"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"default": "SE",
			"type": "string",
			"description": "A country: an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Provide this parameter to ensure that the category exists for a particular country.\n",
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
						"Categories"
					],
					"operation": [
						"Get A Category"
					]
				}
			}
		},
		{
			"displayName": "Locale",
			"name": "locale",
			"default": "sv_SE",
			"type": "string",
			"description": "The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning &quot;Spanish (Mexico)&quot;. Provide this parameter if you want the category strings returned in a particular language.<br/> _**Note**: if `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._\n",
			"routing": {
				"send": {
					"type": "query",
					"property": "locale",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Get A Category"
					]
				}
			}
		},
		{
			"displayName": "GET /browse/categories/{category_id}/playlists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Get A Categories Playlists"
					]
				}
			}
		},
		{
			"displayName": "Category ID",
			"name": "category_id",
			"required": true,
			"default": "dinner",
			"type": "string",
			"description": "The [Spotify category ID](/documentation/web-api/#spotify-uris-and-ids) for the category.\n",
			"displayOptions": {
				"show": {
					"resource": [
						"Categories"
					],
					"operation": [
						"Get A Categories Playlists"
					]
				}
			}
		},
		{
			"displayName": "Country",
			"name": "country",
			"default": "SE",
			"type": "string",
			"description": "A country: an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Provide this parameter to ensure that the category exists for a particular country.\n",
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
						"Categories"
					],
					"operation": [
						"Get A Categories Playlists"
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
						"Categories"
					],
					"operation": [
						"Get A Categories Playlists"
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
						"Categories"
					],
					"operation": [
						"Get A Categories Playlists"
					]
				}
			}
		},
];
