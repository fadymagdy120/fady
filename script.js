document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع التحديث الافتراضي للصفحة

    // إخفاء نموذج الطلب
    document.getElementById('order-form').classList.add('hidden');

    // إظهار رسالة التأكيد
    document.getElementById('confirmation-message').classList.remove('hidden');
});
