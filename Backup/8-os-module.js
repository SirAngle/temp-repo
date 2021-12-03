const os = require('os')

// Current user info
const user = os.userInfo()
console.log(user)
console.log(os.uptime() / 60 / 60)

const CurrentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem() / 1000000,
  freeMem: os.freemem() / 1000000,
}

console.log(CurrentOS)
