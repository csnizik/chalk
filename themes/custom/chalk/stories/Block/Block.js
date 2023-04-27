import './block.css'

export const createBlock = ({ label }) => {
  const blk = document.createElement('div')
  blk.className = 'i-am-a-block'
  blk.innerHTML = `<p>Het the huck up</p>`
  return blk
}
