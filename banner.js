const bannerImages = [
    'banner/IPD-designed-sensor-protein-2024.png',
    'banner/IPD-designed-sensor-protein-closed.png',
    'banner/IPD-designed-sensor-protein-open.png',
    'banner/1AL0_bateriophage1_1_8k.png',
    'banner/ProteinMPNN_detailed_glass1.jpg',
    'banner/protein-dna.png',
    'banner/RFdiffusion2-enzyme-design-web-banner2.jpg'
];

let currentImageIndex = 0;
const bannerImage = document.getElementById('banner-image');
const changeInterval = 3000; // Change image every 8 seconds

function changeBannerImage() {
    currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
    bannerImage.style.opacity = 0;
    
    setTimeout(() => {
        bannerImage.src = bannerImages[currentImageIndex];
        bannerImage.style.opacity = 1;
    }, 500);
}

// Preload images for smoother transitions
function preloadImages() {
    bannerImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Start the image rotation
setInterval(changeBannerImage, changeInterval);

// Handle window resize
window.addEventListener('resize', () => {
    bannerImage.style.transition = 'none';
    setTimeout(() => {
        bannerImage.style.transition = 'opacity 0.5s ease-in-out';
    }, 50);
});

// Initialize
preloadImages(); 