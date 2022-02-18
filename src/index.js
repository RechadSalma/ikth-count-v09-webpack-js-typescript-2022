/*To listen to any unhandled promise rejections (no catch handler?)
+\ you probably remove it afterwards if you think you do not need it. */
window.addEventListener("unhandledrejection", function (event) {
  console.warn("iK unhandledrejection (promise): ", event.promise);
  console.warn("iK unhandledrejection (reason): ", event.reason);
});

const iKindexjs = () => {
  console.log("iK from the index.js");

  return `<h1>iK I am index page</h1>`;
}; /*END iKindexjs */

const iKbody = document.getElementsByTagName("body")[0];

iKbody.innerHTML = iKindexjs();
