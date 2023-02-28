const { echo, rm } = require('shelljs')
const {
  run,
  writeSrc,
  builder: pb
} = require('./build-common')

async function main () {
  echo('running build for linux arm64')

  echo('build tar.gz')
  rm('-rf', 'dist')
  writeSrc('linux-arm64.tar.gz')
  await run(`${pb} --linux --arm64 tar.gz`)
}

main()
