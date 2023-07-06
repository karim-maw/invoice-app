migrate((db) => {
  const collection = new Collection({
    "id": "kyvze3osu1u7t6n",
    "created": "2023-07-05 15:31:13.376Z",
    "updated": "2023-07-05 15:31:13.376Z",
    "name": "newInvoice",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "enwq961c",
        "name": "invoice",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "znm0tijgbxkhjb0",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "oroftqgx",
        "name": "array",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kyvze3osu1u7t6n");

  return dao.deleteCollection(collection);
})
