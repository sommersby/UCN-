export default {
    remarkDate: {
        key: 'updateDt',
        label: ' ',
        type: 'text',
        _disabled: true,
        _inquiryHide: true
    },
    id: {
        _hide: true
    },
    _remark: {
        _hide: true
    },
    operater: { //修改人 系统带入
        placeholder: 'Please select',
        width: '150px',
        type: 'text',
        state: 0,
        _disabled: true,
        _inquiryHide: true
    },
    timeZone: { //时区 系统带入
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0,
        _disabled: true,
        _inquiryHide: true
    },
    time: { //时间 系统带入
        key: 'entryDt',
        placeholder: 'Please select time',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0,
        _disabled: true,
        _inquiryHide: true
    },
    inquiryNo: { //询价单号 系统带入
        key: 'inquiryNo',
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0,
        _disabled: true,
        _inquiryHide: true
    },
    quotationNo: { //询价子单号 系统带入
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0,
        _disabled: true,
        _inquiryHide: true
    },
    inquiryStatus: { //询价单状态
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0,
        _disabled: true,
        _inquiryHide: true
    },
    transportationWay: { //下拉选择 运输方式
        key: 'transport',
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'select',
        select: [
            { label: 'by train', value: 0}, 
            { label: 'by air', value: 1},
            { label: 'by boat', value: 2},
            { label: 'by truck', value: 3}
        ],
        state: 0
    },
    payment: { //付款方式 下拉选择
        key: 'paymentMethod',
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'select',
        select: [
            { label: 'L/C', value: 0 },
            { label: 'T/T', value: 1 },
            { label: 'D/P', value: 2 }
        ],
        state: 0
    },
    destinationCountry: { //目的国 下拉选择
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'select',
        select: [
            { label: '中国', value: 0 }
        ],
        state: 0
    },
    departureCountry: { //发运国 下拉选择所有选项 ok
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'select',
        select: [
            { label: '火星', value: 0 }
        ],
        state: 0
    },
    incoterm: { //价格条款 选择 ok
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'select',
        select: [
            { label: 'FOB', value: 0 },
            { label: 'EXW', value: 1 },
            { label: 'CIF', value: 2 }
        ],
        state: 0
    },
    currency: { //币种 选择 ok
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'select',
        select: [
            { label: 'USD', value: 0 },
            { label: 'CNY', value: 1 },
            { label: 'EUR', value: 2 }
        ],
        state: 0
    },
    discountRate: { //折扣率 限制输入百分比 ok
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: '%',
        state: 0
    },
    departurePort: { //发运港口  ok
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0
    },
    createTime: { // 创建时间
        key: 'entryDt',
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0,
        _inquiryHide: true
    },
    destinationPort: { //目的港口 ok
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0
    },
    supplierName: { // 供应商名称 ok
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'select',
        select: [
            { label: '供应商罗涛', value: 0 }
        ],
        state: 0
    },
    supplierType: { //供应商类型 ok
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0
    },
    exportLicense: { //出口资质 ok
        placeholder: 'Please select',
        rules: [],
        select: [
            { label: 'yes', value: 0 },
            { label: 'no', value: 1 }
        ],
        width: '150px',
        type: 'select',
        state: 0
    },
    relatedOrderNO: { //关联订单号
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'text',
        state: 0
    },
    attachment: { //上传附件
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'attachment',
        state: 0,
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24
    },
    inquiryRemark: { //询价备注
        key: 'remark',
        placeholder: 'Please select',
        rules: [],
        width: '150px',
        type: 'textarea',
        state: 0,
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24
    },
}