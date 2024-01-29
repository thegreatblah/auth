<template>
<div class="file-list">
    <h2>Документы</h2> <a @click="signOut" class="signoutlink pointer">Выйти</a>
    <ul>
    <li v-for="(document, index) in documents" :key="index">

        <div>{{ index + 1 }}. {{ document.fileTypeName }}</div>
        <div class="file" v-if="document.fileName"><img src="/img/file.png"/>  {{ document.fileName }}</div>
        <div>
            <label class="css-class pointer">
                Вложить
                <input type="file" hidden @change="uploadFile($event, index)" />
            </label>
            <img class="handleico" src="/img/handle.png" />
        </div>

    </li>
    </ul>
</div>
</template>

<script lang="ts">
import { ref } from 'vue';
//заглушка для axios так как api не авторизует
import axios from '../components/axiosmock';
import { useErrorStore } from '../components/storeError';

import { useRouter } from 'vue-router';
const router = useRouter();

export default {
setup() {    
    const documents = ref([]);

    axios.post('https://products.halyklife.kz/api/v1/test/insis/arm/api/File/List', {
        processInstanceId: '0370c1fd-3b3d-4974-a0cb-23e8ccc727cd'
    }).then(response => {
        documents.value = response
    })


    const uploadFile = (event, index) => {
        const file = event.target.files[0];

        const postData = {
            file: file, 
            fileData: [{
                processInstanceId: documents.value[index].processInstanceId,
                fileTypeCode: "7",
                page: 3,
                fileName: file.name
            }]
        };

        const prevName = documents.value[index].fileName
        axios.post('https://products.halyklife.kz/api/v1/test/insis/arm/api/File/UploadFiles', {
        }).then(() => {
            console.log('yes')
        }).catch((error) => {
            console.log(error)
            useErrorStore().setError(error);

            setTimeout(() => {
                documents.value[index].fileName = prevName
            }, 1500)
            
        })

        documents.value[index].fileName = file.name;
    };  

    return {
        documents,
        uploadFile,
    };
},
methods: {
    signOut() {
        console.log('logout')
        localStorage.setItem('accessToken', '');
        localStorage.setItem('refreshToken', '');
        this.$router.push('/auth');
    }
}
};
</script>


<style scoped>
div.file-list {
    max-width: 400px;    
}

ul {
    list-style-type: none;
    padding: 0;
}
li {
    padding: 0.3rem;
}
div.file {
    padding-left: 1rem;
    font-weight: bold;
    color: #0bb98b;
}
div.file img {
    position: relative;
    top: 7px;
}
.handleico {
    position: relative;
    top: 6px;
}
.signoutlink {
    position: absolute;
    right: 10px;
    top: 10px;
}
.pointer {
    cursor: pointer;
}
</style>
