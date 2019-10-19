
import avatar from './avatar.jpeg'
import style from  './index.scss'
import createAvatar from './create-avatar'
createAvatar()

var root = document.getElementById('root')
var img = new Image()
img.src = avatar;
img.classList.add(style.avatar)

root.append(img)