import type { IStaticMethods } from 'preline/dist';

declare global
{
  interface Window
  {
    $: typeof import('jquery');
    // Optional third-party libraries
    _;
    DataTable;
    Dropzone;
    // Preline UI
    HSStaticMethods: IStaticMethods;
    jQuery: typeof import('jquery');

    VanillaCalendarPro;
  }
}


