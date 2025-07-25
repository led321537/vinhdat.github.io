// 1. Đồng hồ thời gian thực
function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString("vi-VN");
    const clock = document.getElementById("clock");
    if (clock) {
    clock.textContent = `⏰ ${timeStr}`;
    }
}
setInterval(updateClock, 1000);
updateClock();
// 2. Toggle hiện/ẩn thông tin (ví dụ: mô tả)
const toggleBtn = document.getElementById("toggle-description");
const description = document.getElementById("description");
const toggleThemeBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
    description.classList.toggle("hidden");
    description.classList.toggle("visible");
    toggleBtn.textContent = description.classList.contains("hidden") ? "Hiện mô tả" : "Ẩn mô tả";
});

// 3. navigation hiệu ứng cuộn mượt
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});