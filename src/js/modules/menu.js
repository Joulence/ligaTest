export function onclick() {
  const openBtn = document.getElementById('openMenu');
  const closeBtn = document.getElementById('closeBtn');

  openBtn.addEventListener('click', () => {

    if (document.getElementById("Sidenav").style.width == "250px") {
      document.getElementById("Sidenav").style.width = "0";
      document.getElementById("body").style.marginLeft = "0";
    } else {
      document.getElementById("Sidenav").style.width = "250px";
      document.getElementById("body").style.marginLeft = "250px";
    }

  });

  closeBtn.addEventListener('click', () => {
    document.getElementById("Sidenav").style.width = "0";
    document.getElementById("body").style.marginLeft = "0";
  });
}