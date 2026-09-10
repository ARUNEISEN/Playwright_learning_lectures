import {test, expect } from "@playwright/test";
import {request} from "node:http";
import { title } from "node:process";

test('GET API Validation', async({request})=>{
    const response = await request.get('https://reqres.in/api/users/2',
        {
            headers:{
                'x-api-key':'reqres_7dca340835994f9c82a082e306b23303'
            }
        });
    const data = await response.json();
    console.log(data);
    await expect(response.status()).toBe(200);
    await expect(data.data.id).toBe(2);
})

test('POST API Validation', async({request})=>{
    const response = await request.post('https://reqres.in/api/register',{
        data:{
            title:'Playwright API',
            body:{"email": "eve.holt@reqres.in", "password": "pistol"},
            userId:7
        }
    })

    console.log(await response.json());
})

