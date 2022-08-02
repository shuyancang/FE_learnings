const Websocket = require('ws')
const wsServer = new Websocket("ws://player.aidi-test.hobot.cc/api/packPlay1/ws?pack_url=dmpv2://Fillback/aidi.fillback/TEST_SD_lidar_test_4zu_1648370616_1648370859_747377/1/20220308-094024_133-1/ADAS_20220308-094024_133_5_FrontMain120.pack")

wsServer.on('open', () => {
  console.log('on open')
})

wsServer.on('message', (data) => {
  console.log(data)
})

// wsServer.on('connection', ws => {
//   console.log('connection abdfewc')
//   ws.on('message', (msg) => {
//     console.log(msg) 
//   })
// })
