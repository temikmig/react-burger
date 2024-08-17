import { TIngredient } from "./types";

export const testBun:TIngredient = {
    _id: "643d69a5c3f7b9001cfa093c",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
    uid: "test-uid-b-001"
}

export const testIngredient_1:TIngredient = {
    _id: "643d69a5c3f7b9001cfa093f",
    name: "Мясо бессмертных моллюсков Protostomia",
    type: "main",
    proteins: 433,
    fat: 244,
    carbohydrates: 33,
    calories: 420,
    price: 1337,
    image: "https://code.s3.yandex.net/react/code/meat-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
    __v: 0,
    uid: "test-uid-i-001"
}

export const testIngredient_2:TIngredient = {
    _id: "643d69a5c3f7b9001cfa093e",
    name: "Филе Люминесцентного тетраодонтимформа",
    type: "main",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/meat-03.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
    __v: 0,
    uid: "test-uid-i-002"
}

export const testIngredient_3:TIngredient = {
    _id: "643d69a5c3f7b9001cfa093f",
    name: "Мясо бессмертных моллюсков Protostomia",
    type: "main",
    proteins: 433,
    fat: 244,
    carbohydrates: 33,
    calories: 420,
    price: 1337,
    image: "https://code.s3.yandex.net/react/code/meat-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
    __v: 0,
    uid: "test-uid-i-003"
}

export const testOrder = {
    success: true,
    name: "Краторный space бессмертный люминесцентный бургер",
    order: {
        ingredients: [
            {
                _id: "643d69a5c3f7b9001cfa093c",
                name: "Краторная булка N-200i",
                type: "bun",
                proteins: 80,
                fat: 24,
                carbohydrates: 53,
                calories: 420,
                price: 1255,
                image: "https://code.s3.yandex.net/react/code/bun-02.png",
                image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
                __v: 0
            },
            {
                _id: "643d69a5c3f7b9001cfa0943",
                name: "Соус фирменный Space Sauce",
                type: "sauce",
                proteins: 50,
                fat: 22,
                carbohydrates: 11,
                calories: 14,
                price: 80,
                image: "https://code.s3.yandex.net/react/code/sauce-04.png",
                image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
                __v: 0
            },
            {
                _id: "643d69a5c3f7b9001cfa093e",
                name: "Филе Люминесцентного тетраодонтимформа",
                type: "main",
                proteins: 44,
                fat: 26,
                carbohydrates: 85,
                calories: 643,
                price: 988,
                image: "https://code.s3.yandex.net/react/code/meat-03.png",
                image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
                __v: 0
            },
            {
                _id: "643d69a5c3f7b9001cfa093f",
                name: "Мясо бессмертных моллюсков Protostomia",
                type: "main",
                proteins: 433,
                fat: 244,
                carbohydrates: 33,
                calories: 420,
                price: 1337,
                image: "https://code.s3.yandex.net/react/code/meat-02.png",
                image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
                __v: 0
            },
            {
                _id: "643d69a5c3f7b9001cfa093c",
                name: "Краторная булка N-200i",
                type: "bun",
                proteins: 80,
                fat: 24,
                carbohydrates: 53,
                calories: 420,
                price: 1255,
                image: "https://code.s3.yandex.net/react/code/bun-02.png",
                image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
                __v: 0
            }
        ] as TIngredient[],
        _id: "66b5b5cb119d45001b4fe9b1",
        owner: {
            name: "Тема",
            email: "t97m@yandex.ru",
            createdAt: "2024-06-19T21:00:31.893Z",
            updatedAt: "2024-07-21T20:23:47.436Z"
        },
        status: "done",
        name: "Краторный space бессмертный люминесцентный бургер",
        createdAt: "2024-08-09T06:23:07.168Z",
        updatedAt: "2024-08-09T06:23:07.691Z",
        number: 48937,
        price: 4915
    }
}

export const testOrderData = {
    success: true,
    orders: [
        {
            _id: "66b74c8f119d45001b4fee54",
            ingredients: [
                "643d69a5c3f7b9001cfa0941",
                "643d69a5c3f7b9001cfa093e",
                "643d69a5c3f7b9001cfa093e",
                "643d69a5c3f7b9001cfa093c",
                "643d69a5c3f7b9001cfa093c"
            ],
            owner: "660f086597ede0001d064537",
            status: "done",
            name: "Краторный био-марсианский люминесцентный бургер",
            createdAt: "2024-08-10T11:18:39.741Z",
            updatedAt: "2024-08-10T11:18:40.223Z",
            number: 49147,
            __v: 0
        }
    ]
}

