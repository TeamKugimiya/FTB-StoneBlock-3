function checkForBlockInCube(targetBlock,level,cubeSize,sx,sy,sz) {
  let found = ''

  for (let x = -Math.abs(cubeSize); x <= cubeSize; x++) {
    if (found != '')
      break;

    for (let y = -Math.abs(cubeSize); y <= cubeSize; y++) {
      if (found != '')
          break;

      for (let z = -Math.abs(cubeSize); z <= cubeSize; z++) {
        if (found != '')
          break;

        let block = level.getBlock(sx + x,sy + y,sz + z)
        if (block.id == targetBlock) {
            found = block
        }
      }
    }
  }
  return found
}

onEvent('block.place',(event) => {
    let checkBlock = 'bloodmagic:teleposer'
    if (event.block.id == checkBlock) {
      let targetBlock = 'ftbsbc:bits_spawner'
      let sx = event.block.x
      let sy = event.block.y
      let sz = event.block.z

      let result = checkForBlockInCube(targetBlock,event.level,7,sx,sy,sz)
      if (result != '') {
        event.entity.tell('你不能將 ' + checkBlock + ' 放置在 ' + targetBlock + ' 附近。該拘束生怪磚位在 ' + result.x + '，' + result.y + '，' + result.z)
        event.cancel()
      }
    }
})
