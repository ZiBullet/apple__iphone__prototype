const iphoneFamilyButtons = document.querySelectorAll('label[data-family]')
const iphoneScreen = document.querySelector('.iphone__model')
const iphoneColors = document.querySelectorAll('div[data-color]')
const unSelectedBorder = '1px solid #d2d2d7'
const selectedBorder = '1px solid #0071e3'
const heading = document.querySelector('.h4')
const headingPrice = document.querySelector('.h4_price')
const headingMo = document.querySelector('.h4_mo')
const storages = document.querySelectorAll('h4[data-storage]') 

// IT'S 24 O'CLOCK. UNFORTUNATELLY, I DO NOT FINISHED IT AND I HAVE TO GO TO BED. 


// Getting data-family's value
iphoneFamilyButtons.forEach(btn => {
    btn.onclick = () => {
        changeIphoneFamily(btn.getAttribute('data-family'))
    }
});

// iPhone screen changeing func
const changeIphoneFamily = (family) => {
    switch (family) {
        case 'pro':
            iphoneScreen.setAttribute('src', './assets/png/proFamily/iphone-13-pro-family-select.jpeg')
            break;
            case 'proMax':
                iphoneScreen.setAttribute('src', './assets/png/proMaxFamily/iphone-13-pro-max-family-select.jpeg')
                break;
    
                default:
                    break;
                }
                iphoneColors.forEach(color => {
                    color.onclick = () => {
                        const iphone = color.getAttribute('data-color')
                        if (family === 'pro' && iphone === 'silver') {
                            iphoneScreen.setAttribute('src', './assets/png/proFamily/iphone-13-pro-silver-select.png')
                        } else if (family === 'pro' && iphone === 'graphite') {
                            iphoneScreen.setAttribute('src', './assets/png/proFamily/iphone-13-pro-graphite-select.png')
                        } else if (family === 'pro' && iphone === 'gold') {
                            iphoneScreen.setAttribute('src', './assets/png/proFamily/iphone-13-pro-gold-select.png')
                        } else if (family === 'pro' && iphone === 'green') {
                            iphoneScreen.setAttribute('src', './assets/png/proFamily/iphone-13-pro-green-select.png')
                        } else if (family === 'pro' && iphone === 'blue') {
                            iphoneScreen.setAttribute('src', './assets/png/proFamily/iphone-13-pro-blue-select.png')
                        } else if (family === 'proMax' && iphone === 'silver') {
                            iphoneScreen.setAttribute('src', './assets/png/proMaxFamily/iphone-13-pro-max-silver-select.png')
                        } else if (family === 'proMax' && iphone === 'graphite') {
                            iphoneScreen.setAttribute('src', './assets/png/proMaxFamily/iphone-13-pro-max-graphite-select.png')
                        } else if (family === 'proMax' && iphone === 'gold') {
                            iphoneScreen.setAttribute('src', './assets/png/proMaxFamily/iphone-13-pro-max-gold-select.png')
                        } else if (family === 'proMax' && iphone === 'green') {
                            iphoneScreen.setAttribute('src', './assets/png/proMaxFamily/iphone-13-pro-max-green-select.png')
                        } else if (family === 'proMax' && iphone === 'blue') {
                            iphoneScreen.setAttribute('src', './assets/png/proMaxFamily/iphone-13-pro-max-blue-select.png')
                        } 
                    }
    })
}
