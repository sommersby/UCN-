const tableViewByInquiry = { //view by inquiry
    inquiryNo: "Inquiry No.",
    quotationNo: "Quotation No.",
    sequence: "Sequence",
    status: "Status",
    supplier: "Supplier",
    SKUQty: "SKU Qty",
    orderValue: "Order Value",
    currency: "Currency",
    totalQTY: "Total QTY",
    incoterm: "Incoterm",
    port: "Port",
    remark: "Remark"
}

const tableViewBySKU = { //view by SKU
    inquiryNo: "Inquiry No.",
    quotationNo: "Quotation No.",
    sequence: "Sequence",
    status: "Status",
    supplier: "Supplier",
    SKUCode: "SKU code",
    SKUName: "SKU name",
    price: "Price",
    currency: "Currency",
    totalQTY: "Total QTY",
    incoterm: "Incoterm",
    port: "Port",
    remark: "Remark"
}

const tableBasicInfo = {
    inquiryNo: "Inquiry No.",
    quotationNo: "Quotation No.",
    time: "Time",
    shippingMethod: "Shipping method",
    paymentTerm: "Payment Term",
    destinationCountr: "Destination Country",
    departureCountry: "Departure Country",
    incoterm: "Incoterm",
    currency: "Currency",
    discountRate: "discount rate",
    port: "Port",
    supplierName: "supplier name",
    supplierType: "supplier type",
    exportLicense: "export license",
    attachment: "Attachment",
    inquiryRemark: "Inquiry remark",
}

const tableProductInfo = {
    time: "time",
    pic: "pic",
    SKUStatus: "SKU status",
    SKUNo: "SKU No",
    SKUEnglishName: "SKU English name",
    SKUEnglishDescription: "SKU English description",
    SKUDescriptionInCustomerLanguage: "SKU description in customer language",
    SKUNameInCustomerLanguage: "SKU name in customer language",
    SKUCode: "SKU code",
    vendorSkuCode: "vendor sku code",
    supplierName: "supplier name",
    supplierCode: "supplier code",
    unitOfMeasurement: "unit of measurement",
    productFormation: "product formation",
    textureEnglish: "texture(English)",
    colourEnglish: "colour(English)",
    minimumOrderQuantity: "minimum order quantity",
    deliveryDate: "delivery date",
    productDesign: "product design",
    categoryLevel1: "category level 1",
    categoryLevel2: "category level 2",
    categoryLevel3: "category level 3",
    categoryLevel4: "category level 4",
    readilyAvailable: "Readily Available",
    SKUAvailable: "SKU available",
    restrictedSellingCountry: "Restricted selling country",
    applicableAge: "applicable age",
    expirationDate: "expiration date",
    unexpirationDate: "unexpiration date",
    explain: "explain",
    FOBCurrency: "FOB currency",
    FOBPrice: "FOB price",
    FOBPort: "FOB Port",
    EXWPrice: "EXW price",
    EXWCurrency: "EXW currency",
    otherIncoterm: "other incoterm",
    otherIncotermPrice: "other incoterm price",
    otherIncotermArea: "other incoterm area",
    otherIncotermCurrency: "other incoterm currency",
    rateOfValueAddedTax: "rate of value-added tax",
    taxRefundTate: "tax refund rate",
    customsCode: "customs code",
    customsDeclarationNameInChinese: "customs declaration name(in Chinese)",
    customsDeclarationNameInEnglish: "customs declaration name(in English)",
    ChineseTradeMark: "Chinese trade mark",
    EnglishTradeMark: "English trade mark",
    commodityInspectionChineseName: "commodity inspection Chinese name",
    commodityInspectionEnglishName: "commodity inspection English name",
    declareElements: "Declare elements",
    origin: "origin",
    inspectionAndQuarantineCategory: "Inspection and quarantine category",
    brand: "brand",
    brandRemark: "brand remark",
    related: "related",
    certificate: "certificate",
    unitOfWeight: "unit of weight",
    unitOfLength: "unit of length",
    unitOfVolume: "unit of volume",
    SKULength: "SKU length",
    SKUBreadth: "SKU breadth",
    SKUHeight: "SKU height",
    SKUNetWeight: "SKU net weight",
    SKUVolume: "SKU volume",
    packingMethodCN: "Packing method CN",
    packingMethodEN: "Packing method EN",
    unitOfMediumPackage: "unit of medium package",
    SKUQuantityOfMediumPackage: "SKU quantity of medium package",
    lengthOfMediumPackage: "length of medium package",
    breadthOfMediumPackage: "breadth of medium package",
    heightOfMediumPackage: "height of medium package",
    netWeightOfMediumPackage: "net weight of medium package",
    roughWeightOfMediumPackage: "rough weight of medium package",
    volumeOfMediumPackage: "volume of medium package",
    descriptionOfMediumPackage: "description of medium package",
    packingMethodOfMediumPackageCN: "packing method of medium package CN",
    packingMethodOfMediumPackageEN: "packing method of medium package EN",
    unitOfOuterBox: "unit of outer box",
    descriptionOfOuterBox: "description of outer box",
    SKUQuantityOfOuterBox: "SKU quantity of outer box",
    lengthOfOuterBox: "length of outer box",
    breadthOfOuterBox: "breadth of outer box",
    heightOfOuterBox: "height of outer box",
    netWeightOfOuterBox: "net weight of outer box",
    roughWeightOfOuterBox: "rough weight of outer box",
    volumeOfOuterBox: "volume of outer box",
    outerPackingMethodCN: "outer packing method CN",
    outerPackingMethodEN: "outer packing method EN",
    OEM: "OEM",
    GPSKUQuantity20: "20GP SKU quantity",
    GPSKUQuantity40: "40GP SKU quantity",
    HQSKUQuantity40: "40HQ SKU quantity",
    SKUQuantityPerTray: "SKU quantity per tray",
    specialTransportRequirements: "Special transport requirements",
    inventoryCostCalculationMethod: "Inventory cost calculation method.",
    defaultWarehouse: "default warehouse",
    warehouseQuantity: "warehouse quantity",
    safeStock: "safe stock",
    minimumStock: "minimum stock",
    maximumBatch: "Maximum batch",
    mainSaleCountry: "main sale country",
    mainSaleArea: "main sale area",
    prductionTime: "prduction time",
    qualityStander: "quality stander",
    yearOfListed: "year of listed",
    useDisplayBoxOrNot: "use display box or not",
    SKUQuantityInDisplayBox: "SKU quantity in display box",
    lengthWidthAndHeight: "length width and height",
    otherPackingInformationCN: "other packing information CN",
    otherPackingInformationEN: "other packing information EN",
    adjustSKUAndPackageOrNot: "adjust SKU and package or not"
};

