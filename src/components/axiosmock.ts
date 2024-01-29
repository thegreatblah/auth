import _axios from 'axios';

export default class axios {
    static async post (url: string, body: any) : Promise<any> {
        console.log(`Заглушка для api: ${url}`)
        if (url == 'https://products.halyklife.kz/api/v1/test/insis/identity/api/Account/login') {
            if (body.login == 'local' && body.password == 'local') {
                return { data: { accessToken: "local", refreshToken: "local" }}
            } else {
                return await _axios.post(url, body)
            }
        } else if (url == 'https://products.halyklife.kz/api/v1/test/insis/arm/api/File/List') {
            return [{
                "id": "0ec4f895-96d5-4024-9b0a-042b91e5eb3d",
                "processInstanceId": "0370c1fd-3b3d-4974-a0cb-23e8ccc727cd",
                "fileTypeName": "Удостоверение личности",
                "fileName": "TestFile.txt",
            },
            {
                "id": "1ec4f895-96d5-4024-9b0a-042b91e5eb3d",
                "processInstanceId": "1370c1fd-3b3d-4974-a0cb-23e8ccc727cd",
                "fileTypeName": "Удостоверение личности, обратная сторона",
                "fileName": "",
            },
            {
                "id": "2ec4f895-96d5-4024-9b0a-042b91e5eb3d",
                "processInstanceId": "2370c1fd-3b3d-4974-a0cb-23e8ccc727cd",
                "fileTypeName": "Заявление",
                "fileName": "",
            }]
        } else if (url == 'https://products.halyklife.kz/api/v1/test/insis/arm/api/File/UploadFiles') {
            return _axios.post(url, body)
        }
    }
}
