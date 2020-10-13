const { PDFDocument, StandardFonts } = PDFLib
import pdfBase from './certificate.pdf'

$('#rank_dropdown').dropdown();
$('#fever_dropdown').dropdown();
$('#cough_dropdown').dropdown();
$('#fatigue_dropdown').dropdown();
$('#taste_dropdown').dropdown();
$('#smell_dropdown').dropdown();
$('#diarrhea_dropdown').dropdown();
$('#contact_dropdown').dropdown();

var canvas = document.querySelector("canvas");
var signaturePad = new SignaturePad(canvas);

var clear_button = $('#clear_button');
clear_button.on('click', function() {
    signaturePad.clear();
});


var test_button = $('#testbutton');
test_button.on('click', function() {

var lastname_input = $("#lastname_input").val();
var firstname_input = $("#firstname_input").val();
var unit_input = $("#unit_input").val();
var rank_dropdown = $('#rank_dropdown').dropdown('get value');

var fever_dropdown = $('#fever_dropdown').dropdown('get value');
var cough_dropdown = $('#cough_dropdown').dropdown('get value');
var fatigue_dropdown = $('#fatigue_dropdown').dropdown('get value');
var taste_dropdown = $('#taste_dropdown').dropdown('get value');
var smell_dropdown = $('#smell_dropdown').dropdown('get value');
var diarrhea_dropdown = $('#diarrhea_dropdown').dropdown('get value');

var contact_dropdown = $('#contact_dropdown').dropdown('get value');
var text_input = $("#text_input").val();


console.log(lastname_input);
console.log(firstname_input);
console.log(rank_dropdown);
console.log(unit_input);

console.log(fever_dropdown);
console.log(cough_dropdown);
console.log(fatigue_dropdown);
console.log(taste_dropdown);
console.log(smell_dropdown);
console.log(diarrhea_dropdown);

console.log(contact_dropdown);
console.log(text_input);


});


