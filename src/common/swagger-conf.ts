export default class SwaggerConf {
    public static conf() {
        return {
            info: {
                title: 'Jewelery API',
                version: '0.1.0',
                description:
                    'API will count price according to params and suggests approximate items according to previous searches',
            },
            host: 'localhost:3000',
            basePath: '/jewelery',
            schemes: ['http'],
            produces: ['application/json'],
        }
    }
}
