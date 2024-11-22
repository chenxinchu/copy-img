const init = () => {
  const pasteBoardEl = document.querySelector("#J-pasteInput");
  pasteBoardEl.addEventListener("paste", (e) => {
    const items = e.clipboardData && e.clipboardData.items;

    if (items && items.length) {
      for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
        if (items[i].kind === "file" && /^image\//.test(items[i].type)) {
          e.preventDefault();
          if (items[i].getAsFile()) {
            showImage(items[i].getAsFile());
          }
        }
      }
    }
  });
};
const showImage = async (image) => {
  const reader = new FileReader();
  reader.onload = function (e) {
    const tpl = `<img src="${e.target.result}" class="max-w-full max-h-full object-cover rounded" />`;
    document.querySelector("#J-pasteBoard").innerHTML = tpl;
  };
  reader.readAsDataURL(image);
};
const showMessage = (msg) => {
  const msgEl = document.createElement("div");
  msgEl.classList.add(
    "fixed",
    "top-[40%]",
    "left-[50%]",
    "translate-x-[-50%]",
    "bg-[#000000cc]",
    "px-4",
    "py-2",
    "rounded-md",
    "text-[#fff]"
  );
  msgEl.innerText = msg;
  document.body.appendChild(msgEl);
  setTimeout(() => {
    document.body.removeChild(msgEl);
  }, 2000);
};

window.onload = () => {
  init();
};
