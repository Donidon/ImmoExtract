document.getElementById("savePage").addEventListener("click", _ =>{
    chrome.tabs.query( { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT }, (tabs) => {
        let url = tabs[0].url;
       // authorizeUrl.forEach((val) =>  url.startsWith("")) ? )
    })
});

const authorizeUrl = ["seloger.com", "leboncoin.fr"];
