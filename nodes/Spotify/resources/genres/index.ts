import type { INodeProperties } from 'n8n-workflow';

export const genresDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Genres"
					]
				}
			},
			"options": [
				{
					"name": "Get Recommendation Genres",
					"value": "Get Recommendation Genres",
					"action": "Get Available Genre Seeds\n",
					"description": "Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/#/operations/get-recommendations).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/recommendations/available-genre-seeds"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /recommendations/available-genre-seeds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Genres"
					],
					"operation": [
						"Get Recommendation Genres"
					]
				}
			}
		},
];
