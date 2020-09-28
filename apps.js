$(document).ready(function () {
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
        'Too ato too nOt enot one totA not anot tOO aNot',
        'oat itain oat tain nate eate tea anne inant nean',
        'itant eate anot eat nato inate eat anot tain eat',
        'nee ene ate ite tent tiet ent ine ene ete ene ate'
    ];


    let stateOfGame = {
        sentenceCounter: 0,
        letterCounter: 0,
        mistakecounter: 0,
        highlightedPosition: 15,
        gameOn: false,
        startTime: 0
    }

    let keyboarduppercontainer = $("#keyboard-upper-container")
    let keyboardlowercontainer = $("#keyboard-lower-container")
    keyboarduppercontainer.hide();
    $('#sentence').append(sentences[stateOfGame.sentenceCounter])
    $('#target-letter').append(sentences[stateOfGame.sentenceCounter][stateOfGame.letterCounter])

    $(document).keydown(function (event) {
        let asciiLetter = event.key.charCodeAt(0)
        if (asciiLetter === 83) {
            keyboardlowercontainer.hide()
            keyboarduppercontainer.show()

            if (!event.shiftKey) {
                keyboardlowercontainer.show()
                keyboarduppercontainer.hide()
            }
        }

        if (sentences[stateOfGame.sentenceCounter] === undefined) {
            let endgameTime = Date.now()
            let gameTime = endgameTime - stateOfGame.startTime
            time = time / 1000 / 60

            alert(`YOUR AVERAGE TYPE TIME IS ${Math.floor(calcWordsPerMinute(time, stateOfGame.mistakeCounter))} WORDS PER MINUTE. `)
            resetGame(stateOfGame)
            $('#sentence').append(sentences[stateOfGame.sentenceCounter])
            $('#target-letter').append(sentences[stateOfGame.sentenceCounter][stateOfGame.letterCounter])
        }
        if (stateOfGame.letterCounter < sentences[stateOfGame.sentenceCounter].length) {
            if (event.key === sentences[stateOfGame.sentenceCounter][stateOfGame.letterCounter]) {
                $('#target-letter').empty();
                stateOfGame.letterCounter++
                console.log(stateOfGame.letterCounter)
            }

            $('#feedback').append('<i class ="glyphicon glyphicon-ok"></i>')

            stateOfGame.highlightedPosition = stateOfGame.highlightedPosition + 18
            $('#yellow-block').css('left', `${stateOfGame.highlightedPosition}px`)

            if (sentences[stateOfGame.sentenceCounter][stateOfGame.letterCounter] === ' ') {
                $('#target-letter').append('Space')
            } else {
                $('#target-letter').append(sentences[stateOfGame.sentenceCounter][stateOfGame.letterCounter])
            }

        } else if (asciiLetter !== 83) {
            stateOfGame.mistakecounter++
            $('#feedback').empty()
        }
    })



    if (sentenceCounter == 5) {
        let endDate = new Date()
        let endgameTime = endDate.getTime()
        let minutes = (endgameTime - startTime) / 6000
        wpmcalcWordsPerMinute = Math.round(54 / minutes - 2 * mistakeCounter)

    }

    $(document).keyup(function (event) {
        let asciiLetter = event.key.charCodeAt(0)
        if (asciiLetter === 83) {
            keyboardlowercontainer.hide()
            keyboarduppercontainer.show()

            if (!event.shiftKey) {
                keyboardlowercontainer.show()
                keyboarduppercontainer.hide()
            }
            $('#${asciiLetter}').css('background-color', 'yellow')


            if (!stateOfGame.gameOn) {
                stateOfGame.gameOn = !stateOfGame.gameOn
                stateOfGame.startTime = Date.now()

            } else {
                $('#sentence').empty()
                if (stateOfGame.sentenceCounter + 1 !== undefined) {
                    stateOfGame.sentenceCounter++
                }
                $('#sentence').append(sentences[stateOfGame.sentenceCounter])
                $('#feedback').empty()
                stateOfGame.letterCounter = 0
                stateOfGame.highlightedPosition = 0
                $('#yellow-block').css('left', `${stateOfGame.highlightedPosition}px`)
            }
        }
    })
})

function wpmcalcWordsPerMinute(time, mistakeCounter) {
    let wordNumber = 54
    return wordNumber / time - 2 * mistakeCounter
}

function restartGame(stateOfGame) {
    stateOfGame.sentenceCounter = 0
    stateOfGame.letterCounter = 0
    stateOfGame.mistakeCounter = 0
    stateOfGame.highlightedPosition = 15
    stateOfGame.gameOn = false
    stateOfGame.startTime = 0
}






//VERY BUGGY AS OF RIGHT NOW, CURRENTLY TRYING TO FIX AT TIME OF TURN IN, AUTOMATICALLY DISPLAYING T NO MATTER WHICH KEY IS PRESSED, CHECKMARKS POP UP NO MATTER RIGHT OR WRONG,
//REFUSES TO GO TO NEXT SENTENCE, LISTS LINE 73 ERROR (sentenceCounter) NOT DEFINED

//BELOW WAS JUST A TEST I DID 
//['#126', '#33', '#64', '#35', '#36', '#37', '#94', '#38', '#42', '#40', '#41', '#95', '#43']