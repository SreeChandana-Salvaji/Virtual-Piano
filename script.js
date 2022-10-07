const W_K=['q','w','e','r','t','y','u']
const B_K=['s','d','g','h','j']

const keys = document.querySelectorAll('.key')
const whiteKeys= document.querySelectorAll('.key.white')
const blackKeys= document.querySelectorAll('.key.black')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e=> {
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex= W_K.indexOf(key)
    const blackKeyIndex= B_K.indexOf(key)

    if(whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if(blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended',() =>{
        key.classList.remove('active')
    })
}
whiteKeys.forEach(key =>{
    function changeColor() {
        var x = document.getElementByClassName("key white");
        x.style.color = "red";
      }
})
