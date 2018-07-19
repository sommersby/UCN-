export default {
  // logistic
  gei_plan_list: ['/logistics/plan/pageByPlanNo','LJ', 'BASE_URL'],
  get_transportation_list: ['/logistics/plan/pageByUnit', 'LJ','BASE_URL'],
  get_Customer: ['/logistics/plan/getCustomer', 'LJ','BASE_URL'],
  get_sku_list: ['/logistics/plan/pageBySkuCode','LJ', 'BASE_URL'],
  get_dictionary: ['/code/part','UMETA_URL'],
  delete_by_ids: ['/logistics/plan/deleteByIds', 'LJ','BASE_URL'],
  get_new_logistics_no: ['/logistics/plan/getNo', 'LJ','BASE_URL'],
  get_currency: ['/currency/all', 'LJ','UMETA_URL'],
  get_container_type: ['/containertype/all','UMETA_URL'],
  get_plan_details: ['/logistics/plan/detail', 'LJ','BASE_URL'],
  get_order_details: ['/logistics/order/detail', 'LJ','BASE_URL'],
  get_payment_list: ['/payment/list/', 'LJ','BASE_URL'],
  get_product_history: ['/logistics/plan/getProductHistory', 'LJ','BASE_URL'],
  get_product_order_history: ['/logistics/order/getProductHistory', 'LJ','BASE_URL'],
  get_order_list_with_page: ['/order/skuListPage','LJ', 'BASE_URL'],
  get_loading_list_plan: ['/logistics/order/pageByPlanNo','LJ', 'BASE_URL'],
  get_loading_list_unit: ['/logistics/order/pageByUnit','LJ', 'BASE_URL'],
  get_loading_list_sku: ['/logistics/order/pageBySkuCode','LJ', 'BASE_URL'],
  update_logistic_plan: ['/logistics/plan/modify','LJ', 'BASE_URL'],
  send_logistic_plan: ['/logistics/plan/send', 'LJ','BASE_URL'],
  send_draft_logistic_plan: ['/logistics/plan/sendDraft','LJ', 'BASE_URL'],
  save_draft_logistic_plan: ['/logistics/plan/saveDraft','LJ', 'BASE_URL'],
  get_payment_no: ['/payment/genNo','LJ', 'BASE_URL'],
  save_plan_payment: ['/payment/save','LJ','BASE_URL'],
  update_plan_payment: ['/payment/update', 'LJ','BASE_URL'],
  abandon_plan_payment: ['/payment/abandon', 'LJ','BASE_URL'],
  recover_plan_payment: ['/payment/recover', 'LJ','BASE_URL'],
  get_order_supplier: ['/logistics/order/getSupplier','LJ', 'BASE_URL'],
  get_plan_supplier: ['/logistics/plan/getSupplier','LJ', 'BASE_URL'],
  get_plan_rate: ['/logistics/plan/getRate', 'LJ','BASE_URL'],
  logistics_plan_confirm: ['/logistics/plan/confirm', 'LJ','BASE_URL'],
  logistics_order_confirm: ['/logistics/order/confirm', 'LJ','BASE_URL'],
  logistics_plan_cancel: ['/logistics/plan/cancel','LJ', 'BASE_URL'],
  logistics_order_cancelByIds: ['/logistics/order/cancelByIds', 'LJ','BASE_URL'],
  logistics_plan_getSupplierIds: ['/logistics/plan/getSupplierIds','LJ', 'BASE_URL'],
  logistics_order_getSupplierIds: ['/logistics/order/getSupplierIds','LJ', 'BASE_URL'],
  logistics_plan_batchSendDraft: ['/logistics/plan/batchSendDraft','LJ', 'BASE_URL'],
  logistics_plan_archive: ['/logistics/plan/archive','LJ', 'BASE_URL'],
  logistics_order_archive: ['/logistics/order/archive','LJ', 'BASE_URL'],
  logistics_plan_recover: ['/logistics/plan/recover','LJ', 'BASE_URL'],
  logistics_order_recover: ['/logistics/order/recover','LJ', 'BASE_URL'],
}
