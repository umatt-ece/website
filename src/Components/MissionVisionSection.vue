<template>
  <section id="mission-vision" class="mission-vision-section">
    <div class="section-header">
      <h2 id="mission-vision-title" class="section-title">Our Purpose <span class="highlight">&</span> Direction</h2>
      <div class="title-underline"></div>
    </div>
    
    <div class="mv-container">
      <div class="mv-inner">
        <div 
          v-for="item in missionVisionData" 
          :key="item.id" 
          :class="['mv-box', `${item.id}-box`]"
        >
          <div class="box-icon-container">
            <div class="icon-wrapper">
              <svg 
                :width="item.icon.width" 
                :height="item.icon.height" 
                :viewBox="item.icon.viewBox" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path :d="item.icon.path" fill="#385E9D" />
              </svg>
            </div>
          </div>
          <div class="box-content">
            <h3 class="box-title">{{ item.title }}</h3>
            <div class="box-divider"></div>
            <p class="box-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Constants for mission and vision data
const missionVisionData = [
  {
    id: 'mission',
    title: 'Our Mission',
    description: 'To push the boundaries of innovative engineering design while providing a hands-on learning experience that bridges theory with practice.',
    icon: {
      width: 60,
      height: 60,
      viewBox: '0 0 30 30',
      path:"M26.25 15C26.25 13.5226 25.959 12.0597 25.3936 10.6948C24.8283 9.3299 23.9996 8.08971 22.955 7.04505C21.9103 6.00039 20.6701 5.17172 19.3052 4.60636C17.9403 4.04099 16.4774 3.75 15 3.75C13.5226 3.75 12.0597 4.04099 10.6948 4.60636C9.3299 5.17172 8.08971 6.00039 7.04505 7.04505C6.00039 8.08971 5.17172 9.3299 4.60636 10.6948C4.04099 12.0597 3.75 13.5226 3.75 15C3.75 16.4774 4.04099 17.9403 4.60636 19.3052C5.17172 20.6701 6.00039 21.9103 7.04505 22.955C8.08971 23.9996 9.3299 24.8283 10.6948 25.3936C12.0597 25.959 13.5226 26.25 15 26.25C16.4774 26.25 17.9403 25.959 19.3052 25.3936C20.6701 24.8283 21.9103 23.9996 22.955 22.955C23.9996 21.9103 24.8283 20.6701 25.3936 19.3052C25.959 17.9403 26.25 16.4774 26.25 15ZM0 15C0 11.0218 1.58035 7.20644 4.3934 4.3934C7.20644 1.58035 11.0218 0 15 0C18.9782 0 22.7936 1.58035 25.6066 4.3934C28.4196 7.20644 30 11.0218 30 15C30 18.9782 28.4196 22.7936 25.6066 25.6066C22.7936 28.4196 18.9782 30 15 30C11.0218 30 7.20644 28.4196 4.3934 25.6066C1.58035 22.7936 0 18.9782 0 15ZM15 19.6875C16.2432 19.6875 17.4355 19.1936 18.3146 18.3146C19.1936 17.4355 19.6875 16.2432 19.6875 15C19.6875 13.7568 19.1936 12.5645 18.3146 11.6854C17.4355 10.8064 16.2432 10.3125 15 10.3125C13.7568 10.3125 12.5645 10.8064 11.6854 11.6854C10.8064 12.5645 10.3125 13.7568 10.3125 15C10.3125 16.2432 10.8064 17.4355 11.6854 18.3146C12.5645 19.1936 13.7568 19.6875 15 19.6875ZM15 6.5625C17.2378 6.5625 19.3839 7.45145 20.9662 9.03379C22.5486 10.6161 23.4375 12.7622 23.4375 15C23.4375 17.2378 22.5486 19.3839 20.9662 20.9662C19.3839 22.5486 17.2378 23.4375 15 23.4375C12.7622 23.4375 10.6161 22.5486 9.03379 20.9662C7.45145 19.3839 6.5625 17.2378 6.5625 15C6.5625 12.7622 7.45145 10.6161 9.03379 9.03379C10.6161 7.45145 12.7622 6.5625 15 6.5625ZM13.125 15C13.125 14.5027 13.3225 14.0258 13.6742 13.6742C14.0258 13.3225 14.5027 13.125 15 13.125C15.4973 13.125 15.9742 13.3225 16.3258 13.6742C16.6775 14.0258 16.875 14.5027 16.875 15C16.875 15.4973 16.6775 15.9742 16.3258 16.3258C15.9742 16.6775 15.4973 16.875 15 16.875C14.5027 16.875 14.0258 16.6775 13.6742 16.3258C13.3225 15.9742 13.125 15.4973 13.125 15Z"
    }
  },
  {
    id: 'vision',
    title: 'Our Vision',
    description: 'To nurture future engineers and innovators through interdisciplinary collaboration and creative problem solving.',
    icon: {
      width: 68,
      height: 56,
      viewBox: '0 0 34 28',
      path :"M16.875 0.875C12.1406 0.875 8.34961 3.03125 5.58984 5.59766C2.84766 8.14062 1.01367 11.1875 0.146484 13.2793C-0.046875 13.7422 -0.046875 14.2578 0.146484 14.7207C1.01367 16.8125 2.84766 19.8594 5.58984 22.4023C8.34961 24.9688 12.1406 27.125 16.875 27.125C21.6094 27.125 25.4004 24.9688 28.1602 22.4023C30.9023 19.8535 32.7363 16.8125 33.6094 14.7207C33.8027 14.2578 33.8027 13.7422 33.6094 13.2793C32.7363 11.1875 30.9023 8.14062 28.1602 5.59766C25.4004 3.03125 21.6094 0.875 16.875 0.875ZM8.4375 14C8.4375 11.7622 9.32645 9.61612 10.9088 8.03379C12.4911 6.45145 14.6372 5.5625 16.875 5.5625C19.1128 5.5625 21.2589 6.45145 22.8412 8.03379C24.4236 9.61612 25.3125 11.7622 25.3125 14C25.3125 16.2378 24.4236 18.3839 22.8412 19.9662C21.2589 21.5486 19.1128 22.4375 16.875 22.4375C14.6372 22.4375 12.4911 21.5486 10.9088 19.9662C9.32645 18.3839 8.4375 16.2378 8.4375 14ZM16.875 10.25C16.875 12.3184 15.1934 14 13.125 14C12.709 14 12.3105 13.9297 11.9355 13.8066C11.6133 13.7012 11.2383 13.9004 11.25 14.2402C11.2676 14.6445 11.3262 15.0488 11.4375 15.4531C12.2402 18.4531 15.3281 20.2344 18.3281 19.4316C21.3281 18.6289 23.1094 15.541 22.3066 12.541C21.6563 10.1094 19.5059 8.47461 17.1152 8.375C16.7754 8.36328 16.5762 8.73242 16.6816 9.06055C16.8047 9.43555 16.875 9.83398 16.875 10.25Z"
    }
  }
];
</script>

