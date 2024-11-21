let handler = m => m
handler.all = async function (m) {
    let setting = global.db.data.settings[this.user.jid]
    
    let _muptime
    if (process.send) {
        process.send('uptime')
        _muptime = await new Promise(resolve => {
            process.once('message', resolve)
            setTimeout(resolve, 1000)
        })  1000
    }
    let muptime = clockString(_muptime)

    // Mercedes facts
    const MercedesFacts = [
    "Samsung is one of the most loyal Autobots.",
    "Samsung can't transform to any other like iPhone",
    "Samsung has a strong sense of justice.",
    "In the movie, Samsung is shown to have a deep bond with Tonny.",
    "Samsung often uses his vibrate to communicate when his voice spicker is damaged.",
    "Samsung voice spicker was damaged in the first film, which is why he uses vibrations to communicate.",
    "In 'Samsung,' it is depicted as having a more emotional and vulnerable side compared to other Phones.",
    "Samsung has a special ability to disguise itself as a different phone to blend in with human society.",
    "He is one of the original phone from the '80s cartoon series and has been a fan favorite ever since.",
    "Samsung phone form is often seen as a symbol of freedom and youthfulness.",
    "In the smartphone universe, Samsung has been shown to have excellent combat skills despite his small size.",
    "Samsung color scheme in the films is inspired by his classic yellow and black design from the original cartoons."
]


    // Pick a random fact
    const randomFact = bumblebeeFacts[Math.floor(Math.random()  bumblebeeFacts.length)]

    // Update bio
    let bio = `\n Mercedes Facts: ${randomFact}\n\n ┃ Danny`
    await this.updateProfileStatus(bio).catch(_ => _)
    setting.status = new Date() = 1
}

export default handler

function clockString(ms) {
    let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [d, ' Day(s) ️', h, ' Hour(s) ', m, ' Minute(s)'].map(v => v.toString().padStart(2, 0)).join('')
  }
