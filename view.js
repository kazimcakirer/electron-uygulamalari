const { fips } = require('crypto')
let fs = require('fs')
var $ = require('jquery')

const fileName = 'contacts'

$('#save').on('click', function () {
    let email = $('#emailAdress').val()
    let description = $('#emailDescription').val()
    fs.appendFileSync(fileName, email + ',' + description + '\n')
    createFile(fileName)
})

function createFile(fileName) {
    if (fs.existsSync(fileName)) {
        $('#val').append(fs.readFileSync(fileName, 'utf-8'))
    } else {
        fs.writeFileSync(fileName)
    }
}

createFile(fileName)

const myNotification = new Notification('Title', {
    body: 'Notification from the Renderer process'
  })
  
  myNotification.onclick = () => {
    console.log('Notification clicked')
  }