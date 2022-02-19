import "./styles/customBootstrap.scss";
import "./styles/global.scss";
// @ts-ignore
import Home from "./pages/home.ts";
// @ts-ignore
import Counter from "./components/Counter.ts";

/*To listen to any unhandled promise rejections (no catch handler?)
+\ you probably remove it afterwards if you think you do not need it. */
// if (typeof window != "undefined") {
//   window.addEventListener("unhandledrejection", function (event: any): void {
//     console.warn("iK unhandledrejection (promise): ", event.promise);
//     console.warn("iK unhandledrejection (reason): ", event.reason);
//   });
// }

const iKindexjs = (): string => {
  console.log("iK from the index.ts typescript v1");

  return `
    <div>
      <header>iK I am header</header>

      <h1 class="p-3 mb-2 bg-primary text-white">iK Webpack / Typescript / Javascript. v1.00</h1>

      ${Home()}

      <footer>iK I am footer</footer>
    </div>
  `;
}; /*END iKindexjs */

const iKbody = document.getElementsByTagName("body")[0] as HTMLBodyElement;

iKbody.innerHTML = iKindexjs();

Counter.applyEventHandlerOnCounterButtons();
