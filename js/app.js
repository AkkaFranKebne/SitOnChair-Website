document.addEventListener("DOMContentLoaded", function() {
    var menuElements =  document.querySelectorAll(".header-container>nav >ul>li");
    for (var i = 0; i < menuElements.length; i ++ ){
        menuElements[i].addEventListener("mouseover", function(event){
            var subMenu = this.firstElementChild.nextElementSibling;
            if (subMenu != null) {
                subMenu.classList.remove("hidden");
            }
        });
        
       menuElements[i].addEventListener("mouseout", function(event){
            var subMenu = this.firstElementChild.nextElementSibling;
            if (subMenu != null) {
                subMenu.classList.add("hidden");
            }  
        });  
    }
    
 //disappears to fast - to fix
});