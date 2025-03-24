export const LOCAL_SERVER = "http://127.0.0.1:5000";
export const DEFAULT_TAX  = 18
export const DEFAULT_COIN = 1//SHAKEL
export const AppEndPoints = {
  /**
   * כאן יהיה את כל הנקודות קצה,
   * כלומר "path_url"
   *
   */

  HOME: "/home",
  HOME_DEFAULT: "/",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  INVOICE: "/invoice",
  FORM: "/createInvoice",
  API: "/api",
  AUTH:"/auth"
};


export const ApiInvoiceRequest = {

  create_invoice: 1,
  get_user:2,
}
