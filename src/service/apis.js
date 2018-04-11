const version = ['/web/v1', '/web/v2', '/web/v3'];
import config from './config';

const apis = {
  sys_category: ['/sys/category', 'BASE_CS'],
  get_quickLink: ['/getQuickLink', 'BASE_API'],
  category: ['/category', 'BASE_CS'],
  mapping_category: ['/category/mapping', 'BASE_CS'],
  getCategory:['/category','BASE_CS'],
<<<<<<< HEAD
  delete_category: ['/category/delete', 'BASE_CS'],
=======
  delete_category: ['/category/delete/', 'BASE_CS'],
    //供应商product接口
>>>>>>> df417661a3219be62a30b078a3a4c78911d760f3
  add_newSKU:['/sku','BASE_CS'],
  get_listData:['/sku/listSkuByParams','BASE_CS'],

  supplier_overview: ['/supplierOverview', 'BASE_API'],
<<<<<<< HEAD
  
=======

>>>>>>> df417661a3219be62a30b078a3a4c78911d760f3
};

let list = _.mapObject(apis, val => {
  let b = ''
    , v = version[val[2] || 0];
  if (config.IS_MOCK && config.ENV_FLAG === 'local') {
    b = config.ENV.MOCK;
  } else if (_.indexOf(_.keys(config.ENV), val[1]) > -1) {
    b = config.ENV[val[1]] + v;
  } else {
    b = config.ENV.BASE_API + v;
  }
  return b + val[0];
});

export default list;