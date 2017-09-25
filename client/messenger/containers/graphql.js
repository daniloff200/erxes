const messageFields = `
  _id
  conversationId
  user {
    _id
    details {
      avatar
      fullName
    }
  }
  content
  createdAt
  internal
  engageData {
    content
    kind
    sentAs
    fromUser {
      details {
        fullName
        avatar
      }
    }
  }
  attachments{
    url
    name
    size
    type
  }
`;


const messagesQuery = `
  query ($conversationId: String!) {
    messages(conversationId: $conversationId) {
      ${messageFields}
    }
  }
`;

const conversationLastStaffQuery = `
  query ($conversationId: String!) {
    conversationLastStaff(_id: $conversationId) {
      _id,
      details {
        avatar
        fullName
      }
    }
  }
`;

const isMessengerOnlineQuery = `
  query ($integrationId: String!) {
    isMessengerOnline(integrationId: $integrationId)
  }
`;

const conversationMessageInserted = `
  subscription conversationMessageInserted($_id: String!) {
    conversationMessageInserted(_id: $_id) {
      ${messageFields}
    }
  }
`;

const unreadCountQuery = `
  query unreadCount($conversationId: String) {
    unreadCount(conversationId: $conversationId)
  }
`;

const conversationsChangedSubscription = `
  subscription conversationsChanged($customerId: String) {
    conversationsChanged(customerId: $customerId) {
      type
    }
  }
`;

export default {
  messageFields,
  messagesQuery,
  conversationLastStaffQuery,
  isMessengerOnlineQuery,
  unreadCountQuery,
  conversationMessageInserted,
  conversationsChangedSubscription,
}
