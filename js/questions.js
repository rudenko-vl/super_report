const questions = [
    {
        id: 1,
        title: "Что изображено на картинке?",
        variants: ["Животное", "Автомобиль", "Растение"],
        correct: 0,
        img: './img/cat.png',
        alt: 'cat',
    },
    {
        id: 2,
        title: "Какое животное изображено на картинке?",
        variants: ["Кот", "Собака", "Носорог"],
        correct: 1,
        img: './img/dog.png',
        alt: 'dog',
    },
    {
        id: 3,
        title: "Сколько петухов изображено на картинке?",
        variants: ["Один", "Два", "Три"],
        correct: 2,
        img: './img/petuhi.png',
        alt: 'petushari',
    }
];


export const first = `
<h1 class="main-test_title">Подтвердите, что Вы не робот!</h1>
<h2 class="test_title">${questions[0].title}</h2>
    <img class="test_img" src=${questions[0].img} alt=${questions[0].alt}>
     <ul class="list test_list ">
        <li class="common-item_test test_list-item correct1">${questions[0].variants[0]}</li>
        <li class="common-item_test test_list-item uncorrect1">${questions[0].variants[1]}</li>
        <li class="common-item_test uncorrect2">${questions[0].variants[2]}</li>
    </ul>
`

export const two = `
<h2 class="test_title">${questions[1].title}</h2>
    <img class="test_img" src=${questions[1].img} alt=${questions[1].alt}>
     <ul class="list test_list ">
        <li class="common-item_test test_list-item uncorrect3">${questions[1].variants[0]}</li>
        <li class="common-item_test test_list-item correct2">${questions[1].variants[1]}</li>
        <li class="common-item_test uncorrect4">${questions[1].variants[2]}</li>
    </ul>
`
export const three = `
<h2 class="test_title">${questions[2].title}</h2>
    <img class="test_img" src=${questions[2].img} alt=${questions[2].alt}>
     <ul class="list test_list ">
        <li class="common-item_test test_list-item uncorrect5">${questions[2].variants[0]}</li>
        <li class="common-item_test test_list-item uncorrect6">${questions[2].variants[1]}</li>
        <li class="common-item_test correct3">${questions[2].variants[2]}</li>
    </ul>
`