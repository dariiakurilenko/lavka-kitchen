export const categories = [
    {
        name: 'Салаты',
    },
    {
        name: 'Закуски',
    },
    {
        name: 'Десерты',
    },
    {
        name: 'Напитки',
    },
    {
        name: 'Кофе',
    },
]

export const ingredients = [
    {
        name: 'Креветки',
        price: 149,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/11eee5d51d4c576da0f0db611c8947bd.png'
    },
    {
        name: 'Сливочная моцарелла',
        price: 59,
        imageUrl: `https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png`
    },
    {
        name: 'Лук',
        price: 29,
        imageUrl: `https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C`
    },
].map((obj, index) => ({ id: index + 1, ...obj}));

export const products = [
    {
        name: 'Стрипсы куриные с сырным соусом',
        imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/275…c13fdc7e-2ae9-49f5-97b5-9bf751c7d929/928x928-webp',
        categoryId: 2,
    },
    {
        name: 'Десерт морковный с сырно-сливочным кремом Konfeta',
        imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/275…1bf8156d-49f3-4570-8784-dec90fae3949/928x928-webp',
        categoryId: 3,
    },
    {
        name: 'Бамбл кофе',
        imageUrl: 'https://yastatic.net/avatars/get-grocery-goods/275…4975b8e6-31e7-48af-9f29-79ea05d1e4e1/928x928-webp',
        categoryId: 5,
    },



]