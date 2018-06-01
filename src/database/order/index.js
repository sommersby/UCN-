import overviewBysku from './overviewBysku';
import basicInfo from './basicInfo';
import responsibility from './responsibility';
import productInfo from './productInfo';


/***
 *  新增部分
 */
import overviewByOrder from './overviewByOrder';
import orderDetail from './orderDetail';
import createOrder from './createOrder';

export default {
    basicInfo,
    responsibility,
    overviewBysku,
    productInfo,

    /**
     * 新引入
     * */
    overviewByOrder,
    orderDetail,
    createOrder
}
