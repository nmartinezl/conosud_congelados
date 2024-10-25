
function toggleCategory(categoryId) {
    const category = document.getElementById(categoryId);
    if (category.classList.contains('hidden')) {
        category.classList.remove('hidden');
        category.style.display = 'block';
    } else {
        category.classList.add('hidden');
        category.style.display = 'none';
    }
}
