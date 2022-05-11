function removeProperty(obj, prop) {
    let objectHasProperty = obj.hasOwnProperty(prop)

    if(objectHasProperty){
        delete obj[prop]
        return true
    }
    return false

  }