function legthBytes (string) {
  dataType = JSON.stringify(string)
  return Buffer.byteLength(dataType)
}

module.exports = {
  legthBytes
}
