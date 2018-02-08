

var recipes = {

}

function updateObjectWithKeyAndValue(obj, key, value) {

  var obj = { prop: 1 }


    return Object.assign({}, obj, { ['prop2']: 2 })

}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {


  obj['prop2'] = 2
  return obj

}

function deleteFromObjectByKey(object, key) {

  var obj = { prop: 1 }

  var newObj = obj['prop']

  return newObj // { prop: 1 }

  delete newObj.prop // true

  return newObj // {}

  return obj // { prop: 1 }


}

function destructivelyDeleteFromObjectByKey(object, key) {
  var obj = { prop: 1 }


  var newObj = obj['prop']
  delete newObj['prop']
  return newObj

  delete obj.prop
  return obj
  obj['prop'] = 2
  return obj
}
