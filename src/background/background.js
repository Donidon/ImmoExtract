// https://developer.chrome.com/extensions/getstarted
chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([
          {
            conditions: [
              new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: "seloger.com" }
              }),
              new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostSuffix: 'leboncoin.fr' }
            }),
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
          }
        ]);
    
        // Set the Branch name to use
        // const defaultBranchName = "DEFAULT_BRANCHNAME";
        // const isEmptyObject = target =>
        //   Object.keys(target).length === 0 && target.constructor === Object;
        // chrome.storage.sync.get("branchName", function(branchName) {
        //   if (!isEmptyObject(branchName)) return;
    
        //   chrome.storage.sync.set({ branchName: defaultBranchName }, function() {
        //     console.log(`set the branch name to ${branchName}`);
         // });
      //  });
      });
});