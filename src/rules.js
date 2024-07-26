export function isIngredientPoutineWithUppercase(hasPoutineIngredients, password) {
    const ingredientsRegex = /(frites|sauce|fromageSquishSquish)/i;
    const matches = password.match(ingredientsRegex);
    const hasPoutineIngredientsWithUppercase = matches && matches.every(match => /[A-Z]/.test(match[0]));
    const meetsRequirementsPoutine = hasPoutineIngredients && hasPoutineIngredientsWithUppercase;
    return meetsRequirementsPoutine;
}


export function getDate() {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear().toString();
    return `${day}/${month}/${year}`;
}

export function checkOdsNumbersRule(password) {
    const numericChars = password.match(/\d/g);
    const secondAndBeforeLastDigitsAreOdd =
        numericChars &&
        numericChars.length >= 2 &&
        parseInt(numericChars[1]) % 2 !== 0 &&
        parseInt(numericChars[numericChars.length - 2]) % 2 !== 0;
    return secondAndBeforeLastDigitsAreOdd;
}

export const getSunsetTime = async function () {
    const response = await fetch("https://api.sunrise-sunset.org/json?lat=45.504814179128&lng=-73.58723572207455&date=today");
    if (response.status == 200) {
        return response.json()
    } else {
        new Error(response.statusText)
    }
}

export function compareRealSunsetTimeToUserInput(sunsetTime, userInput) {

    const regex = /(\d{1,2}:\d{2})/;
    const match = userInput.match(regex);
    if (match) {
        const userInputArray = match[0].split(':').map(part => parseInt(part, 10));
        const [userHours, userMinutes] = userInputArray;

        let sunsetHours = sunsetTime[0];
        let sunsetMinutes = sunsetTime[1];

        const timeDifference = Math.abs((userHours - sunsetHours) * 60 + (userMinutes - sunsetMinutes));
        const isWithinMargin = timeDifference <= 2;

        return isWithinMargin;
    }
}


async function getToken() {

    let response = await fetch(
        " https://accounts.spotify.com/api/token",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "grant_type=client_credentials&client_id=70481623e64648da9ccf88ec56c08a99&client_secret=ae9dcdd63278487dbfd1f4001b2ada82",
        }
    )
    return response.json()
}

export const getTopTrack = async function () {

    let myToken = await getToken()


    let response = await fetch(
        "https://api.spotify.com/v1/artists/7jgnJBnpZTiGnCF2Wvka2Z/top-tracks?market=fr",
        {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + myToken.access_token,
            },
        },

    )

    return response.json()
}

export function compareToTopMusicChristopheMae(topMusic, userInput) {
    const escapedMusicTitle = topMusic.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escapedMusicTitle, "i");
    const isMatch = regex.test(userInput);
    return isMatch;
}


export function victory() {
    const password = document.querySelector('.password-game');
    password.style.display = 'none';

    const victory = document.querySelector('.password-victory');
    victory.style.display = 'flex';

    // //recuperer le h1 victory
    // const victoryTitle = document.querySelector('.password-victory h1');
    // //ajouter l'image de victoire
    // const victoryImage = document.createElement('img');
    // victoryImage.src = image;
    // victoryImage.alt = 'victory';
    // victoryTitle.appendChild(victoryImage);
}

// export function 