var bookName = document.getElementById("bookName");
var siteName = document.getElementById("siteName");
var tbody = document.getElementById("tbody");
var submit = document.getElementById("submit");
var overlay = document.getElementById("overlay");
var bookMarks = [];

if (localStorage.getItem("bookMarks")) {
    bookMarks = JSON.parse(localStorage.getItem("bookMarks"));
    displayBookmark();
}


function submitForm() {


    var bookMark = {
        bookName: bookName.value,
        siteName: siteName.value,
    };
    if (validInput(bookName.value,siteName.value)) {
        bookMarks.push(bookMark);
        localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
        clearInput();
        displayBookmark();
    }


}

function clearInput() {
    bookName.value = "";
    siteName.value = "";
}

function displayBookmark() {
    var box = "";
    for (var i = 0; i < bookMarks.length; i++) {
        box += `<tr>
            <td>${i + 1}</td>
            <td>${bookMarks[i].bookName}</td>
            <td>
                <a href="#" onclick="visitForm('${bookMarks[i].siteName}')" class="btn btn-warning text-white px-4">
                    <i class="fa-solid fa-eye me-2"></i>
                    Visit
                </a>
            </td>
            <td>
                <button onclick="deleteForm(${i})" type="button" class="btn btn-danger text-white px-4">
                    <i class="fa-solid fa-trash me-2"></i>
                    Delete
                </button>
            </td>
        </tr>`;
        
    }
    tbody.innerHTML = box;
}

function deleteForm(index) {
    bookMarks.splice(index, 1);
    localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
    displayBookmark();
}

function visitForm(url) {
    window.open(url, "_blank");
    // console.log(url);

}
function exitModel() {
    overlay.classList.add("d-none")
}
function validInput(bookName ,url) {
    var bName=/[a-z]{3,12}/
    regexURL = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (bName.test(bookName)&&regexURL.test(url)) {
        
        return true;

    }
    else {
        overlay.classList.remove("d-none");
        overlay.classList.add("d-block");
        model.innerHTML = `
                    <div class="exist-icone position-absolute top-0 end-0 fs-3 text-danger">
                        <a onClick="exitModel()" class="text-danger"><i class="fa-regular fa-circle-xmark"></i></a>
                    </div>
                    <div class="icone mb-4 fs-4">
                        <i class="fa-solid fa-circle" style="color: #63E6BE;"></i>
                        <i class="fa-solid fa-circle" style="color: #B197FC;"></i>
                        <i class="fa-solid fa-circle" style="color: #FFD43B;"></i>
                    </div>
                    <h3 class="fw-bold fs-4 mb-3">Site Name or Url is not valid, Please follow the rules below :</h3>
                    <div class="list">
                        <ul class="fs-5">
                            <li class="mb-3"><i class="fa-solid fa-circle-arrow-right me-2 text-info"></i>Site name must contain at least 3 characters</li>
                            <li class="mb-3"><i class="fa-solid fa-circle-arrow-right me-2 text-info"></i>Site URL must be a valid one</li>
                        </ul>
                    </div>`;
                    
    }
}
// function validUrl(url) {
//     regexURL = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
//     if (regexURL.test(url)) {
//         return true;
//     }
//     else {
//         overlay.classList.remove("d-none");
//         overlay.classList.add("d-block");
//         overlay.innerHTML = `
//                     <div class="exist-icone position-absolute top-0 end-0 fs-3 text-danger">
//                         <a onClick="exitModel()" class="text-danger"><i class="fa-regular fa-circle-xmark"></i></a>
//                     </div>
//                     <div class="icone mb-4 fs-4">
//                         <i class="fa-solid fa-circle" style="color: #63E6BE;"></i>
//                         <i class="fa-solid fa-circle" style="color: #B197FC;"></i>
//                         <i class="fa-solid fa-circle" style="color: #FFD43B;"></i>
//                     </div>
//                     <h3 class="fw-bold fs-4 mb-3">Site Name or Url is not valid, Please follow the rules below :</h3>
//                     <div class="list">
//                         <ul class="fs-5">
//                             <li class="mb-3"><i class="fa-solid fa-circle-arrow-right me-2 text-info"></i>Site name must contain at least 3 characters</li>
//                             <li class="mb-3"><i class="fa-solid fa-circle-arrow-right me-2 text-info"></i>Site URL must be a valid one</li>
//                         </ul>
//                     </div>`;
// }
// }
