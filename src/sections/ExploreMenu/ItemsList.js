const searchBtn = document.getElementById('search-btn');
// const mealList = document.getElementById('meal');


console.log(searchBtn)
    // searchBtn.addEventListener('click', getMealList);
    // mealList.addEventListener('click', getMealRecipe);

// function getMealList() {
//     let searchInputTxt = document.getElementById('search-input').value.trim();
//     console.log(searchInputTxt)
// fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
//     .then(response => response.json())
//     .then(data => {
//         let html = "";
//         if (data.meals) {
//             data.meals.forEach(meal => {
//                 html += `
//                 <div class = "meal-item" data-id = "${meal.idMeal}">
//                     <div class = "meal-img">
//                         <img src = "${meal.strMealThumb}" alt = "food">
//                     </div>
//                     <div class = "meal-name">
//                         <h3>${meal.strMeal}</h3>
//                         <a href = "#" class = "recipe-btn">Get Recipe</a>
//                     </div>
//                 </div>
//             `;
//             });
//             mealList.classList.remove('notFound');
//         } else {
//             html = "Sorry, we didn't find any meal!";
//             mealList.classList.add('notFound');
//         }

//         mealList.innerHTML = html;
// });
// }


const items = {
    item1: {
        name: 'Non-Veg Starters',
        banner: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png'
    },
    item2: {
        name: 'Veg Starters',
        banner: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png'
    },
    item3: {
        name: 'Soups',
        banner: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png'
    },
    item4: {
        name: 'Fish & Sea food',
        banner: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png'
    },
    item5: {
        name: 'Main Course',
        banner: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png'
    },
    item6: {
        name: 'Noodles',
        banner: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png'
    },
    item7: {
        name: 'Salads',
        banner: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-gluten-img.png'
    },
    item8: {
        name: 'Desserts',
        banner: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png'
    }

};

export default items