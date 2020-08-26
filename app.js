/*
    drag and drop events :

    drag 	    ondrag 	
    dragend 	ondragend 	
    dragenter 	ondragenter 	
    dragexit 	ondragexit 	
    dragleave 	ondragleave 	
    dragover 	ondragover 	
    dragstart 	ondragstart 	
    drop 	    ondrop
*/

// all elements in main div ' <div class="dropzone"></div> '    // i for loop
var AllDropZone = document.querySelectorAll(".dropzone") ,      i = 1;

// count of imgs i have in imgs folder
const imgsCount = 6;

// this loop for making all div's dropzone  
for(zone of AllDropZone){

    zone.dropzone = true;

    // new element as icon content
    let Newcontent = document.createElement("div");
    // access to dragable
    Newcontent.draggable = true;
    // just id + class for usage :)
    Newcontent.setAttribute("class","content");
    Newcontent.setAttribute("id" , "content" + i); i+=1;
    
    // if dropzone is greater than imgsCount that mean no image available
    // only if still there image then should append image as icon 
    if(i < imgsCount){
        Newcontent.style.cssText = `background-image: url("./imgs/icons (${i}).svg");`;
    }
    
    // on 'dragstart' event we sending reference of element ' ID '
    Newcontent.addEventListener("dragstart" , e =>{
        // sending id by using 'dataTransfer'
        e.dataTransfer.setData("text/plain" , Newcontent.id);
    });

    // append directly with icon or without icon   
    zone.append(Newcontent);

} 

// giving necessary events for each dropzone
for(let zone = 0; zone < AllDropZone.length ; zone+=1){
    // in dragover 'preventDefault' just for avoiding error or exception happen
    AllDropZone[zone].addEventListener("dragover" , e =>{
        e.preventDefault();
    });

    // when element dropped in dropzone area
    AllDropZone[zone].addEventListener("drop" , e => {
        e.preventDefault();
        let oldContent = AllDropZone[zone].firstChild;
        let newChild = document.getElementById(e.dataTransfer.getData("text/plain"));
        let ParentNCH = newChild.parentElement; 

        AllDropZone[zone].append(newChild);
        ParentNCH.append(oldContent);
    });
}
