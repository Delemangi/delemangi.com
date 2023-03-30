import { Tooltip } from "bootstrap";
import "../scss/styles.scss";

async function click() {
  await navigator.clipboard.writeText("stefan#4595");
  tooltip.show();
  setTimeout(() => tooltip.hide(), 1000);
}

const tooltip = new Tooltip('[data-bs-toggle="tooltip"]');

document.querySelector("button#discord")?.addEventListener("click", click);
