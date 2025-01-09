// Select DOM elements
const header = document.querySelector('header');
const headerTitle = document.getElementById('header_title');
const sliderButtons = document.querySelectorAll('.dot');

// Images and titles for the slider
const sliderData = [
    { image: 'LOL.PNG', title: 'GAME OF THE WORLD' },
    { image: 'CHAMP.PNG', title: 'THE CHAMPION' },
    { image: 'lol4.png', title: 'GREAT PLAYER' },
];

let currentIndex = 0; // Track the current slide
let sliderInterval; // Variable to store the interval for the slider

/**
 * Load a slide based on the given index
 * @param {number} index - The index of the slide to load
 */
const loadSlide = (index) => {
    const { image, title } = sliderData[index];

    console.log(`Setting background image to: ${image}`);

    // Fade out the current background before changing
    header.classList.add('fade-out');
    
    setTimeout(() => {
        // Update header background and title
        header.style.background = `url(${image}) no-repeat center center/cover`;
        headerTitle.innerText = title;

        // Fade in the new background
        header.classList.remove('fade-out');

        // Update active button
        sliderButtons.forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
    }, 500); // Wait for fade-out effect before changing background
};

/**
 * Advance to the next slide
 */
const nextSlide = () => {
    currentIndex = (currentIndex + 1) % sliderData.length;
    loadSlide(currentIndex);
};

/**
 * Pause the slider when the user interacts with it (e.g., clicks a dot)
 */
const pauseSlider = () => {
    clearInterval(sliderInterval);
    // Restart the interval after a short delay (e.g., 2 seconds)
    setTimeout(() => {
        sliderInterval = setInterval(nextSlide, 15000);
    }, 2000); // 2-second delay before restarting
};

// Add click event listeners to slider buttons
sliderButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentIndex = index;
        loadSlide(currentIndex);
        pauseSlider(); // Pause the slider when a dot is clicked
    });
});

// Start the slider with an interval
sliderInterval = setInterval(nextSlide, 15000);

// Load the initial slide
loadSlide(currentIndex);



// เลือกปุ่ม, ข้อความ, และภาพ
// เลือกปุ่ม, ข้อความ, และภาพ
const readMoreBtn = document.getElementById('readMoreBtn');
const updateDescription = document.getElementById('updateDescription');
const updateImage = document.getElementById('updateImage');

// เพิ่มตัวแปรเพื่อจัดการสถานะของการแสดงข้อความ/ภาพ
let isFullTextVisible = false;

// ฟังก์ชันสำหรับการแสดง/ซ่อนข้อความและภาพ
function toggleContent() {
    if (isFullTextVisible) {
        updateDescription.style.display = 'block'; // แสดงข้อความเมื่อกด 'Read More' ครั้งที่สอง
        updateImage.style.display = 'none'; // ซ่อนภาพ
        readMoreBtn.textContent = 'Read More'; // เปลี่ยนข้อความของปุ่มเป็น 'Read More'
    } else {
        updateDescription.style.display = 'none'; // ซ่อนข้อความ
        updateImage.style.display = 'block'; // แสดงภาพ
        updateImage.src = 'logonox.png'; // ใช้ภาพที่ต้องการแสดง
        readMoreBtn.textContent = 'Read Less'; // เปลี่ยนข้อความของปุ่มเป็น 'Read Less'
        updateImage.style.maxWidth = 'auto'; // กำหนดขนาดความกว้างสูงสุดของภาพ
        updateImage.style.height = '300px'; // ความสูงอัตโนมัติ
    }
    isFullTextVisible = !isFullTextVisible; // สลับสถานะ
}

// เพิ่ม event listener เมื่อคลิกปุ่ม 'Read More'
readMoreBtn.addEventListener('click', toggleContent);


document.addEventListener('DOMContentLoaded', () => {
    const tcardDetails = document.querySelectorAll('.tcarddetails');

    tcardDetails.forEach((card) => {
        card.addEventListener('click', () => {
            // Toggle visibility of additional info
            const paragraph = card.querySelector('p');
            if (paragraph.style.display === 'none' || paragraph.style.display === '') {
                paragraph.style.display = 'block';
            } else {
                paragraph.style.display = 'none';
            }
        });
    });
});


// เมื่อโหลดหน้าหรือกดปุ่ม จะมีการเปลี่ยนแปลงพื้นหลัง
document.addEventListener("DOMContentLoaded", function() {
    const kingCards = document.querySelectorAll(".kingcard");
    
    // เปลี่ยนสีพื้นหลังของการ์ดแต่ละใบเมื่อผู้ใช้ hover
    kingCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.1)"; // ขยายขนาดการ์ด
            card.style.transition = "transform 0.5s ease-in-out"; // การเคลื่อนไหวแบบนุ่มนวล
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)"; // คืนขนาดการ์ดเดิม
        });
    });

    // สร้างเอฟเฟกต์ที่เปลี่ยนพื้นหลังเมื่อกดปุ่ม
    const changeTextBtn = document.getElementById('change-text-btn');
    changeTextBtn.addEventListener("click", () => {
        document.body.style.backgroundColor = "#f5f5f5";
        setTimeout(() => {
            document.body.style.backgroundColor = "#fff"; // คืนค่าเป็นพื้นหลังเดิมหลังจาก 1 วินาที
        }, 1000);
    });

    // สร้างปุ่ม Scroll to Top
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    window.onscroll = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = "block"; // แสดงปุ่มเมื่อเลื่อนลงไป 100px
        } else {
            scrollToTopBtn.style.display = "none"; // ซ่อนปุ่มเมื่อไม่เลื่อนลง
        }
    };

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // เพิ่มเอฟเฟกต์ให้กับการ์ดเมื่อผู้ใช้เลื่อนเมาส์
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        kingCards.forEach(card => {
            const offset = card.offsetTop;
            if (scrollPosition > offset - window.innerHeight + 100) {
                card.classList.add("in-view");
            }
        });
    });

    // การเคลื่อนไหวแบบ 3D สำหรับการ์ด
    const cards = document.querySelectorAll('.kingcard');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 10;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`; // 3D effect
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `rotateY(0deg) rotateX(0deg)`; // รีเซ็ตการหมุนเมื่อเมาส์ออกจากการ์ด
        });
    });
});
