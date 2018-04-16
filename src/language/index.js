import {localStore} from 'service/store';

const lang = localStore.get('language') || 'en';
export default _.extend(
  {workbench: require(`./${lang}/workbench`)},
    require(`./${lang}/workbench.pending`),



    {product:require(`./${lang}/product/product.basic`)},
    require(`./${lang}/product/productOverview`),



  require(`./${lang}/workbench.pending`),
  {setting: require(`./${lang}/setting`)},
  { baseText: require(`./${lang}/baseText`) },
  { basePlaceholder: require(`./${lang}/basePlaceholder`) },
  { inquiry: require(`./${lang}/inquiry/index`) },
<<<<<<< HEAD

  { supplier: require(`./${lang}/supplier/overview`) } ,
   { order: require(`./${lang}/order/overview`) },
    
=======
  require(`./${lang}/inquiry/viewByInqury.pending`),
  require(`./${lang}/inquiry/viewBySKU.pending`),
  require(`./${lang}/inquiry/detail/basicInfo.pending`),
  require(`/${lang}/inquiry/create/basicInfo.pending`)
>>>>>>> 81a409ffbb3217602702336c74e31b98bba41fa6
)
