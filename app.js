/*
    /*
    destination_y = where you want scroll to go
    speed = scroll speed movement in each time
    transition = as delay for smoothing move 
    
let destination_y = 500 , speed = 10, transition = 10;

function niceScrolling_Increment(){

    let move = setInterval( () => {

        if(destination_y > document.body.clientHeight) clearInterval(move);

        if(document.documentElement.scrollTop < destination_y){

            if(document.documentElement.scrollTop  <= destination_y){
                window.scrollTo(0 , document.documentElement.scrollTop += speed);
            }
            else clearInterval(move);
            
        }
        else clearInterval(move);
    } , transition);

}

function niceScrolling_Decrement(){

    let move = setInterval( () => {

        if(destination_y < 0) clearInterval(move);
        
        if(document.documentElement.scrollTop >= destination_y){
            
            if(document.documentElement.scrollTop  >= destination_y){
                window.scrollTo(0 , document.documentElement.scrollTop -= speed)
            }
            else clearInterval(move);

        } 
        else clearInterval(move);
    } , transition);

}
*/

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

var AllDropZone = document.querySelectorAll(".dropzone") , i = 1;
const imgsCount = 6;

for(zone of AllDropZone){
    zone.dropzone = true;

    let Newcontent = document.createElement("div");
    Newcontent.draggable = true;
    Newcontent.setAttribute("class","content");
    Newcontent.setAttribute("id" , "content" + i); i+=1;
    
    if(i < imgsCount){
        Newcontent.style.cssText = `background-image: url("./imgs/icons (${i}).svg");`;
    }
        
    zone.append(Newcontent);
} 

var AllContent = document.querySelectorAll(".content");

for(let zone = 0; zone < AllDropZone.length ; zone+=1){
    AllDropZone[zone].addEventListener("dragover" , e =>{
        e.preventDefault();
    });

    AllDropZone[zone].addEventListener("drop" , e => {
        e.preventDefault();
        let oldContent = AllDropZone[zone].firstChild;
        let newChild = document.getElementById(e.dataTransfer.getData("text/plain"));
        let ParentNCH = newChild.parentElement; 

        AllDropZone[zone].append(newChild);
        ParentNCH.append(oldContent);
    });
}

for(let index = 0 ; index < AllContent.length ; index +=1){
    AllContent[index].addEventListener("dragstart" , e =>{
        e.dataTransfer.setData("text/plain" , AllContent[index].id);
    });
}

