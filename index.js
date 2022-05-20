const iPhoneScreen = document.querySelector('.iphone__model')
const iPhoneModel = document.querySelectorAll('[data-family]')
const iPhoneColor = document.querySelectorAll('[data-color]')

//  IT'S TOO LATE, I GOTTA SLEEP. I HAVE NOT FINISHED YET, BECAUSE HERE SOMETHING WHAT I DO NOT UNDERSTAND. SO, SEE YA

const changeIphone = (model) => {
    switch (model) {
        case 'pro':
            iPhoneScreen.setAttribute('src', './assets/png/proFamily/iphone-13-pro-family-select.jpeg')
            changeColor(proColor)
            btnsEvent(iPhoneModel)
            break;
        case 'proMax':
            iPhoneScreen.setAttribute('src', './assets/png/proMaxFamily/iphone-13-pro-max-family-select.jpeg')
            changeColor(proMaxColor)
            break;
    
        default:
            break;
    }
} 
function changeColor (funs) {
    iPhoneColor.forEach(color => {
        color.onclick = () => {
            funs(color.getAttribute('data-color'))
        }
    })
}
function proColor (color) {
    switch (color) {
            case 'silver':
                iPhoneScreen.setAttribute('src', './assets/png/proFamily/iphone-13-pro-silver-select.png')
                break;
            case 'graphite':
                iPhoneScreen.setAttribute('src', './assets/png/proFamily/iphone-13-pro-graphite-select.png')
                break;
            case 'gold':
                iPhoneScreen.setAttribute('src', './assets/png/proFamily/iphone-13-pro-gold-select.png')
                break;
            case 'blue':
                iPhoneScreen.setAttribute('src', './assets/png/proFamily/iphone-13-pro-blue-select.png')
                break;
            case 'green':
                iPhoneScreen.setAttribute('src', './assets/png/proFamily/iphone-13-pro-green-select.png')
                break;
        
            default:
                break;
        }
        
}
function proMaxColor (color) {
    switch (color) {
        case 'silver':
            iPhoneScreen.setAttribute('src', './assets/png/proMaxFamily/iphone-13-pro-max-silver-select.png')
            break;
        case 'graphite':
            iPhoneScreen.setAttribute('src', './assets/png/proMaxFamily/iphone-13-pro-max-graphite-select.png')
            break;
        case 'gold':
            iPhoneScreen.setAttribute('src', './assets/png/proMaxFamily/iphone-13-pro-max-gold-select.png')
            break;
        case 'blue':
            iPhoneScreen.setAttribute('src', './assets/png/proMaxFamily/iphone-13-pro-max-blue-select.png')
            break;
        case 'green':
            iPhoneScreen.setAttribute('src', './assets/png/proMaxFamily/iphone-13-pro-max-green-select.png')
            break;

        default:
            break;
    }
}
iPhoneModel.forEach(model => {
    model.onclick = () => {
        changeIphone(model.getAttribute('data-family'))
    }
})

const checkBoxes = document.querySelectorAll('.toCheck')

checkBoxes.forEach(box => {
    box.onclick = () => {
        if (box.classList.contains('checked')) {
            box.classList.remove('checked')
        } else {
            box.classList.add('checked')
        }
    }
})

const arrows = document.querySelectorAll('.arrow')

const rotated = 'rotateZ(180deg)'
const unRotated = 'rotateZ(0deg)'
const shows = document.querySelectorAll('.showUp')


arrows.forEach(arrow => {
    shows.forEach(show => {
        arrow.onclick = () => {
            if (arrow.style.transform === unRotated) {
                show.style.display = 'none'
                show.style.opacity = '0'
                arrow.style.transform = rotated
            } else {
                arrow.style.transform = unRotated
                show.style.display = 'block'
                show.style.opacity = '1'
            }
        }
    })
})