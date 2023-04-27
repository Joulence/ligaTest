export function onclick() {
  const openBtn = document.getElementById('openMenu');
  const logo = document.getElementById('logo');

  openBtn.addEventListener('click', () => {

    if (document.getElementById("Sidenav").style.width == "250px") {
      document.getElementById("Sidenav").style.width = "0";
      document.getElementById("body").style.marginLeft = "0";
      logo.style.marginLeft = "0";
    } else {
      document.getElementById("Sidenav").style.width = "250px";
      document.getElementById("body").style.marginLeft = "265px";
      logo.style.marginLeft = "250px";
    }

  });
}