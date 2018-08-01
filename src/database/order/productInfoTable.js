export default {
    label:{
        _important:true,
        _title:'Remark'
    },
    _remark:{
        _hide:true
    },
    skuSysCode:{
        _hide:true
    },
    skuId:{
        _hide:true
    },
    skuSupplierCode:{
        _hide:true
    },
    id:{
        _hide:true
    },
    entryDt:{
        _hide:true
    },
    fieldUpdate:{
        _hide:true
    },
    fieldRemarkUpdate:{
        _hide:true
    },
    skuPic:{
        _slot:'skuPictures',
        type:'pic',
        _image:true,
        key:'skuPictures',
        _upload: {
            readonly:true,
        }
    },
    skuNameEn:{
        _disabled:true,
    },
    skuNameCn:{
        _slot:'skuNameCn',
        _disabled:true
    },
    skuDescCn:{
        _disabled:true
    },
    skuDescEn:{
        _disabled:true
    },
    skuDescCustomer:{
        _disabled:true
    },
    skuNameCustomer:{
        _disabled:true
    },
    skuCustomerSkuCode:{
        _disabled:true
    },
    skuCode:{
        _disabled:true
    },
    skuSupplierName:{
        _disabled:true
    },
    skuFobCurrency:{
        _slot:'skuFobCurrency',
        type:'currency'
    },
    skuFobPrice:{
        _slot:'skuFobPrice',
    },
    skuFobPort:{},
    skuExwCurrency:{
        _slot:'skuExwCurrency',
        type:'currency'
    },
    skuExwPrice:{
        _slot:'skuExwPrice',
    },
    skuCifCurrency:{
        _slot:'skuCifCurrency',
    },
    skuCifPrice:{
        _slot:'skuCifPrice',
    },
    skuCifPort:{},
    skuDduCurrency:{
        _slot:'skuDduCurrency',
    },
    skuDduPrice:{
        _slot:'skuDduPrice',
    },
    skuDduPort:{},
    skuUnit:{
        _slot:'skuUnit',
    },
    skuMaterialEn:{},
    skuMaterialCn:{},
    skuQty:{
        _slot:'skuQty',
        _calculate:true
    },
    skuPrice:{
        _slot:'skuPrice',
        _calculate:true
    },
    skuQualifiedQty:{
        _disabled:true,
        _calculate:true
    },
    skuUntestedQty:{
        _disabled:true,
        _calculate:true
    },
    skuDeliveredQty:{
        _disabled:true,
        _calculate:true
    },
    skuUndeliveredQty:{
        _disabled:true,
        _calculate:true
    },
    skuRateValueAddedTax:{
        _slot:'skuRateValueAddedTax',
    },
    skuTaxRefundRate:{
        _slot:'skuTaxRefundRate',
    },
    skuColourEn:{},
    skuColourCn:{},
    skuMinOrderQty:{
        _disabled:true
    },
    skuDeliveryDates:{
        _slot:'skuDeliveryDates',
    },
    skuDesign:{},
    skuCategoryId:{
        _disabled:true
    },
    // skuCategoryOne:{},
    // skuCategoryTwo:{},
    // skuCategoryThree:{},
    // skuCategoryFour:{},
    skuCustomsCode:{
        _disabled:true
    },
    skuCustomsNameCn:{},
    skuCustomsNameEn:{},
    skuTradeMarkEn:{},
    skuTradeMarkCn:{},
    skuCommodityInspectionCn:{},
    skuCommodityInspectionEn:{},
    skuDeclareElement:{},
    skuOrigin:{},
    skuInspectQuarantineCategory:{
        _slot:'skuInspectQuarantineCategory'
    },
    skuUnitWeight:{
        _slot:'skuUnitWeight',
    },
    skuUnitLength:{
        _slot:'skuUnitLength',
    },
    skuUnitVolume:{
        _slot:'skuUnitVolume',
    },
    skuLength:{
        _slot:'skuLength',
    },
    skuWidth:{
        _slot:'skuWidth',
    },
    skuHeight:{
        _slot:'skuHeight',
    },
    skuNetWeight:{
        _slot:'skuNetWeight',
    },
    // skuGrossWeight:{},
    skuVolume:{
        _slot:'skuVolume',
    },
    skuMethodPkgEn:{},
    skuMethodPkgCn:{},
    skuInnerCartonUnit:{},
    skuInnerCartonQty:{
        _slot:'skuInnerCartonQty',
        _calculate:true
    },
    skuInnerCartonLength:{
        _slot:'skuInnerCartonLength',
    },
    skuInnerCartonWidth:{
        _slot:'skuInnerCartonWidth',
    },
    skuInnerCartonHeight:{
        _slot:'skuInnerCartonHeight',
    },
    skuInnerCartonWeightNet:{
        _slot:'skuInnerCartonWeightNet',
    },
    skuInnerCartonRoughWeight:{
        _slot:'skuInnerCartonRoughWeight',
    },
    skuInnerCartonVolume:{
        _slot:'skuInnerCartonVolume',
    },
    skuInnerCartonDesc:{},
    skuInnerCartonMethodEn:{},
    skuInnerCartonMethodCn:{},
    skuOuterCartonUnit:{},
    skuOuterCartonDesc:{},
    skuInnerCartonOuterNum:{
        _slot:'skuInnerCartonOuterNum',
        _calculate:true
    },
    skuOuterCartonQty:{
        _slot:'skuOuterCartonQty',
        _calculate:true
    },
    skuOuterCartonLength:{
        _slot:'skuOuterCartonLength',
    },
    skuOuterCartonWidth:{
        _slot:'skuOuterCartonWidth',
    },
    skuOuterCartonHeight:{
        _slot:'skuOuterCartonHeight',
    },
    skuOuterCartonNetWeight:{
        _slot:'skuOuterCartonNetWeight',
    },
    skuOuterCartonRoughWeight:{
        _slot:'skuOuterCartonRoughWeight',
    },
    skuOuterCartonVolume:{
        _slot:'skuOuterCartonVolume',
    },
    skuOuterCartonMethodEn:{},
    skuOuterCartonMethodCn:{},
    skuBrand:{},
    skuApplicableAge:{
        _slot:'skuApplicableAge',
    },
    skuExpireDates:{
        _slot:'skuExpireDates',
    },
    skuExpireUnit:{
        _slot:'skuExpireUnit',
    },
    skuComments:{},
    skuStatus:{
        _slot:'skuStatus',
        _fixed:'left'
    },
    skuSaleStatus:{
        _disabled:true
    },
    skuLabel:{},
    skuBarCode:{},
    skuInnerPackBarCode:{},
    skuInnerPackLabel:{},
    skuInnerPackCode:{},
    skuShippingMarks:{},
    skuOuterCartonBarCode:{},
    skuOuterCartonCode:{},
    // skuPic:{
    //     _slot:'skuPictures',
    //     type:'pic',
    //     _image:true,
    //     key:'skuPictures',
    //     _upload: {
    //         ref: 'uploadSkuPictures'
    //     }
    //     // disabled:true
    // },
    skuLabelPic:{
        _slot:'skuLabelPic',
        _image:true,
        _upload:{
            limit:1
        }
    },
    skuLabelDesc:{},
    skuPkgMethodPic:{
        _slot:'skuPkgMethodPic',
        _image:true,
        _upload:{
            limit:1
        }
    },
    skuInnerCartonPic:{
        _slot:'skuInnerCartonPic',
        _image:true,
        _upload:{
            limit:1
        }
    },
    skuOuterCartonPic:{
        _slot:'skuOuterCartonPic',
        _image:true,
        _upload:{
            limit:1
        }
    },
    skuSample:{
        _slot:'skuSample',
    },
    skuSampleQty:{
        _slot:'skuSampleQty',
        _calculate:true
    },
    skuSamplePrice:{
        _slot:'skuSamplePrice',
    },
    skuQuotationNo:{
        _disabled:true
    },
    skuRemarkOne:{},
    skuRemarkTwo:{},
    skuRemarkThree:{},
    skuAdditionalOne:{
        _slot:'skuAdditionalOne',
        _image:true,
        _upload:{
            limit:1
        }
    },
    skuAdditionalTwo:{
        _slot:'skuAdditionalTwo',
        _image:true,
        _upload:{
            limit:1
        }
    },
    skuAdditionalThree:{
        _slot:'skuAdditionalThree',
        _image:true,
        _upload:{
            limit:1
        }
    },
    skuAdditionalFour:{
        _slot:'skuAdditionalFour',
        _image:true,
        _upload:{
            limit:1
        }
    },
}