export const testLoginData = {
    success: true,
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzM0NmVmODU2Nzc3MDAxYmIxYzM5MCIsImlhdCI6MTcyMzE5MjYyMSwiZXhwIjoxNzIzMTkzODIxfQ.KtBOz3XFWSQDl1X4bh0lgTVrSHhvJKWDe7MkEw1Ne9Y",
    refreshToken: "3816ba8313cb20e320ce60afe395a5577202c18eb95565b4a017dc62c3f5848f701e9c726351d86f",
    user: {
        email: "t97m@yandex.ru",
        name: "Тема"
    }
}

export const testRegisterData = {
    success: true,
    user: {
        email: "george@yandex.ru",
        name: "George"
    },
    accessToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Yjc0Mzk4MTE5ZDQ1MDAxYjRmZWUyZSIsImlhdCI6MTcyMzI4NjQyNCwiZXhwIjoxNzIzMjg3NjI0fQ.nl_MunlGWijItE2jaz_q2Hx-Xjy-lHqHFbQDP8ZM1U4",
    refreshToken: "00789fe20686a31479186d53059050dca2444f9ef6fc093a2989217c0c88e39bbd2a04cb732f8141"
}

export const testUserData = {
    success: true,
    user: {
        email: "george@yandex.ru",
        name: "George"
    }
}

export const testForgotPasswordData = {
    success: true,
    message: "Reset email sent"
}

export const testResetPasswordData = {
    success: true,
    message: "Password successfully reset"
}

export const testPatchPasswordData = {
    success: true,
    user: {
        email: "john@yandex.ru",
        name: "John"
    }
}

export const testWsPayload = {
    orders: [
        {
            _id: "66b74754119d45001b4fee46",
            ingredients: [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa093e",
                "643d69a5c3f7b9001cfa093d"
            ],
            status: "done",
            name: "Флюоресцентный люминесцентный бургер",
            createdAt: "2024-08-10T10:56:20.372Z",
            updatedAt: "2024-08-10T10:56:20.837Z",
            number: 49145
        },
        {
            _id: "66b7473f119d45001b4fee44",
            ingredients: [
                "643d69a5c3f7b9001cfa093e",
                "643d69a5c3f7b9001cfa0940",
                "643d69a5c3f7b9001cfa093c"
            ],
            status: "done",
            name: "Краторный люминесцентный метеоритный бургер",
            createdAt: "2024-08-10T10:55:59.920Z",
            updatedAt: "2024-08-10T10:56:00.410Z",
            number: 49144
        },
        {
            _id: "66b74708119d45001b4fee41",
            ingredients: [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa093e",
                "643d69a5c3f7b9001cfa093d"
            ],
            status: "done",
            name: "Флюоресцентный люминесцентный бургер",
            createdAt: "2024-08-10T10:55:05.058Z",
            updatedAt: "2024-08-10T10:55:05.520Z",
            number: 49143
        },
        {
            _id: "66b74653119d45001b4fee3c",
            ingredients: [
                "643d69a5c3f7b9001cfa093c",
                "643d69a5c3f7b9001cfa093e",
                "643d69a5c3f7b9001cfa093c"
            ],
            status: "done",
            name: "Краторный люминесцентный бургер",
            createdAt: "2024-08-10T10:52:03.934Z",
            updatedAt: "2024-08-10T10:52:04.399Z",
            number: 49142
        },
        {
            _id: "66b74522119d45001b4fee38",
            ingredients: [
                "643d69a5c3f7b9001cfa0947",
                "643d69a5c3f7b9001cfa0948",
                "643d69a5c3f7b9001cfa093c"
            ],
            status: "done",
            name: "Альфа-сахаридный краторный фалленианский бургер",
            createdAt: "2024-08-10T10:46:58.021Z",
            updatedAt: "2024-08-10T10:46:58.483Z",
            number: 49141
        }
    ],
    total: 48771,
    totalToday: 184
}