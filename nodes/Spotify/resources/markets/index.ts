import type { INodeProperties } from 'n8n-workflow';

export const marketsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					]
				}
			},
			"options": [
				{
					"name": "Get Available Markets",
					"value": "Get Available Markets",
					"action": "Get Available Markets\n",
					"description": "Get the list of markets where Spotify is available.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/markets"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /markets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Markets"
					],
					"operation": [
						"Get Available Markets"
					]
				}
			}
		},
];
