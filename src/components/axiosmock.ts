import _axios from 'axios';

export default class axios {
    static async post (url: string, body: any) : Promise<any> {
        if (url == 'https://products.halyklife.kz/api/v1/test/insis/identity/api/Account/login') {
            if (body.login == 'TESTVUE' && body.password == 'qwerty') {
                console.log(`Заглушка для api: ${url}`)
                return { data: { accessToken: "local", refreshToken: "local" }}
            } else {
                return await _axios.post(url, body)
            }
        } else if (url == 'https://products.halyklife.kz/api/v1/test/insis/arm/api/File/List') {
            console.log(`Заглушка для api: ${url}`)
            return [{
                "id": "0ec4f895-96d5-4024-9b0a-042b91e5eb3d",
                "processInstanceId": "0370c1fd-3b3d-4974-a0cb-23e8ccc727cd",
                "fileTypeName": "Удостоверение личности",
                "fileName": "TestFile.txt",
            }]
        }
    }
}
