const navItems = document.querySelectorAll('.nav-item');
const active = 'active';

navItems.forEach(element => {
    element.addEventListener('click', (e) => {
        navItems.forEach(element => {element.classList.remove(active)})
        element.classList.add(active)
    })
});





const worksCategory = document.querySelectorAll('.works-category');
const textPrimary = 'text-primary';

worksCategory.forEach(element => {
    element.addEventListener('click', (e) => {
        worksCategory.forEach(element => {element.classList.remove(textPrimary)})
        element.classList.add(textPrimary)
    })        
});