import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import BRSBCarousel from './Components/Common/BRSBCarousel';

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(".wp-block-b-reactify-slider");

  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    const isPremium = brsbIsPipeChecker


    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        <BRSBCarousel attributes={attributes} isPremium={isPremium} isEditor={false} />
      </>
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
