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

const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib

async function modifyPdf() {

      const url = './certificate.pdf'
  		const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
      const pdfDoc = await PDFDocument.load(existingPdfBytes)
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
      const pages = pdfDoc.getPages()
      const firstPage = pages[0]
      const { width, height } = firstPage.getSize()
      
      if (lastname_input) {
        firstPage.drawText(lastname_input, {
          x: 100,
          y: 676,
          size: 15
        })
      }
      
      if (firstname_input) {
        firstPage.drawText(firstname_input, {
          x: 100,
          y: 655,
          size: 15
        })
      }

      // Serialize the PDFDocument to bytes (a Uint8Array)
      const pdfBytes = await pdfDoc.save()

			// Trigger the browser to download the PDF document
      download(pdfBytes, "certificate_covid.pdf", "application/pdf");
    }


