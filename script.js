document.addEventListener("DOMContentLoaded", function() {
    const formateSubmitBtnId = document.getElementById("formateSubmitBtnId")
    formateSubmitBtnId.addEventListener("click", formateJson('inputJson'))
    
   
}
)


function formateJson(id) {
   console.log("formateJson call");
    try {
        const inputJson = document.getElementById(id).value;
        const parsedJson = JSON.parse(inputJson);
        const formattedJson = JSON.stringify(parsedJson, null, 2);
        document.getElementById(id).value = formattedJson;

    } catch (error) {
        document.getElementById(id).value = "Invalid JSON format!";
    }


}