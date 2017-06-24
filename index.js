var assert = require('assert')

module.exports = formDataToObject

function formDataToObject (formData) {
  if (typeof formData === 'object' && formData.nodeName === 'FORM') {
    formData = new window.FormData(formData)
  }

  assert.ok(formData instanceof window.formData, 'formdata-to-object: formData should be an instance of window.FormData')

  var result = {}
  var iterator = formData.entries()
  var entry = iterator.next()
  var value = entry.value
  while (true) {
    if (Array.isArray(value) && value.length === 2) {
      result[value[0]] = value[1]
    }
    if (entry.done) break
    entry = iterator.next()
    value = entry.value
  }
  return result
}
