import avatar from './avatar.jpeg'

function createAvatar () {
var root = document.getElementById('root')
var img = new Image()
img.src = avatar;
img.classList.add('avatar')
root.append(img)
}

export default createAvatar