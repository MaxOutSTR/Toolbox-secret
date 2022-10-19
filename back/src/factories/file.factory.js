const fileFactory = (file) => {
  let lines = file.split(/\r?\n|\r|\n/g)
  lines.shift()
  lines = lines.map((line) => {
    return line.split(',')
  })
  lines = lines.map((line) => {
    return line.filter(x => x !== '')
  })
  lines = lines.filter(line => line.length === 4)
  if (lines.length === 0) return undefined
  const fileObj = {
    file: lines[0][0],
    lines: lines.map((line) => {
      return ({
        text: line[1],
        number: line[2],
        hex: line[3]
      })
    })
  }
  return fileObj
}

module.exports = { fileFactory }
