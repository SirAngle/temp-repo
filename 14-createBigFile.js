const { writeFileSync } = require('fs')

for (let i = 0; i < 100000; i++) {
  writeFileSync('./content/bigfile.txt', `This is some text ${i} \n `, {
    flag: 'a',
  })
}
