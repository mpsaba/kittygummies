
module.exports = {

    'serverPort': 8000,

    'password_secret': '2ee9351d63994acfbd6029a7be3e97b0',
    'jwt_secret': 'b9d15741cda64e4d828ba55ce55e6710',
    'api_secret': '2CzeknlP_ncqLaW_B719p58RqsU',

    'postgress_config_dev': {
        'username': 'postgres',
        'password': '123456',
        'database': 'kittygummies',
        'host': 'localhost',
        'dialect': 'postgres',
        'dialectOptions': {
            'ssl': false,
            'native': true,
            'charset': 'UTF8'
        },
        'port': 5432,
        'logging': false
    },

    'rsa' : {
        'publicKey' : '-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQi4GfOZjzMVms6ZWD+LJDhyvUPw\n3+38UBnHPORIBoTg6e87aaJe89vILb9oPUzy0VgC8CtHVmR/Zu3j5rWqmir6NGIo\nJTQyQ4kkEl6Y0mb0R9gm3d2g2VZyR4UPr2yhl8ALIiayW/NUzX5YFmacWpcMEWbH\njZBEWA5LZXcYX4TRUwIDAQAB\n-----END PUBLIC KEY-----',
        'privateKey' : '-----BEGIN RSA PRIVATE KEY-----\nMIICXgIBAAKBgQi4GfOZjzMVms6ZWD+LJDhyvUPw3+38UBnHPORIBoTg6e87aaJe\n89vILb9oPUzy0VgC8CtHVmR/Zu3j5rWqmir6NGIoJTQyQ4kkEl6Y0mb0R9gm3d2g\n2VZyR4UPr2yhl8ALIiayW/NUzX5YFmacWpcMEWbHjZBEWA5LZXcYX4TRUwIDAQAB\nAoGBAYipgBIOf/UYA6o0PRF0ML32j6IrMomFadOD4cDN7MhIPv6bqaW8jnhbm+Vx\nizzYGPyDVYm6J/nFmKnT5zd44X+R15whI44WxC0ARHAREyolRa1a/YCjHSNwQf58\nSgG/kHz9EU4RUiCBoXU4R5gvljoZolaCI62HC3d3NZlaJDBJAkEDLOOjdgDY9Cbs\ncSCf8+8cFQcLEiXvQF/92zXogLLoCiYfMdTyu8GbIg2eWWgSMxEm9tS3KOizKHFz\nAo+N8nBhrwJBAr7yZ/qjNkN/iGxt3FMJ4Y8rvCUBqpyK7S/E45WoBtXq0ux4q7Gv\n9r0MsiZnq15tMBe9pieK6HUR1Nc7/t/M550CQQEoFZZRggeEDrVqk0aPtFVXN2SJ\n7LVTjmNJuD4CuqeYIsCUBwuO5fsakTlPOX//h8zYdSxtwyyWm5QXp7A9UT/TAkEB\nF1YGwc+30YzNbqEdi5YCnz0279HAtaJzbKcl9SOnS7ycAsJVIDAXsbpo1OAfdk+X\na+e+LjqB83uZg8pglxi69QJAXkpi4I7a7nH71JLBrZx+7aB4cW/oRzWqqvJiYYtG\nlm64En4M7PkUfQ7/Iw95Y6iOqtafWJ6femU1mSPw5XSS2A==\n-----END RSA PRIVATE KEY-----'
    },
    
    app: {}

}



