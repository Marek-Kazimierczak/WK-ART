const translate3d = () => {
  let screenWidth = window.screen.width / 2,
    screenHeight = window.screen.height / 2,
    elems = document.querySelectorAll(".target-js"),
    validPropertyPrefix = "",
    otherProperty = "perspective(1000px)",
    elemStyle = elems[0].style;

  if (typeof elemStyle.webkitTransform == "string") {
    validPropertyPrefix = "webkitTransform";
  } else if (typeof elemStyle.MozTransform == "string") {
    validPropertyPrefix = "MozTransform";
  }

  document.addEventListener("mousemove", function(e) {
    let centroX = e.clientX - screenWidth,
      centroY = screenHeight - (e.clientY + 13),
      degX = centroX * 0.04,
      degY = centroY * 0.02,
      elem;

    for (let i = 0; i < elems.length; i++) {
      elem = elems[i];
      elem.style[validPropertyPrefix] =
        otherProperty + "rotateY(" + degX + "deg)  rotateX(" + degY + "deg)";
    }
  });
};

const translate3DTimeOutset = () => {
  setTimeout(translate3d, 5000);
};

export { translate3DTimeOutset };
