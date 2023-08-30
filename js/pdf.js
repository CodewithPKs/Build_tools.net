var data = [];
var width = 620;
var height = 800;
var pdfName;
var fileName = '';

const createPdf = document.getElementById('create-pdf');

encodeImageAsfileURL = (element) => {
    document.getElementById('inputPdf').style.display = 'none';
    document.getElementById('pdf-page').style.display = 'inline-block';

    const length = element.files.length;
    for(var i=0; i<length; i++){
        let file = element.files[i];
        // let pdfName = element.files[0];
        pdfName = file.name.replace(/\.[^/.]+$/, ""); // Remove file extension

        let reader = new FileReader();
        reader.readAsDataURL(file);

        let obj = {
            list: reader,
            fileName: file.name,
            time: new Date().toString()+ i
        }

        reader.onloadend = () =>{
            data = [...data, obj];
            // pdfName = pdfName.name
        }
    }

    setTimeout(convertToPdf, 1000);

    document.getElementById('uplode-files-img').value = null;

    setTimeout(saveAsPDF, 1000);
}

saveAsPDF = () => {
    // document.getElementById('uplode-msg').style.display = 'none';
    document.getElementById('convertBtn').style.display = 'inline-block';
}


//delet item from pdf
handleDelete= (e) =>{
    data = data.filter((item)=> item.time!==e.currentTarget.id);
    if(data.length == 0){
        location.reload();
    }
    else{
        convertToPdf();
    }
}

//initiate file dowloding
embedImage = async () => {
    const pdfDoc = await PDFLib.PDFDocument.create();
    for(var i=0; i<data.length; i++){
        const imageUrl = data[i].list.result;
        let jpgImageBytes;
        // = await fetch(jpgUrl).then((res) => res.arrayBuffer());
        const imageType = imageUrl.substring(imageUrl.indexOf("/") + 1, imageUrl.indexOf(";"));

        if (imageType === "jpeg" || imageType === "jpg" || imageType === "png") {
            jpgImageBytes = await fetch(imageUrl).then((res) => res.arrayBuffer());
        } else {
            console.error(`Unsupported image type: ${imageType}`);
            prompt("Only JPG and JPEG file is allowed")
            continue;
        }

        const jpgImage = await pdfDoc.embedJpg(jpgImageBytes);

        //aad blank page to the document
        const page= pdfDoc.addPage();

        //set page size
        page.setSize(width,height);
        page.drawImage(jpgImage, {
            x: 20,
            y: 50,
            width: page.getWidth()-40,
            height: page.getHeight()-100,
        });
    }

    //save the pdf pages
    const pdfBytes = await pdfDoc.save();

    //dowload pdf file
    // download(pdfBytes, pdfName.slice(0, -4), "application/pdf");
    download(pdfBytes, `${pdfName}.pdf`, "application/pdf");


    //back to home page after dowloading
    setTimeout(backtoHomepage, 1000);
}


//display pdf image
function convertToPdf (){
   createPdf.innerHTML = '';
   data.map((item, i) =>{
    const fileItem = document.createElement('div');
    fileItem.setAttribute('class', 'file-item-pdfM');

    const modify = document.createElement('div');
    modify.setAttribute('class', 'modify');

    const button2 = document.createElement('button');
    button2.setAttribute('class', 'delete-img-btn');
    button2.setAttribute('id', item.time);

    const remove = document.createElement('i');
    remove.setAttribute('class', 'fa-solid fa-trash fa-xl');

    button2.appendChild(remove);
    button2.addEventListener('click', (e) =>{
        handleDelete(e);
    });

    modify.appendChild(button2);

    fileItem.appendChild(modify);

    const imgContainer = document.createElement('div');
    imgContainer.setAttribute('class', 'img-container-all');

    const img = document.createElement('img');
    img.setAttribute('class', 'img');
    img.src = item.list.result;

    imgContainer.appendChild(img);

    fileItem.appendChild(imgContainer);

    const imgName = document.createElement('p');
    imgName.setAttribute('id', 'img-name-cont');

    imgName.innerHTML = item.fileName;
    fileItem.appendChild(imgName);

    //fileitem is the child of creatPdf
    createPdf.appendChild(fileItem);
   });


   const addMoreFile = document.createElement('div');
   addMoreFile.setAttribute('class', 'add-more-file');

   const addFile = document.createElement('div');
   addFile.setAttribute('class','inp-cont-pdf');

   const input = document.createElement('input');
   input.setAttribute('id', 'inp-cont-pdf');
   input.type = 'file';
   input.multiple = 'true';
   input.onchange = function (){
    encodeImageAsfileURL(this);
   }

   const p = document.createElement('p');
   const i = document.createElement('i');
   i.setAttribute('class', 'fa-solid fa-plus');

   p.appendChild(i);

   const lable = document.createElement('label');
   lable.htmlFor = 'inp';
   lable.innerHTML = 'Add Files';

   addFile.appendChild(p);
   addFile.appendChild(lable);
   addFile.appendChild(input);

   //addfile is the child of addMoreFile
   addMoreFile.appendChild(addFile);

   //addMoreFile is the child of creatPdf
   createPdf.appendChild(addMoreFile);
   
}

//back to home
function backtoHomepage() {
    location.reload();
}