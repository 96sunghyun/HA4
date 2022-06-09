import axios from "axios";

let getMnemonic = document.querySelector(".getMnemonic");
let mnemonic = document.querySelector(".mnemonic");
let a;
getMnemonic.on("click");
const mnemonicGetter = () => {
  axios
    .post("http://localhost:3000/wallet/newMnemonic")
    .then((res) => (a = res));
};
mnemonic.textContent = a;
