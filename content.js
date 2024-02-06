
// content.js
console.log('Content script loaded');
console.log(window.location.href);
let currrntEleIds;
const intervel = setInterval(() => {
    currrntEleIds = findTextArea();
    console.log('id return ', currrntEleIds);
    if (currrntEleIds && currrntEleIds.length) {
        clearInterval(intervel);
        for(let i = 0; i < currrntEleIds.length; i++){
            appendIcon(currrntEleIds[i].id);
        }
        
    }
}, 1000);


function findTextArea() {
    try {

        let textArea = document.getElementsByTagName('textarea');
        if (textArea && textArea.length) {
            // let id = textArea[1]?.id;
            return textArea;
        }
    } catch
    {
        return "Element Not Found"
    }
}

// formateJson('myTextarea');

function formateJson(id) {
    try {
        const inputJson = document.getElementById(id).value;
        console.log("inputJson", inputJson);
        const parsedJson = JSON.parse(inputJson);
        const formattedJson = JSON.stringify(parsedJson, null, 2);
        setTimeout(() => {
            document.getElementById(id).value = formattedJson;
        }, 1000)

    } catch (error) {
        document.getElementById(id).value = "Invalid JSON format!";
    }


}

function appendIcon(id) {
    console.log("appent fun  is called for",id);
    let textArea;
    let parentNode;
    if (id) {
        textArea = document.getElementById(id);
        // textArea.style.background = '#292626';
        // textArea.style.color = '#ffff'
        parentNode = textArea.parentNode;
        let parentEle;
        if(parentNode) parentEle =  document.getElementById(parentNode.id);  
        if(parentEle){
            parentEle.style.position = 'relative';
        }
        console.log("parentNode is", parentNode.id);
        // Create icon dynamically
        const icon = document.createElement('div');
        icon.className = 'icon';
        icon.id = id+'icon'
        icon.innerHTML = '&#128366;'; // Unicode character for your icon  
        // icon.src = './logo.png';     
        icon.alt = 'josn icon '      
        icon.style.position = 'absolute';
        icon.style.cursor = 'pointer';
        icon.style.top =  '0px';
        icon.style.right = '3px';
        
        icon.addEventListener('click', () => {
            formateJson(id);
        });
        parentNode.appendChild(icon)
    }

}
