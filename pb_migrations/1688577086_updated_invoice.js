migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("znm0tijgbxkhjb0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pkycigdq",
    "name": "client_name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7morl1q0",
    "name": "client_email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tmx3ntwc",
    "name": "client_desc",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("znm0tijgbxkhjb0")

  // remove
  collection.schema.removeField("pkycigdq")

  // remove
  collection.schema.removeField("7morl1q0")

  // remove
  collection.schema.removeField("tmx3ntwc")

  return dao.saveCollection(collection)
})
