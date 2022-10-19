const express = require('express')
const { listFiles, getFile } = require('../services/external.api')
const { fileFactory } = require('../factories/file.factory')
const router = express.Router()

// Routes
router.get('/list', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  listFiles().then((response) => {
    res.json(response.data)
  })
})

const singleFile = async (req, res, next) => {
  if (!req.query.fileName) {
    next()
    return
  }
  res.setHeader('Content-Type', 'application/json')
  try {
    const fileReq = (await getFile(req.query.fileName))
    const fileObj = fileFactory(fileReq.data)
    res.json(fileObj)
  } catch (ex) {
    res.status(ex.response.status)
    res.json({
      code: ex.response.data.code,
      message: ex.response.data.message,
      status: ex.response.data.status,
      details: ex.response.data.details
    })
  }
}

router.get('/data', singleFile, async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const fileList = (await (listFiles()))?.data?.files
  if (!fileList) return ([])

  const files = []
  for (const file of fileList) {
    try {
      const fileContent = (await getFile(file)).data
      const fileObj = fileFactory(fileContent)
      if (fileObj) {
        files.push(fileObj)
      }
    } catch (ex) {
    }
  }
  res.json(files)
})

module.exports = router
