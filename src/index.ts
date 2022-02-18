import "./styles/customBootstrap.scss";
import "./styles/global.scss";
// @ts-ignore
import Home from "./pages/home.ts";

/*To listen to any unhandled promise rejections (no catch handler?)
+\ you probably remove it afterwards if you think you do not need it. */
window.addEventListener("unhandledrejection", function (event) {
  console.warn("iK unhandledrejection (promise): ", event.promise);
  console.warn("iK unhandledrejection (reason): ", event.reason);
});

const iKindexjs = () => {
  console.log("iK from the index.ts typescript v1");

  return `
  <div>
    <header>iK I am header</header>

    <h1 class="p-3 mb-2 bg-primary text-white">iK Layout page v2</h1>

    ${Home()}

    <footer>iK I am footer</footer>
  </div>
  `;
}; /*END iKindexjs */

const iKbody = document.getElementsByTagName("body")[0];

iKbody.innerHTML = iKindexjs();
