var myItems = document.querySelectorAll('.item');
var mainItem = document.querySelector('.mainItem');

for (var i = 0; i < myItems.length; i++) {
    myItems[i].addEventListener('click', function(e) {
        // الحصول على قيمة src للصورة الرئيسية والصورة التي تم النقر عليها
        var clickedItem = e.target;
        var mainSrc = mainItem.getAttribute('src');
        var clickedSrc = clickedItem.getAttribute('src');
        
        // تبديل src بين الصورة الرئيسية والصورة التي تم النقر عليها
        mainItem.setAttribute('src', clickedSrc);
        clickedItem.setAttribute('src', mainSrc);
    });
}
