function doPost(e) {

    var data = JSON.parse(e);
    if (data["vault"]) {
        var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Log');
        ss.insertRowsAfter(1, 1);
        var text = data["vault"]["text"];
        var reg = text.replace(/<[^>]+>/g, "");
        var split = reg.split(" ");
        var player_ = data["vault"]["info"];
        var player_a = player_.split('[');
        var user = player_a[0];
        var change_ = split[3].substring(1);
        var change_a = change_.replace(/,/g, '');
        var id = player_a[1].substring(0, player_a[1].indexOf("]"));
        if (split[2] == "withdrawn") {
            var type = "Withdrawal";
            var change = parseInt('-' + change_a);

        } else if (split[2] == "deposited") {
            var type = "Deposit";
            var change = parseInt(change_a);
        }
        var last_amount_ = split[split.length - 1];
        var last_ = last_amount_.substring(1, last_amount_.indexOf("."));
        var last_amount = parseInt(last_.replace(/,/g, ''));
        var time = Utilities.formatDate(new Date(), "GMT", "dd MMMM yyyy  hh:mm:ss a");

        ss.getRange(2, 1, 1, 6).setValues([[time, user, id, type, change, last_amount]]);
    }
}
