migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("znm0tijgbxkhjb0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ygluuh5h",
    "name": "item",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("znm0tijgbxkhjb0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ygluuh5h",
    "name": "array",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
