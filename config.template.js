
/**
 * Global configuration object.
 */
const config = {
  'api': {
    'host': 'https://insights.dinerocoin.org',
    'port': '443',
    'prefix': '/insight-api-dinero',
    'timeout': '5s'
  },
  'coinMarketCap': {
    'api': 'http://api.coinmarketcap.com/v1/ticker/',
    'ticker': 'dinero'
  },
  'db': {
    'host': '127.0.0.1',
    'port': '27017',
    'name': 'blockex',
    'user': 'blockexuser',
    'pass': 'Explorer!1'
  },
  'freegeoip': {
    'api': 'https://extreme-ip-lookup.com/json/'
  },
  'rpc': {
    'host': '127.0.0.1',
    'port': '52541',
    'user': 'dinerorpc',
    'pass': 'someverysafepassword',
    'timeout': 8000, // 8 seconds
  },
  'slack': {
    'url': 'https://hooks.slack.com/services/A00000000/B00000000/somekindofhashhere',
    //'channel': '#general',
    //'username': 'Block Report',
    //'icon_emoji': ':din:'
  }
};

module.exports = config;
