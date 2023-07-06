migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kyvze3osu1u7t6n")

  // remove
  collection.schema.removeField("enwq961c")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kyvze3osu1u7t6n")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
