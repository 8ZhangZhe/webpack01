// console.log('实现轮播图的业务逻辑');
// console.log('实现tabs标签页的逻辑');
import { marquee } from './marquee.js'
import { tab } from './tab.js'
marquee()
tab()
import './style/index.css'
import './style/index.less'

import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'

const gif = document.createElement('img')
const png = document.createElement('img')

gif.src = gifSrc
png.src = pngSrc

document.body.appendChild(gif)
document.body.appendChild(png)