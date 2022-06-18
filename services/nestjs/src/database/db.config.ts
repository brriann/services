import { registerAs } from "@nestjs/config";

export default registerAs("typeOrmConfig", () => {
    return {
        type: 'postgres',
        host: '',
        port: 4000,
        username: '',
        password: '',
        database: '',
        autoLoadEntities: true,
        // TO BE CONTINUED
    }
});