
    document.getElementById("log").onclick = function(){
      window.location = "logout.html";
    }

document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

 
var email = document.getElementById("email").value;
if (email === "") {
  document.getElementById("errorMessage").innerHTML = "Please enter your email address";
  document.getElementById("email").focus(); 
        return;
} else {
  document.getElementById("errorMessage").innerHTML = "";
}

var startDate = document.getElementById("startdate").value;
if (startDate === "") {
  document.getElementById("errorMessage1").innerHTML = "Please enter the project start date";
  document.getElementById("startdate").focus(); 
  return;
} else {
  document.getElementById("errorMessage1").innerHTML = "";
}


var vendorName = document.getElementById("name").value;
if (vendorName === "") {
  document.getElementById("errorMessage2").innerHTML = "Please enter Vy Vendor Name";
  document.getElementById("name").focus(); 
  return;
} else {
  document.getElementById("errorMessage2").innerHTML = "";
}


var h1bVendor = document.getElementById("H1B").value;
if (h1bVendor === "") {
  document.getElementById("errorMessage3").innerHTML = "Please enter H1B vendor";
  document.getElementById("H1B").focus(); 
  return;
} else {
  document.getElementById("errorMessage3").innerHTML = "";
}


var candidateName = document.getElementById("c name").value;
if (candidateName === "") {
  document.getElementById("errorMessage4").innerHTML = "Please enter your candidate name";
  document.getElementById("c name").focus(); 
  return;
} else {
  document.getElementById("errorMessage4").innerHTML = "";
}


var clientName = document.getElementById("client name").value;
if (clientName === "") {
  document.getElementById("errorMessage5").innerHTML = "Please select a client name";
  document.getElementById("client name").focus(); 
  return;
} else {
  document.getElementById("errorMessage5").innerHTML = "";
}


var country = document.getElementById("country").value;
if (country === "0") {
  document.getElementById("errorMessage6").innerHTML = "Please select a country";
  document.getElementById("country").focus(); 
  return;
} else {
  document.getElementById("errorMessage6").innerHTML = "";
}


var form1_9 = document.getElementById("file-input").value;
if (form1_9 === "") {
  document.getElementById("errorMessage7").innerHTML = "Please upload the 1-9 Form";
  document.getElementById("file-input").focus(); 
  return;
} else {
  document.getElementById("errorMessage7").innerHTML = "";
}


var exhibitB = document.getElementById("file-input").value;
if (exhibitB === "") {
  document.getElementById("errorMessage8").innerHTML = "Please upload Exhibit-B Vendor Name/H1B filled proper";
  document.getElementById("file-input").focus(); 
  return;
} else {
  document.getElementById("errorMessage8").innerHTML = "";
}


var expiryDate1_9 = document.getElementById("expirydate").value;
if (expiryDate1_9 === "") {
  document.getElementById("errorMessage9").innerHTML = "Please enter the 1-9 Expiry date";
  document.getElementById("expirydate").focus(); 
  return;
} else {
  document.getElementById("errorMessage9").innerHTML = "";
}


var msaUpload = document.getElementById("file-input").value;
if (msaUpload === "") {
  document.getElementById("errorMessage10").innerHTML = "Please upload the MSA";
  document.getElementById("file-input").focus(); 
  return;
} else {
  document.getElementById("errorMessage10").innerHTML = "";
}


var exhibitA = document.getElementById("file-input").value;
if (exhibitA === "") {
 document.getElementById("errorMessage11").innerHTML = "Please upload Exhibit-A/PO";
 document.getElementById("file-input").focus(); 
return;
} else {
  document.getElementById("errorMessage11").innerHTML = "";
}


var msaSignedDate = document.getElementById("sigeneddate").value;
if (msaSignedDate === "") {
  document.getElementById("errorMessage12").innerHTML = "Please enter the MSA signed date";
  document.getElementById("sigeneddate").focus(); 
  return;
} else {
  document.getElementById("errorMessage12").innerHTML = "";
}


var w9Upload = document.getElementById("file-input").value;
if (w9Upload === "") {
  document.getElementById("errorMessage13").innerHTML = "Please upload the W9 Form";
  document.getElementById("file-input").focus(); 
  return;
} else {
  document.getElementById("errorMessage13").innerHTML = "";
}


