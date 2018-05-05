export default {
  createInquiry: {
    icon: 'icon-xunpanC',
    link: '/negotiation/createInquiry',
    customer: true,
    supplier: false,
    server: false,
    defaultShow: true,
  },
  createOrder: {
    icon: 'icon-dingdanC',
    link: '/order/creat',
    customer: true,
    supplier: false,
    server: false,
    defaultShow: true,
  },
  addProduct: {
    icon: 'icon-chanpinC',
    link: '',
    customer: false,
    supplier: true,
    server: false,
    defaultShow: true,
  },
  createInbound: {
    icon: 'icon-rukuC',
    link: '',
    customer: false,
    supplier: true,
    server: false,
    defaultShow: true,
  },
  createQC: {
    icon: 'icon-QCC',
    link: '',
    customer: true,
    supplier: false,
    server: false,
    defaultShow: true,
  },
  createOutbound: {
    icon: 'icon-chukuC',
    link: '',
    customer: false,
    supplier: false,
    server: false,
    defaultShow: true,
  },
  placeLogisticPlan: {
    icon: 'icon-wuliuC',
    link: '/logistic/placeLogisticPlan',
    customer: true,
    supplier: false,
    server: false,
    defaultShow: true,
  },
  // placeLogisticOrder: {icon: '', link: ''},
  message: {
    icon: 'icon-xiaoxi',
    link: '/message/index',
    customer: true,
    supplier: true,
    server: true,
  },
  sourcingOverview: { // todo not
    icon: '',
    link: '/product/sourcing',
    customer: true,
    supplier: false,
    server: false,
  },
  bookmarkOverview: {
    icon: 'icon-shuqian',
    link: '/product/bookmark',
    customer: true,
    supplier: false,
    server: false,
  },
  compareInquiryOverview: {// todo not
    icon: '',
    link: '/negotiation/compareDetail/inquiry',
    customer: true,
    supplier: false,
    server: false,
  },
  supplierOverview: {
    icon: 'icon-gongyingshang',
    ink: '/supplier/sourcing',
    customer: true,
    supplier: false,
    server: false,
  },
  inquiry: {
    icon: 'icon-xunpan',
    link: '/negotiation/inquiry',
    customer: true,
    supplier: false,
    server: false,
  },
  orderOverview: {
    icon: 'icon-dingdan',
    link: '/order/overview',
    customer: true,
    supplier: true,
    server: false,
  },
  warehouse: { // todo not
    icon: '', link: '/warehouse/overview',
    customer: true,
    supplier: true,
    server: false,
  },
  inbound: {
    icon: 'icon-ruku',
    link: '',
    customer: false,
    supplier: true,
    server: false,
  },
  outbound: {
    icon: 'icon-chuku',
    link: '',
    customer: false,
    supplier: true,
    server: false,
  },
  QCOrderOverview: {
    icon: 'icon-QC',
    link: '/warehouse/qcOverview',
    customer: true,
    supplier: true,
    server: true,
  },
  logisticPlanOverview: {
    icon: 'icon-wuliu',
    link: '/logistic/plan',
    customer: true,
    supplier: false,
    server: false,
  },
  loardinglistOrderOverview: { // todo not
    icon: '', link: '/logistic/planDetail',
    customer: true,
    supplier: true,
    server: false,
  },
  track: {
    icon: 'icon-genzong',
    link: '/track/index',
    customer: true,
    supplier: false,
    server: false,
  },
  compareSupplierOverview: {
    icon: 'icon-duibiS',
    link: '/supplier/compare',
    customer: true,
    supplier: false,
    server: false,
  },
  productOverview: { // todo
    icon: '',
    link: '',
    customer: false,
    supplier: true,
    server: false,
  },
  customerOverview: {
    icon: 'icon-kehu',
    link: '',
    customer: false,
    supplier: true,
    server: true,
  },
}
