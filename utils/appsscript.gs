//adpoted from script by Abhishek Narula
function appendSignatureRow(e){
 
  //Since there could be a bunch of people submitting, we lock the script with each execution
  //with a 30 second timeout so nothing gets overwritten
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
 
  //Here we read the variables from the form submission event
  const date = new Date(e.values[0]).toLocaleDateString();
  var dateStr = date
  //of you can use toLocaleString method if you want the time in the doc

  // we wanted a condition where people could keep their names off the petition
  const anon = e.values[5];
  var fname = 'Anonymous';
  var lname = 'Signer';

  if (anon != 'Do not publish my name') {
    var fname = e.values[2];
    var lname = e.values[3];
  }
  const fullName = fname + ' ' + lname
  const affiliation = e.values[4];
  //const affilliationString = affiliation.join(', ')

  console.log(affiliation);

  console.log(anon);
  var form = FormApp.openById('FORM_ID');
 
  const num = form.getResponses().length;
  var num1 = num.toString()
 
  //Next format those values as an array that corresponds to the table row layout
  //in your Google Doc
  const tableCells = [dateStr,fullName,affiliation]
 
  //Next we open the letter and get its body
  const letter = DocumentApp.openById('DOC_ID')
  const body = letter.getBody();
 
  //Next we get the first table in the doc and append an empty table row
  const table = body.getTables()[0]
  ///const tableRow = table.appendTableRow()
  const tableRow = table.insertTableRow(1)
 
  //Here we loop through our table cells from above and add
  // a table cell to the table row for each piece of data
  tableCells.forEach(function(cell, index){
	let appendedCell = tableRow.appendTableCell(cell)
  })
 
 
 
  //here we save and close our letter and then release a lock
  letter.saveAndClose(); 
  lock.releaseLock();
}
 


