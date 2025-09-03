import type { IStaticMethods } from "preline/dist";

declare global {
  interface Window {
    $: typeof import("jquery");
    // Optional third-party libraries
    _;
    dataTable;
    dropzone;
    // Preline UI
    hSStaticMethods: IStaticMethods;
    jQuery: typeof import("jquery");

    vanillaCalendarPro;
  }
}

