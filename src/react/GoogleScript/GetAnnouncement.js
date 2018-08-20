function getFirstAnnouncement() {
  var message = SpreadsheetApp.openById("1awK_6ipBc3-4tRvsJpVgISlhl_OhJ_YnBvmzMIn9MjE").getSheetByName("Sheet1").getRange("A1").getValue();
  return message;
}

function getSecondAnnouncement() {
  var message = SpreadsheetApp.openById("1awK_6ipBc3-4tRvsJpVgISlhl_OhJ_YnBvmzMIn9MjE").getSheetByName("Sheet1").getRange("A2").getValue();
  return message;
}

function getThirdAnnouncement() {
  var message = SpreadsheetApp.openById("1awK_6ipBc3-4tRvsJpVgISlhl_OhJ_YnBvmzMIn9MjE").getSheetByName("Sheet1").getRange("A3").getValue();
  return message;
}
