import type { INodeProperties } from 'n8n-workflow';

export const playlistsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Playlists"
					]
				}
			},
			"options": [
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
				},
				{
					"name": "Get Featured Playlists",
					"value": "Get Featured Playlists",
					"action": "Get Featured Playlists\n",
					"description": "Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/browse/featured-playlists"
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
					"name": "Get Playlist",
					"value": "Get Playlist",
					"action": "Get Playlist\n",
					"description": "Get a playlist owned by a Spotify user.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playlists/{{$parameter[\"playlist_id\"]}}"
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
					"name": "Get Playlist Cover",
					"value": "Get Playlist Cover",
					"action": "Get Playlist Cover Image\n",
					"description": "Get the current image associated with a specific playlist.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playlists/{{$parameter[\"playlist_id\"]}}/images"
						}
					}
				},
				{
					"name": "Upload Custom Playlist Cover",
					"value": "Upload Custom Playlist Cover",
					"action": "Add Custom Playlist Cover Image\n",
					"description": "Replace the image used to represent a specific playlist.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/playlists/{{$parameter[\"playlist_id\"]}}/images"
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
						"Playlists"
					],
					"operation": [
						"Get A Categories Playlists"
					]
				}
			}
		},
		{
			"displayName": "Category Id",
			"name": "category_id",
			"required": true,
			"description": "The [Spotify category ID](/documentation/web-api/#spotify-uris-and-ids) for the category.\n",
			"default": "dinner",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Playlists"
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
			"description": "A country: an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Provide this parameter to ensure that the category exists for a particular country.\n",
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
						"Playlists"
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
						"Playlists"
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
						"Playlists"
					],
					"operation": [
						"Get A Categories Playlists"
					]
				}
			}
		},
		{
			"displayName": "GET /browse/featured-playlists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Playlists"
					],
					"operation": [
						"Get Featured Playlists"
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
						"Playlists"
					],
					"operation": [
						"Get Featured Playlists"
					]
				}
			}
		},
		{
			"displayName": "Locale",
			"name": "locale",
			"description": "The desired language, consisting of a lowercase [ISO 639-1 language code](http://en.wikipedia.org/wiki/ISO_639-1) and an uppercase [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning \"Spanish (Mexico)\". Provide this parameter if you want the results returned in a particular language (where available). <br/>\n_**Note**: if `locale` is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). The `locale` parameter, combined with the `country` parameter, may give odd results if not carefully matched. For example `country=SE&locale=de_DE` will return a list of categories relevant to Sweden but as German language strings._\n",
			"default": "sv_SE",
			"type": "string",
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
						"Playlists"
					],
					"operation": [
						"Get Featured Playlists"
					]
				}
			}
		},
		{
			"displayName": "Timestamp",
			"name": "timestamp",
			"description": "A timestamp in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601): `yyyy-MM-ddTHH:mm:ss`. Use this parameter to specify the user's local time to get results tailored for that specific date and time in the day. If not provided, the response defaults to the current UTC time. Example: \"2014-10-23T09:00:00\" for a user whose local time is 9AM. If there were no featured playlists (or there is no data) at the specified time, the response will revert to the current UTC time.\n",
			"default": "2014-10-23T09:00:00",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "timestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Playlists"
					],
					"operation": [
						"Get Featured Playlists"
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
						"Playlists"
					],
					"operation": [
						"Get Featured Playlists"
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
						"Playlists"
					],
					"operation": [
						"Get Featured Playlists"
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
						"Playlists"
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
						"Playlists"
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
						"Playlists"
					],
					"operation": [
						"Get A List Of Current Users Playlists"
					]
				}
			}
		},
		{
			"displayName": "GET /playlists/{playlist_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Playlists"
					],
					"operation": [
						"Get Playlist"
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
						"Playlists"
					],
					"operation": [
						"Get Playlist"
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
						"Playlists"
					],
					"operation": [
						"Get Playlist"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "Filters for the query: a comma-separated list of the\nfields to return. If omitted, all fields are returned. For example, to get\njust the playlist''s description and URI: `fields=description,uri`. A dot\nseparator can be used to specify non-reoccurring fields, while parentheses\ncan be used to specify reoccurring fields within objects. For example, to\nget just the added date and user ID of the adder: `fields=tracks.items(added_at,added_by.id)`.\nUse multiple parentheses to drill down into nested objects, for example: `fields=tracks.items(track(name,href,album(name,href)))`.\nFields can be excluded by prefixing them with an exclamation mark, for example:\n`fields=tracks.items(track(name,href,album(!name,href)))`\n",
			"default": "items(added_by.id,track(name,href,album(name,href)))",
			"type": "string",
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
						"Playlists"
					],
					"operation": [
						"Get Playlist"
					]
				}
			}
		},
		{
			"displayName": "Additional Types",
			"name": "additional_types",
			"description": "A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/>\n_**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/>\nIn addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.\n",
			"default": "",
			"type": "string",
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
						"Playlists"
					],
					"operation": [
						"Get Playlist"
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
						"Playlists"
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
						"Playlists"
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
						"Playlists"
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
						"Playlists"
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
						"Playlists"
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
						"Playlists"
					],
					"operation": [
						"Change Playlist Details"
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
						"Playlists"
					],
					"operation": [
						"Unfollow Playlist"
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
						"Playlists"
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
						"Playlists"
					],
					"operation": [
						"Follow Playlist"
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
						"Playlists"
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
						"Playlists"
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
						"Playlists"
					],
					"operation": [
						"Check If User Follows Playlist"
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
						"Playlists"
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
			"description": "A comma-separated list of [Spotify User IDs](/documentation/web-api/#spotify-uris-and-ids) ; the ids of the users that you want to check to see if they follow the playlist. Maximum: 5 ids.\n",
			"default": "jmperezperez,thelinmichael,wizzler",
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
						"Playlists"
					],
					"operation": [
						"Check If User Follows Playlist"
					]
				}
			}
		},
		{
			"displayName": "GET /playlists/{playlist_id}/images",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Playlists"
					],
					"operation": [
						"Get Playlist Cover"
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
						"Playlists"
					],
					"operation": [
						"Get Playlist Cover"
					]
				}
			}
		},
		{
			"displayName": "PUT /playlists/{playlist_id}/images",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Playlists"
					],
					"operation": [
						"Upload Custom Playlist Cover"
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
						"Playlists"
					],
					"operation": [
						"Upload Custom Playlist Cover"
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
						"Playlists"
					],
					"operation": [
						"Remove Tracks Playlist"
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
						"Playlists"
					],
					"operation": [
						"Remove Tracks Playlist"
					]
				}
			}
		},
		{
			"displayName": "Snapshot Id",
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
						"Playlists"
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
						"Playlists"
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
						"Playlists"
					],
					"operation": [
						"Get Playlists Tracks"
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
						"Playlists"
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
						"Playlists"
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
			"description": "Filters for the query: a comma-separated list of the\nfields to return. If omitted, all fields are returned. For example, to get\njust the total number of items and the request limit:<br/>`fields=total,limit`<br/>A\ndot separator can be used to specify non-reoccurring fields, while parentheses\ncan be used to specify reoccurring fields within objects. For example, to\nget just the added date and user ID of the adder:<br/>`fields=items(added_at,added_by.id)`<br/>Use\nmultiple parentheses to drill down into nested objects, for example:<br/>`fields=items(track(name,href,album(name,href)))`<br/>Fields\ncan be excluded by prefixing them with an exclamation mark, for example:<br/>`fields=items.track.album(!external_urls,images)`\n",
			"default": "items(added_by.id,track(name,href,album(name,href)))",
			"type": "string",
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
						"Playlists"
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
						"Playlists"
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
						"Playlists"
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
			"description": "A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/>\n_**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/>\nIn addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.\n",
			"default": "",
			"type": "string",
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
						"Playlists"
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
						"Playlists"
					],
					"operation": [
						"Add Tracks To Playlist"
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
						"Playlists"
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
			"description": "The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0`; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they are listed in the query string or request body.\n",
			"default": 0,
			"type": "number",
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
						"Playlists"
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
			"description": "A comma-separated list of [Spotify URIs](/documentation/web-api/#spotify-uris-and-ids) to add, can be track or episode URIs. For example:<br/>`uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:track:1301WleyT98MSxVHPZCA6M, spotify:episode:512ojhOuo1ktJprKbVcKyQ`<br/>A maximum of 100 items can be added in one request. <br/>\n_**Note**: it is likely that passing a large number of item URIs as a query parameter will exceed the maximum length of the request URI. When adding a large number of items, it is recommended to pass them in the request body, see below._\n",
			"default": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M",
			"type": "string",
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
						"Playlists"
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
						"Playlists"
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
						"Playlists"
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
						"Playlists"
					],
					"operation": [
						"Reorder Or Replace Playlists Tracks"
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
						"Playlists"
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
			"description": "A comma-separated list of [Spotify URIs](/documentation/web-api/#spotify-uris-and-ids) to set, can be track or episode URIs. For example: `uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M,spotify:episode:512ojhOuo1ktJprKbVcKyQ`<br/>A maximum of 100 items can be set in one request.\n",
			"default": "",
			"type": "string",
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
						"Playlists"
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
						"Playlists"
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
						"Playlists"
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
						"Playlists"
					],
					"operation": [
						"Reorder Or Replace Playlists Tracks"
					]
				}
			}
		},
		{
			"displayName": "Snapshot Id",
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
						"Playlists"
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
						"Playlists"
					],
					"operation": [
						"Reorder Or Replace Playlists Tracks"
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
						"Playlists"
					],
					"operation": [
						"Get List Users Playlists"
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
						"Playlists"
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
						"Playlists"
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
			"description": "The index of the first playlist to return. Default:\n0 (the first object). Maximum offset: 100.000\\. Use with `limit` to get the\nnext set of playlists.\n",
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
						"Playlists"
					],
					"operation": [
						"Get List Users Playlists"
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
						"Playlists"
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
						"Playlists"
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
						"Playlists"
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
						"Playlists"
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
						"Playlists"
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
						"Playlists"
					],
					"operation": [
						"Create Playlist"
					]
				}
			}
		},
];