var achUpload = document.getElementById("file-input").value;
if (achUpload === "") {
  document.getElementById("errorMessage14").innerHTML = "Please upload the ACH";
  document.getElementById("file-input").focus(); 
  return;
} else {
  document.getElementById("errorMessage14").innerHTML = "";
}


var voidCheckUpload = document.getElementById("file-input").value;
if (voidCheckUpload === "") {
  document.getElementById("errorMessage15").innerHTML = "Please upload the VOID Check";
  document.getElementById("file-input").focus(); 
  return;
} else {
  document.getElementById("errorMessage15").innerHTML = "";
}


var achDataFilled = document.getElementById("ACH").value;
if (achDataFilled === "") {
  document.getElementById("errorMessage16").innerHTML = "Please  for All Data Filled in ACh";
  document.getElementById("ACH").focus(); 
  return;
} else {
  document.getElementById("errorMessage16").innerHTML = "";
}


var visaTypeDocument = document.getElementById("file-input").value;
if (visaTypeDocument === "") {
  document.getElementById("errorMessage17").innerHTML = "Please upload the Visa Type Document";
  document.getElementById("file-input").focus(); 
  return;
} else {
  document.getElementById("errorMessage17").innerHTML = "";
}





var VisaFormDate = document.getElementById("sigeneddate").value;
if (VisaFormDate === "") {
  document.getElementById("errorMessage18").innerHTML = "please select Visa Form Date";
  document.getElementById("sigeneddate").focus(); 
  return;
} else {
  document.getElementById("errorMessage18").innerHTML = "";
}

var VisaCompany = document.getElementById("file-input").value;
if (VisaCompany === "") {
  document.getElementById("errorMessage19").innerHTML = "please enter Visa Company";
  document.getElementById("file-input").focus(); 
  return;
} else {
  document.getElementById("errorMessage19").innerHTML = "";
}
  
var VisaExpiryDate = document.getElementById("sigeneddate").value;
if (VisaExpiryDate === "") {
  document.getElementById("errorMessage20").innerHTML = "please select visa expiry date";
  document.getElementById("sigeneddate").focus(); 
  return;
} else {
  document.getElementById("errorMessage20").innerHTML = "";
}
 


var certificateupload = document.getElementById("file-input").value;
if (certificateupload === "") {
  document.getElementById("errorMessage21").innerHTML = "please upload insurance certificate";
  document.getElementById("file-input").focus(); 
  return;
} else {
  document.getElementById("errorMessage21").innerHTML = "";
}

var sheetupload = document.getElementById("file-input").value;
if (sheetupload === "") {
  document.getElementById("errorMessage22").innerHTML = "please upload contact info";
  document.getElementById("file-input").focus(); 
  return;
} else {
  document.getElementById("errorMessage22").innerHTML = "";
}

var COIExpiryDate = document.getElementById("sigeneddate").value;
if (COIExpiryDate === "") {
  document.getElementById("errorMessage23").innerHTML = "please select COI expiry date";
  document.getElementById("sigeneddate").focus(); 
  return;
} else {
  document.getElementById("errorMessage23").innerHTML = "";
}

var insuranceexpiry = document.getElementById("Nearing_Expiry").value;
if(insuranceexpiry == ""){
  document.getElementById("errorMessage24").innerHTML = "please enter the type of insurance";
  document.getElementById("Nearing_Expiry").focus();
  return;
} else{
  document.getElementById("errorMessage24").innerHTML ="";
}

var countersigned = document.getElementById("file-input").value;
if (countersigned=== "") {
  document.getElementById("errorMessage25").innerHTML = "please upload countersigned file";
  document.getElementById("file-input").focus(); 
  return;
} else {
  document.getElementById("errorMessage25").innerHTML = "";
}

var remark = document.getElementById("Remark").value;
if(remark == ""){
  document.getElementById("errorMessage26").innerHTML = "please upload countersigned form";
  document.getElementById("Remark").focus();
  return;
} else{
  document.getElementById("errorMessage26").innerHTML ="";
}


//var form = document.getElementById("form");
//form.submit();

window.location = "sucess.html";
  
})

  
