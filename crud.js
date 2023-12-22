var in2=document.querySelector(".in2")
var in3=document.querySelector(".in3")
var input1=document.querySelector(".in1")
var ubdate= document.getElementById("ubdate")
var btns=document.querySelector(".btn1")
var table=document.querySelector(".table-data")
var popup=document.querySelector(".alert")

  function btn1(){

    if(input1.value==""||in2.value==""|in3.value==""){
        alert("All fields are required","alert-primary" )
        }
        else{
            var item = document.createElement("tr")
            item.innerHTML=`<td>${input1.value}</td> <td>${in2.value}</td> <td>${in3.value}</td> <td> <button onclick="edit()" class="btn btn-warning btn-sm me-2 mb-1 ">Edit</button> <button  onclick="del()"class="btn btn-danger btn-sm mb-1 ">Delete</button></td>`
            item.style.textTransform="capitalize"
            table.append(item)
            input1.value=""
            in2.value=""
            in3.value=""
            alert("List added successfully ", "alert-warning") 

        }
    
   
    
  }
  function del(){
    event.target.parentElement.parentElement.remove()
    alert("List deleted successfully ", "alert-danger") 
  }
function edit(){
      
    btns.style.display="none"
    ubdate.style.display="inline"

    selectedRow=event.target.parentElement.parentElement
    input1.value=selectedRow.children[0].innerText
    in2.value=selectedRow.children[1].innerText
    in3.value=selectedRow.children[2].innerText

   
}
function up(){

    ubdate.style.display="none"
    btns.style.display="inline"

    selectedRow.children[0].innerText=input1.value
    selectedRow.children[1].innerText=in2.value
    selectedRow.children[2].innerText=in3.value

    input1.value=""
    in2.value=""
    in3.value="" 
    alert("List ubdated successfully ", "alert-success") 
}


function alert(message , color){
     var div=document.createElement("div")
     div.setAttribute("class",`alert ${color} col-xs-12 col-sm-11 col-md-8 m-auto`)
     div.setAttribute("role","alert")
     div.style.fontSize="17px"
     div.style.textTransform="capitalize"
     div.innerText=message
     popup.prepend(div)
     setTimeout(()=>div.remove(),2000)
}

function a(){

}
 