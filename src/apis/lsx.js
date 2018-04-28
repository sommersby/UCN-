export default {
    get_productDetail: ['/sku/{id}', 'BASE_CS','USUPPLY_URL'],
    delete_product: ['/sku/{id}/delete', 'BASE_CS','USUPPLY_URL'],
    change_productStatus: ['/sku/{id}/status', 'BASE_CS','USUPPLY_URL'],
    get_productList: ['/sku/listSkuByParams', 'BASE_CS','USUPPLY_URL'],
    get_supplierWhole: ['/supplierWhole', 'BASE_CS','USUPPLY_URL'],
    add_address: ['/supplier/address', 'BASE_CS','USUPPLY_URL'],
    delete_address: ['/supplier/delAddress/{id}', 'BASE_CS','USUPPLY_URL'],
    update_address: ['/supplier/address/{id}', 'BASE_CS','USUPPLY_URL'],
    add_account: ['/supplier/account', 'BASE_CS','USUPPLY_URL'],
    update_account: ['/supplier/account/{id}', 'BASE_CS','USUPPLY_URL'],
    delete_account: ['/supplier/delAccount/{id}', 'BASE_CS','USUPPLY_URL'],
    delete_contact: ['/supplier/delContact/{id}', 'BASE_CS','USUPPLY_URL'],
    update_contact: ['/supplier/contact/{id}', 'BASE_CS','USUPPLY_URL'],
    add_contact: ['/supplier/contact', 'BASE_CS','USUPPLY_URL'],
    update_supplier: ['/supplier/{id}', 'BASE_CS','USUPPLY_URL'],


    //department setting
    get_departmentOverview: ['/department/overview', 'BASE_LYF','UUSER_URL'],
    get_department: ['/department', 'BASE_LYF','UUSER_URL'],
    get_departmentUser: ['/user/list', 'BASE_LYF','UUSER_URL'],
    delete_department: ['/department/{deptId}', 'BASE_LYF','UUSER_URL'],
    add_departmentRole: ['/role', 'BASE_LYF','UUSER_URL'],
    delete_departmentRole: ['/role/{deptId}/{roleId}', 'BASE_LYF','UUSER_URL'],


    /**
     * seller product
     * */

    add_newSKU: ['/sku', 'BASE_CS'],



    //product supplier
    get_sellerCustomer:['/supplier/sku/setting/listCustomers','BASE_CS','USUPPLY_URL'],



    //product buyer
    get_buyerProductList:['/purchase/sku/listSkuByParams','BASE_CS1','UPURCHASE_URL'],
    get_buyerBookmarkList:['/purchase/sku/listBookmark','BASE_CS1','UPURCHASE_URL'],
    add_buyerBookmark:['/purchase/sku/bookmark','BASE_CS1','UPURCHASE_URL'],
    add_buyerOneBookmark:['/purchase/sku/bookmark/one/{id}','BASE_CS1','UPURCHASE_URL'],
    add_bookmark:['/purchase/sku/bookmark','BASE_CS1','UPURCHASE_URL'],
    get_buyerRemarkList:['/purchase/sku/listSkuRemark/{id}','BASE_CS1','UPURCHASE_URL'],
    add_buyerProductRemark:['/purchase/sku/remark','BASE_CS1','UPURCHASE_URL'],
    update_buyerProductRemark:['/purchase/sku/remark/{id}','BASE_CS1','UPURCHASE_URL'],
    delete_buyerProductRemark:['/purchase/sku/deleteSkuRemark/{id}','BASE_CS1','UPURCHASE_URL'],
    delete_buyerProductBookmark:['/purchase/sku/deleteBookmark','BASE_CS1','UPURCHASE_URL'],
    add_customerSku:['/purchase/sku/addCustomerSku','BASE_CS1','UPURCHASE_URL'],
    get_compareList:['/purchase/sku/listCompare','BASE_CS1','UPURCHASE_URL'],
    recover_bookmark:['/purchase/sku/recoverBookmark','BASE_CS1','UPURCHASE_URL'],
    get_skuListByIds:['/purchase/sku/listSkuByIds','BASE_CS1','UPURCHASE_URL'],
    add_buyerProductCompare:['/purchase/sku/compare','BASE_CS1','UPURCHASE_URL'],
    delete_buyerProductCompareDetail:['/purchase/supplier/listCompareDetails','BASE_CS1','UPURCHASE_URL'],
    get_buyerProductCompareDetail:['/purchase/sku/listCompareDetails','BASE_CS1','UPURCHASE_URL'],
    delete_buyerProductCompare:['/purchase/sku/deleteCompare','BASE_CS1','UPURCHASE_URL'],
    get_buyerProductDetail:['/purchase/sku/{id}','BASE_CS1','UPURCHASE_URL'],
    edit_buyerProductBookmark:['/purchase/sku/bookmark/{id}','BASE_CS1','UPURCHASE_URL'],
    update_buyerProductCompare:['/purchase/sku/compare/{id}','BASE_CS1','UPURCHASE_URL'],


    /**
     * seller warehouse
     * */
    get_inboundData:['/inbound/page','BASE_SELLER','USUPPLY_URL'],
    get_productInfo:['/order/skuListPage','BASE_TEST','USUPPLY_URL'],
    get_inboundDetail:['/inbound/getById','BASE_SELLER','USUPPLY_URL'],
    add_inbound:['/inbound/add','BASE_SELLER','USUPPLY_URL'],
    // get_productInfo:['/order/skuListPage','BASE_BUYER'],
}