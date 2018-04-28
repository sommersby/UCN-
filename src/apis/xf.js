export default {
  UNREADMESSAGE_QUERYUNREAD: ['/companymessage/queryunread', 'BASE_JML2', 'UMESSAGE_URL'], // 查询未读消息
  UNREADMESSAGE_UPDATEUNREAD: ['/companymessage/updateunread', 'BASE_JML2', 'UMESSAGE_URL'], // 标记消息已读
  USER_PRIVILEGE: ['/user/privilege', 'UUSER_URL'],
  UTASK_PAGELIST: ['/utask/pageList', 'BASE_JY'],
  UTASK_TYPELIST: ['/utask/typeList', 'BASE_JY'],
  ITEMFAVORITE_PART: ['/itemfavorite/part', 'BASE_JML'],
  ITEMFAVORITE_UPDATE: ['/itemfavorite/update', 'BASE_JML'],
  CHATMESSAGE_QUERY: ['/chatmessage/query', 'UMESSAGE_URL', 'UMESSAGE_URL'], // 获取留言板
  CHATMESSAGE_ADD: ['/chatmessage/add', 'UMESSAGE_URL', 'UMESSAGE_URL'], // 发送留言板消息
}
