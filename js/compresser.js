const uploadBox = document.querySelector(".upload-box"),
previewImage = uploadBox.querySelector("img"),
fileInput =uploadBox.querySelector('input');
widthInput= document.querySelector('.width-comp input'),
heightInput = document.querySelector('.height-comp input'),
ratioInput = document.querySelector(".ratio-comp input"),
qualityInput = document.querySelector('.Quality-comp'),
downloadbtn = document.querySelector('.download-btn-comp');

let ogImageRatio;

const loadFile = (e) =>{
    const file = e.target.files[0];//getting first user selected file
    if(!file) return;//return if user not selected a file

    previewImage.src = URL.createObjectURL(file);//passing selected file url to preview img src
    previewImage.addEventListener("load", () => {
        widthInput.value = previewImage.naturalWidth;
        heightInput.value = previewImage.naturalHeight;

        ogImageRatio = previewImage.naturalWidth / previewImage.naturalHeight

        document.querySelector(".wrapper").classList.add("active");
    });
}
widthInput.addEventListener("keyup", () => {
    //getting height according to the ration cheakbpx status
    const height = ratioInput.checked ? widthInput.value / ogImageRatio : heightInput.value;
    heightInput.value = height;
});
heightInput.addEventListener("keyup", () => {
    //getting width according to the ration cheakbpx status
    const width = ratioInput.checked ? heightInput.value / ogImageRatio : widthInput.value;
    widthInput.value = width;
});

const resizeAndDownload = () => {
    const canvas = document.createElement("canvas");
    const a = document.createElement("a");
    const ctx = canvas.getContext("2d");

    //if quality cheakbox is cheaked, pass 0.7 to imgQuality else pass 1.0
    //1.0 is 100% qulity where 0.7 is 70% of total, you can pass from 0.1-1.0
    const imgQuality = qualityInput.checked ? 0.7 : 1.0

    //setting canvas height width accordeing to the input values
    canvas.width = widthInput.value;
    canvas.height = heightInput.value;

    //drawing user selected image onto the canvas
    ctx.drawImage(previewImage, 0, 0, canvas.width, canvas.height);

    //passing canvas data url as href value of <a> element 
    a.href = canvas.toDataURL("image.jpeg", imgQuality);
    a.download = new Date().getTime();//passing current time as download value
    a.click();//cheaking <a> element so the file download

}

downloadbtn.addEventListener('click', resizeAndDownload);

fileInput.addEventListener("change", loadFile);
uploadBox.addEventListener("click", () => fileInput.click());

