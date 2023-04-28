export const toggle = () => {
    let acc = document.getElementsByClassName("accordion");
    let chevrons = document.getElementsByClassName("chevron");
    
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        chevrons[i].classList.toggle("chev-active")
        acc[i].classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
};