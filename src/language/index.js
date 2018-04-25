import {localStore} from 'service/store';

const lang = localStore.get('language') || 'en';
export default _.extend(
  require(`./${lang}/common/quickLinks`),
  {workbench: require(`./${lang}/workbench/page`)},
  require(`./${lang}/workbench/pending`),
  {product: require(`./${lang}/product/product.basic`)},
  require(`./${lang}/product/productOverview`),
  {setting: require(`./${lang}/setting`)},
  {departmentSetting: require(`./${lang}/setting/department`)},
  require(`./${lang}/setting/setting.basic`),
  {baseText: require(`./${lang}/baseText`)},
  {basePlaceholder: require(`./${lang}/basePlaceholder`)},
  {inquiry: require(`./${lang}/inquiry/index`)},
  {payment: require(`./${lang}/payment/payment`)},
  require(`./${lang}/payment/payment.table`),
  {setting: require(`./${lang}/setting`)},
  { baseText: require(`./${lang}/baseText`) },
  { basePlaceholder: require(`./${lang}/basePlaceholder`) },
  { inquiry: require(`./${lang}/inquiry/index`) },
  { message: require(`./${lang}/message/message.table`) },
  require(`./${lang}/message/tabs`),
  {baseText: require(`./${lang}/baseText`)},
  {basePlaceholder: require(`./${lang}/basePlaceholder`)},
  {inquiry: require(`./${lang}/inquiry/index`)},
  require(`./${lang}/inquiry/viewByInqury.pending`),
  require(`./${lang}/inquiry/viewBySKU.pending`),
  require(`./${lang}/inquiry/basicInfo.pending`),
  require(`./${lang}/supplier/overview`),
  require(`./${lang}/supplier/detail.pending`),  
  require(`./${lang}/order/overview`),
  require(`/${lang}/order/basicinfo.pending`),
  require(`./${lang}/logistic/plan/overviewBtn.pending`),
  require(`./${lang}/logistic/plan/basicInfo.pending`),
  {logs: require(`./${lang}/logs/logs.table`)},
  {logBasic: require(`./${lang}/logs/logs.basic`)},
  {track: require(`./${lang}/track/trackBysku`)},
  require(`./${lang}/supplier/overview`) ,
  require(`./${lang}/supplier/detail.pending`) ,
  require(`./${lang}/order/overview`) ,
  require(`/${lang}/order/basicinfo.pending`),
  require(`./${lang}/logistic/plan/overviewBtn.pending`),
  require(`./${lang}/logistic/plan/plan.base`),
  require(`./${lang}/logistic/plan/overviewCheckbox.status`),
  require(`./${lang}/inquiry/compare.pending`),

  {warehouse: require(`./${lang}/warehouse/warehouse.basic`)},


    //CN配置
    // {warehouse:require(`./${lang}/warehouse/warehouse.basic`)}
)
