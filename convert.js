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

function getOneLineObject(object) {
  let str = `\n\t\t{`
  Object.keys(object).forEach(key => {
    str += getKeyValue(key, object[key]) + ", "
  })
  str = str.slice(0, str.length-2)
  str += `}`
  return str
}

function getKeyValue(key, value) {
  return `"${key}":${typeof value==="string" ? `"${value}"` : value}`
}

let json = `{`;
json += `\n\t"video_src": "${final.video_src}",`
json += `\n\t"pre_sections": [`
final.pre_sections.forEach(section => {
  json += getOneLineObject(section) + ","
})
json = json.slice(0, json.length-1)
json += `\n\t],`

json += `\n}`
console.log(json)
// console.log(JSON.stringify(final))
