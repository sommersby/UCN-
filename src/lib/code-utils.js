/**
 * 定义Code的值类型等配置
 */
const codeConfig = {
  'EL_IS': {valueType: Boolean},
  'INQUIRY_STATUS': {valueType: Number},
  'ITM': {valueType: Number},
  'LH_UNIT': {valueType: Number},
  'MD_TN': {valueType: Number},
  'OEM_IS': {valueType: Boolean},
  'PMT': {valueType: Number},
  'SKU_PG_IS': {valueType: Boolean},
  'SKU_SALE_STATUS': {valueType: Number},
  'SKU_UNIT': {valueType: Number},
  'SUPPLIER_TYPE': {valueType: Number},
  'UDB_IS': {valueType: Boolean},
  'VE_UNIT': {valueType: Number},
  'CY_UNIT': {valueType: String},
  'COUNTRY': {valueType: String}
};


const codeUtils = {
  convertDicValueType(codelist) {
    let cfg;
    for (let codes of codelist) {
      if (codes.code && Array.isArray(codes.codes) && codeConfig[codes.code]) {
        cfg = codeConfig[codes.code];
        for (let code of codes.codes) {
          code.value = cfg.valueType(code.value || code.code);
        }
      }
    }
    return codelist;
  }
};

export default codeUtils;