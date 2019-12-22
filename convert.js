pre_sections.forEach((section, index) => {
  pre_sections[index] = {
    measures: section[0],
    counts: section[1],
    text: section[2],
  }
})


pre_comments.forEach((comment, index) => {
  pre_comments[index] = {
    startCount: comment[0],
    endCount: comment[1],
    text: comment[2],
  }
})

models.forEach(function(model, modelIndex) {
  model.pre_moves.forEach(function(move, moveIndex) {
    //if the move is a string
    delete models[modelIndex].moves
    if(typeof move[1] == "string") {
      models[modelIndex].pre_moves[moveIndex] = {
        count: move[0],
        type: move[1]
      }
    }
    //otherwise the type is custom
    else {
      models[modelIndex].pre_moves[moveIndex] = {
        count: move[0],
        dx: move[1],
        dy: move[2],
        type: move[3] || ""
      }
    }
  })
})


const final = {
  video_src: video_src,
  pre_sections: pre_sections,
  pre_comments: pre_comments,
  models: models,
}
console.log(final)


function customPrettyPrint(object={}, numTabs=0, expandedLevels=0) {
  let str = `${getThisManyStrs("\t", numTabs)}{`;
  for(let field in object) {
    const numExpandedLevels = expandedLevels[field] || expandedLevels || 0
    str += "\n" + getKeyValue(field, object[field], numTabs+1, numExpandedLevels) + ","
  }
  str = str.slice(0, str.length-2)
  return str + `\n${getThisManyStrs("\t", numTabs)}}`
}

function getOneLineObject(object, numTabs) {
  let str = `\n` + getThisManyStrs(`\t`, numTabs)
  str += `{`
  Object.keys(object).forEach(key => {
    str += getKeyValue(key, object[key], 0) + ", "
  })
  str = str.slice(0, str.length-2)
  str += `}`
  return str
}

function getThisManyStrs(str, number) {
  let string = ""
  for(let num=0; num<number; ++num) {
    string += str
  }
  return string
}

function getKeyValue(key, value, numTabs, numExpandedLevels) {
  let str = getThisManyStrs(`\t`, numTabs)
  if(key!==undefined && key!==null) {
    str += `"${key}":`
  }

  if(typeof value === "string") {
    return str + `"${value}"`
  }
  else if(typeof value === "number") {
    return str + value
  }
  else if(Array.isArray(value)) {
    str += `[`
    value.forEach(section => {
      str += getKeyValue(null, section, numTabs, numExpandedLevels-1) + ","
    })
    str = str.slice(0, str.length-1)
    str += `\n${getThisManyStrs(`\t`, numTabs)}]`
    return str
  }
  else if(typeof value === "object") {
    if(numExpandedLevels > 0) {
      str += "\n" + customPrettyPrint(value, numTabs+1, numExpandedLevels)
    }
    else {
      str += getOneLineObject(value, numTabs+1)
    }
  }

  return `${str}`
}

let str = customPrettyPrint(final, 0, {
  video_src: 1,
  pre_sections: 1,
  pre_comments: 1,
  models: 2,
})
console.log(str)
console.log(JSON.parse(str))