const tableCompareOverview = {
    compareTime: "compare time",
    compareName: "compare name",
    compareItem: "compare item",
    operater: "operater",
    inquiryNo: "inquiryNo",
    quotationNo: "quotationNo",
    status: "status",
    supplier: "SKUQty",
    inquiryValue: "inquiryValue",
    currency: "currency",
    incoterm: "incoterm",
    port: "port",
    inquiryRemark: "inquiryRemark"
};

const tableCompareOverviewSelect = { 
    compareName: "compare name",
    compareItem: "compare item"
};

const tableCompareByInquiry = { //compare
    inquiryNo: "Inquiry No.",
    quotationNo: "Quotation No.",
    status: "Status",
    supplier: "Supplier",
    SKUQty: "SKU Qty",
    inquiryValue: "inquiry Value",
    currency: "Currency",
    incoterm: "Incoterm",
    port: "Port",
    inquiryRemark: "inquiry remark",
};

const tableCompareBySKU = { //compare
    supplierName: "supplier name",
    validPeriodOfQuotation: "valid period of quotation",
    incoterm: "Incoterm",
    currency: "currency",
    paymentItem: "payment item",
    port: "port",
    remark: "remark",
    mainPic: "main pic",
    subPic: "sub pic",
    SKUEnglishDescription: "SKU English description",
    SKUDescription: "SKU description",
    textureEnglish: "texture(English)",
    unitOfMeasurement: "unit of measurement",
    minimumOrderQuantity: "minimum order quantity",
    deliveryDate: "delivery date",
    skuQuantityOfQuotation: "sku quantity of quotation",
    SKUQuantityOfOuterBox: "SKU quantity of outer box",
    SKUQuantityOfMediumPackage: "SKU quantity of medium package",
    packingMethodEN: "Packing method EN",
    packingMethodOfMediumPackageEN: "packing method of medium package EN",
    outerPackingMethodEN: "outer packing method EN",
    OEM: "OEM",
    brand: "brand",
    incoterm: "incoterm",
    customerSkuQuantity: "customer sku quantity",
    customerSkuPrice: "customer sku price"
};

export {
    tableViewByInquiry,
    tableViewBySKU,
    tableBasicInfo,
    tableProductInfo,
    tableCompareOverview,
    tableCompareOverviewSelect,
    tableCompareByInquiry,
    tableCompareBySKU
}