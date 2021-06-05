


(() => {                                                        //iffy= which is an immediate invoked func in js.  this is an anonymous func. we wrap this in parentheses and then call it at the bottom with another set of parentheses
    let i = 0;                                                   //counter startin at 0
    const followInterval = setInterval(() => {                  //making interval 
        if (i >= 29) clearInterval(followInterval);             //exit condition by clearing interval
        const buttons = document.querySelectorAll('button');     //otherwise get all the buttons
        const nextButton = buttons[i];                           //select the next button on the list 
        if (nextButton.textContent.toLowerCase() === 'follow') { //
            nextButton.click();                   
        }
        i++;               //increase counter
    }, 500);                                                    //running it evert 500 milli seconds to save time 
})()                                                            //calling the func again by providing the ()

//Instructions
//navigate to https://www.instagram.com/explore/people/suggested/ in your browser on your computer. This goes without saying, but you'll need to be signed into your Intagram account
//copy the javascript code in followBot.js and paste it into the javascript console (you can open this in google chrome with command + option + j
//click enter
//watch the bot click the follow button for you. it will only follow up to 30 people at a time so your account doesn't get flagged
//if you wanna risk it, keep repating the steps above - WARNING: you can only follow/unfollow about 20 - 60 users an hour, and a maximum of 100-200 users in a day AND Instagram does not allow anyone to follow more than 7,500 people. Instagram will just prevent you from hitting the follow button if you do too many in a short period of time, so you're generally safe using this.