// pre_sections.forEach((section, index) => {
//   pre_sections[index] = {
//     measures: section[0],
//     counts: section[1],
//     text: section[2],
//   }
// })
//
//
// pre_comments.forEach((comment, index) => {
//   pre_comments[index] = {
//     startCount: comment[0],
//     endCount: comment[1],
//     text: comment[2],
//   }
// })
//
// models.forEach(function(model, modelIndex) {
//   models[modelIndex].start = typeof model.start==="string" ? model.start : {
//     x: model.start[0],
//     y: model.start[1]
//   }
//   model.pre_moves.forEach(function(move, moveIndex) {
//     //if the move is a string
//     delete models[modelIndex].moves
//     if(typeof move[1] == "string") {
//       models[modelIndex].pre_moves[moveIndex] = {
//         counts: move[0],
//         type: move[1]
//       }
//     }
//     //otherwise the type is custom
//     else {
//       models[modelIndex].pre_moves[moveIndex] = {
//         counts: move[0],
//         dx: move[1],
//         dy: move[2],
//         type: move[3] || ""
//       }
//     }
//   })
// })


const final = {
  video_src: video_src,
  pre_sections: pre_sections,
  pre_comments: pre_comments,
  models: models,
}
console.log(final)


function customPrettyPrint(object={}, numTabs=0, expandedLevels=0) {
  let addedKeys = false
  let str = `${getThisManyStrs("\t", numTabs)}{` //opening bracket
  for(let field in object) { //loop through all fields and get key values
    addedKeys = true
    const numExpandedLevels = expandedLevels[field] || expandedLevels || 0 //TODO generalize this to pass objects down
    str += "\n" + getKeyValue(field, object[field], numTabs+1, numExpandedLevels) + ","
  }
  if(addedKeys) { //if the object is not empty
    str = str.slice(0, str.length-1) //remove last comma
  }
  return str + `\n${getThisManyStrs("\t", numTabs)}}` //add closing bracket
}

function getKeyValue(key, value, numTabs, numExpandedLevels) {
  let str = getThisManyStrs(`\t`, numTabs) //start with tabs
  if(key!==undefined && key!==null) { //if there is a key (eg not an array key), use it
    str += `"${key}":`
  }

  if(typeof value === "string") {
    return str + `"${value}"` //add quotes if this is a string
  }
  else if(typeof value === "number") {
    return str + value
  }
  else if(Array.isArray(value)) {
    let addedElements = false
    str += `[` //opening bracket
    value.forEach(section => {
      addedElements = true
      str += getKeyValue(null, section, numTabs, numExpandedLevels-1) + "," //get each value without any keys
    })
    if(addedElements) { //if the array is not empty
      str = str.slice(0, str.length-1) //remove last comma
    }
    str += `\n${getThisManyStrs(`\t`, numTabs)}]` //add closing bracket
    return str
  }
  else if(typeof value === "object") {
    if(numExpandedLevels > 0) { //if we still want to expand, run custom pretty print
      str += "\n" + customPrettyPrint(value, numTabs+1, numExpandedLevels)
    }
    else {
      str += getOneLineObject(value, numTabs+1) //else get the object on one line
    }
  }

  return `${str}`
}

function getOneLineObject(object, numTabs) {
  let addedKeys = false
  let str = `\n` + getThisManyStrs(`\t`, numTabs) //get tabs
  str += `{` //opening bracket
  Object.keys(object).forEach(key => {
    addedKeys = true
    str += getKeyValue(key, object[key], 0) + ", " //get keys and values on one line
  })
  if(addedKeys) { //if the object is not empty
    str = str.slice(0, str.length-2) //remove last comma
  }
  str += `}` //closing bracket
  return str
}

function getThisManyStrs(str, number) {
  let string = ""
  for(let num=0; num<number; ++num) {
    string += str
  }
  return string
}



let str = customPrettyPrint(final, 0, {
  video_src: 1,
  pre_sections: 1,
  pre_comments: 1,
  models: 2,
})
console.log(str)
console.log(JSON.parse(str))
