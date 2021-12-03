const { readFile, writeFile } = require('fs').promises

const start = async () => {
  try {
    const first = await readFile(`./content/first.txt`, 'utf-8')
    const second = await readFile(`./content/second.txt`, 'utf-8')
    await writeFile(
      './content/result-mind-grenade.txt',
      `This is a great method :D`
    )
    console.log(first)
    console.log(second)
  } catch (error) {
    console.error(error)
  }
}

start()

/* 
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err, res) => {
      if (err) reject(err)
      else resolve(res)
    })
  })
}
 */