<style scoped>
/* Base styles (mobile-first) */
.mission-vision-section {
  padding: 4rem 1.5rem;
  background: linear-gradient(135deg, #f0f4fa 0%, #e6eef9 100%);
  width: 100%;

  position: relative;
  overflow: hidden;
}

/* Add subtle pattern overlay */
.mission-vision-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%23385E9D' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.7;
  z-index: 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #1e3a5f;
  margin-bottom: 1rem;
  position: relative;
}

.highlight {
  color: #385E9D;
  position: relative;
  display: inline-block;
}

.title-underline {
  height: 4px;
  width: 60px;
  background-color: #385E9D;
  margin: 0.75rem auto 0;
  border-radius: 4px;
}

/* Container for inner content */
.mv-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Inner content with padding */
.mv-inner {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 0 0.5rem;
}

/* Each box takes full width on mobile, 50% on larger screens */
.mv-box {
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(56, 94, 157, 0.1);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(56, 94, 157, 0.05);
}

.mv-box:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 35px rgba(56, 94, 157, 0.15);
}

/* Icon container */
.box-icon-container {
  padding: 2rem 0 0;
  display: flex;
  justify-content: center;
}

/* Icon wrapper for consistency */
.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 84px;
  background-color: rgba(56, 94, 157, 0.08);
  border-radius: 50%;
  padding: 18px;
  transition: all 0.3s ease;
}

.icon-wrapper svg {
  filter: drop-shadow(0 4px 8px rgba(56, 94, 157, 0.25));
  transition: transform 0.3s ease;
}

.mv-box:hover .icon-wrapper {
  background-color: rgba(56, 94, 157, 0.12);
  transform: scale(1.05);
}

.mv-box:hover .icon-wrapper svg {
  filter: drop-shadow(0 6px 12px rgba(56, 94, 157, 0.3));
}

/* Box content area */
.box-content {
  padding: 1.75rem 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
}

/* Title in each box */
.box-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e3a5f;
  margin: 0 0 0.75rem;
}

/* Divider under the title */
.box-divider {
  width: 40px;
  height: 3px;
  background-color: #385E9D;
  margin: 0 0 1.5rem;
  border-radius: 1.5px;
}

/* Description in each box */
.box-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #506580;
  margin: 0;
  max-width: 90%;
}

/* Responsive styles - Tablet and larger */
@media (min-width: 768px) {
  .mission-vision-section {
    padding: 5rem 2.5rem;
  }
  
  .section-title {
    font-size: 2.75rem;
  }
  
  .mv-inner {
    flex-direction: row;
    align-items: stretch;
    gap: 3rem;
  }
  
  .mv-box {
    flex: 1;
    min-height: 380px;
  }
  
  .box-title {
    font-size: 2rem;
  }
  
  .box-description {
    font-size: 1.125rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .mission-vision-section {
    padding: 7rem 2rem;
   
  }
  
  .section-title {
    font-size: 3rem;
  }
  
  /* Add subtle hover effect for desktop */
  .mission-box:hover,
  .vision-box:hover {
    border-bottom: 4px solid #385E9D;
  }
  
  .mv-box {
    min-height: 400px;
  }
  
  .box-content {
    padding: 2rem 3rem 3rem;
  }
}

@media (min-width: 1440px) {
  .mv-inner {
    gap: 4rem;
  }
  
  .box-icon-container {
    padding-top: 3rem;
  }
  
  .icon-wrapper {
    width: 100px;
    height: 100px;
    padding: 22px;
  }
}
</style>