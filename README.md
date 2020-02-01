# Torn-Property-Vault-Tracker
Contains userscript and a Spreadsheet to catch vault transactions
 

I am back with a new script + Spreadsheet. I could have adeed it into my [Accounting Script](https://www.torn.com/forums.php?p=threads&f=67&t=16138949&b=0&a=0) , but I didn't as that was supposed to be used by one user, but this one can be shared with your spouse.

**Disclaimer: This script is written to help you record your and your spouse's vault transactions. If you are using this script along with your spouse, keep in mind that they can simply disable the script or make changes in the code to avoid their transactions from being recorded. I won't be responsible if your spouse is not a trustworthy person. Using this script requires your trust in your spouse.**

**How to set it up?**

1) First of all open this [Spreadsheet](https://docs.google.com/spreadsheets/d/1jUoZa4GpA4mPxPqL4gLZKE04WhPDN4FFbT_3pGBCUBw/edit?usp=drivesdk) , Click on ***File > Make a copy.*** You will be the sole owner of the **copied sheet**.

2) Now open the **Copied Sheet**. Click on **Tools > Script Editor.**

3) **Publish > Deploy as Web app**




![](https://toucantoco.com/img/tech_appscript-webhook/deploy-web-app.png)




Set the options as shown above and Click on that blue colored **Deploy button**. It will ask for your permission to have access to your Spreadsheets. Provide the permissions.

4) It will provide you with a URL link, copy that link.

5) Now install this [script ](https://greasyfork.org/en/scripts/395888-vault-transaction-tracker) on your browser, using Tampermonkey. 

[Tampermonkey for Chrome/Yandex/Kiwi](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)

[Tampermonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

6) Go to  [Vault page](https://www.torn.com/properties.php#/p=options&tab=vault) . 

    **For PC users** : Click on Tampermonkey Icon > Webapp
    
    

![](https://i.gyazo.com/5b56052e23f5683b56313808f541de2a.jpg)




**For Kiwi Browser Users:** Click on the **Options icon**, it will be either on the **Top right or bottom right** , depending upon your Browser's settings. Then look for **Tampermonkey** in there. Click on **Tampermonkey. > Webapp**




![](https://i.gyazo.com/eea22e65f4c77330db2b6e08b5e7439e.jpg)




For Yandex Users: Click on **Options icon**, it will be either on bottom right or top right, depending upon the settings. **> Extensions> Tampermonkey > Webapp.**




7) It will give you a **prompt** to enter your **Webapp link**. Paste the link there, **Click Ok and refresh the page.**




8) Try making a transaction it will be updated in the sheet.



**For people who share their Vault with their spouse:**



While you both will have to install the script, **only one of you** will have to set up the **Spreadsheet/Webapp**. Then you share the **webapp link with your spouse and tell them to put it in the script on their browser**.


It can record the **transactions of you both in one sheet as it tells the Name and User ID of the user** who made the transaction. I have added an extra Tab in the Spreadsheet with the name "**Overview**". 



![](https://i.gyazo.com/8851a1b0caf6ad617b4832d61d8bf036.jpg)



In **Overview** sheet, Put Torn User ID of you and your spouse in the first column, in the last column with the heading "Initial Balance" put the number of how much of the current cash in Vault is owned by you and how much by your spouse. 


 **But what does "Initial Balance" mean?:**

It means individual balance of you and your spouse on the time of installing the script.

**For eg:** Suppose on the time of installing the script, your vault has **100$**, out of which **70** belongs to you and **30** to your spouse. In **Overview sheet**, in the first Column enter the **Torn User IDs**of you and your spouse and in the last column corresponding **to your ID, put 70** and corresponding to your **spouse's ID put 30**. 



![](https://i.gyazo.com/49eaceb2a9105b1f9ee1ea7e60682592.jpg)



**Make sure the Initial Balance numbers are without the commas and the dollar sign**


Once after being set up like this it will automatically record your transaction and will **show *individual balance of you and your spouse*** in the **Overview** sheet and all the ***transactions done by you and your spouse*** in "**Log**" sheet.


If you have any doubts or questions don't hesitate to drop me a [mail.](https://www.torn.com/messages.php#/p=compose&XID=2131687)

