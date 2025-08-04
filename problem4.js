/** Problem 04 - (Delete / Store) */
var fileName = 'pdfData.jpg';
//write your code here

if (fileName.slice(-4).includes('.pdf')) {
  console.log('Store');
} else if (fileName.slice(-5).includes('.docx')) {
  console.log('Store');
} else if (fileName[0].includes('#')) {
  console.log('Store');
} else {
  console.log('Delete');
}
