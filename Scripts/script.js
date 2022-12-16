function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
function mouseLeaves() {
    if (document.getElementById("myDropdown").classList == "dropdown-content show") {
        document.getElementById("myDropdown").classList.remove("show");
    }
}

function socialHover() {
    if (document.getElementById("myDropdown").classList != "dropdown-content show") {
        document.getElementById("myDropdown").classList.add("show");
    }
}