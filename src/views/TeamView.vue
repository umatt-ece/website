<script setup>
import { ref } from "vue";
import Galleria from 'primevue/galleria';

const activeIndex = ref(0);
const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 5
  },
  {
    breakpoint: '768px',
    numVisible: 3
  },
  {
    breakpoint: '560px',
    numVisible: 1
  }
]);
const displayCustom = ref(false);

const imageClick = (index) => {
  activeIndex.value = index;
  displayCustom.value = true;
};

const Title = ref('Our Team');
const FacultyAdvisor = ref([
  {
  name: 'Don Petkau',
  title: 'Faculty Advisor',
  image: '/src/assets/images/headshot-petkau.png',
  alt: 'Faculty Advisor'
  }
]);

const CouncilMembers = ref([
  {
    title: 'Captain',
    alt: 'Captain',
    image: '/src/assets/images/headshot-kam.png',
    name: 'Kameron Ronald'
  },
  {
    title: 'Mechanical Lead',
    alt: 'Mechanical Lead',
    image: '/src/assets/images/headshot-arik.png',
    name: 'Arik Mesongnik'
  },
  {
    title: 'Electrical Lead',
    alt: 'Electrical Lead',
    image: '/src/assets/images/headshot-zach.png',
    name: 'Zachary DeGraeves'
  }
  ,
  {
    title: 'Treasurer',
    alt: 'Treasurer',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Nicole Choi'
  }
]);

const SoftwareAndElectrical = ref([
  {
    title: 'S&E Lead',
    alt: 'S&E Lead',
    image: '/src/assets/images/headshot-zach.png',
    name: 'Zachary DeGraeves'
  },
  {
    title: 'Software Team',
    alt: 'Software Team',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Some Name'
  },
  {
    title: 'Software Team',
    alt: 'Software Team',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Some Name'
  },
  {
    title: 'Software Team',
    alt: 'Software Team',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Some Name'
  },
  {
    title: 'Software Team',
    alt: 'Software Team',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Some Name'
  },
  {
    title: 'Electrical Team',
    alt: 'Electrical Team',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Some Name'
  },
  {
    title: 'Electrical Team',
    alt: 'Electrical Team',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Some Name'
  }
]);

const Mechanical = ref([
  {
    title: 'Mechanical Lead',
    alt: 'Mechanical Lead',
    image: '/src/assets/images/headshot-arik.png',
    name: 'Ariel Mesongnik'
  },
  {
    title: 'Mechanical Team',
    alt: 'Mechanical Team',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Some Name'
  },
  {
    title: 'Mechanical Team',
    alt: 'Mechanical Team',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Some Name'
  },
  {
    title: 'Mechanical Team',
    alt: 'Mechanical Team',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Some Name'
  },
  {
    title: 'Mechanical Team',
    alt: 'Mechanical Team',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Some Name'
  },
  {
    title: 'Mechanical Team',
    alt: 'Mechanical Team',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Some Name'
  },
  {
    title: 'Mechanical Team',
    alt: 'Mechanical Team',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Some Name'
  }
]);

const AdminSupport = ref([
  {
    title: 'Some Lead',
    alt: 'Some Lead',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Some Name'
  },
  {
    title: 'Some Team',
    alt: 'Some Team',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Some Name'
  },
  {
    title: 'Some Team',
    alt: 'Some Team',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Some Name'
  },
  {
    title: 'Some Team',
    alt: 'Some Team',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Some Name'
  },
  {
    title: 'Some Team',
    alt: 'Some Team',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Some Name'
  },
  {
    title: 'Some Team',
    alt: 'Some Team',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Some Name'
  },
  {
    title: 'Some Team',
    alt: 'Some Team',
    image: '/src/assets/images/headshot-placeholder.png',
    name: 'Some Name'
  }
  
]);

const AllMembers = FacultyAdvisor.value.concat(CouncilMembers.value,SoftwareAndElectrical.value, Mechanical.value, AdminSupport.value);
</script>

<template>
  <div class="layout">
    <div class="banner-wrapper">
      <div class="banner">
        <h1 class="title">{{ Title }}</h1>
      </div>
    </div>
    <Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="AllMembers" :responsiveOptions="responsiveOptions" :numVisible="7"
        containerStyle="max-width: 100%" :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false"
       
        :pt="{
          root: {
            style: {border:'none',minWidth:'80%',overflow: 'visible',margin:'0 auto',padding:'0'}

          },
          
        }"
      >
        <template #item="slotProps">
          <div class="content">
            <div class="description">
              <h3 class="pos">{{ slotProps.item.title }}</h3>
              <p class="name">{{ slotProps.item.name }}</p>
              <p class="bio"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dignissimos vel, maiores enim rem culpa in voluptatum necessitatibus asperiores quis illum, sint porro esse. Harum pariatur eos animi itaque reprehenderit.</p>
            </div>
            <img :src="slotProps.item.image" :alt="slotProps.item.alt" />
          </div>
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
        </template>
      </Galleria>
    <section class="faculty-section">
      <div class="team-wrapper">
        <div class="team">
          <h2 style="text-align: center;transform:scale(1.12); margin-bottom: 2rem;">Faculty Advisor</h2>
          <div class="team-members" style="align-self: center; transform:scale(1.12)">
            <div v-for="(member, index) in FacultyAdvisor" :key="member.name" class="member" @click="imageClick(index)">
              <h3>{{ member.title }}</h3>
              <img :src="member.image" alt="Council Member" />
              <p>{{ member.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="council-section">
     
      <div class="team-wrapper">
        <div class="team">
          <h2>Council Members</h2>
          <div class="team-members">
            <div v-for="(member, index) in CouncilMembers" :key="member.name" class="member" @click="imageClick(index + FacultyAdvisor.length)">
              <h3>{{ member.title }}</h3>
              <img :src="member.image" alt="Council Member" />
              <p>{{ member.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="S&E-section">
      <div class="team-wrapper">
        <div class="team">
          <h2>Software & Electrical</h2>
          <div class="team-members">
            
            <div v-for="(member, index) in SoftwareAndElectrical" :key="member.name" class="member" @click="imageClick(index + FacultyAdvisor.length + CouncilMembers.length)">
              <h3>{{ member.title }}</h3>
              <img :src="member.image" alt="Council Member" />
              <p>{{ member.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="Mechanical-section">
     
      <div class="team-wrapper">
        <div class="team">
          <h2>Mechanical</h2>
          <div class="team-members">
            <div v-for="(member, index) in Mechanical" :key="member.name" class="member" @click="imageClick(index + FacultyAdvisor.length + CouncilMembers.length + SoftwareAndElectrical.length)">
              <h3>{{ member.title }}</h3>
              <img :src="member.image" alt="Council Member" />
              <p>{{ member.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="Admin-section">
     
     <div class="team-wrapper">
       <div class="team">
         <h2>Admin Support</h2>
         <div class="team-members">
           <div v-for="(member, index) in AdminSupport" :key="member.name" class="member" @click="imageClick(index + FacultyAdvisor.length + CouncilMembers.length + SoftwareAndElectrical.length + Mechanical.length)">
             <h3>{{ member.title }}</h3>
             <img :src="member.image" alt="Council Member" />
             <p>{{ member.name }}</p>
           </div>
         </div>
       </div>
     </div>
   </section>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/base.scss';

.layout {
  top:2rem;
  position: relative;
  padding: 0 2rem;
  background-color: var(--umatt-c-white);
  color: var(--umatt-c-black);
  background: #222020;
  min-height: 100vh;
  z-index: 0;
}


.banner-wrapper {
  text-align: center;
  height: clamp(250px, 20vw, 800px);
  padding: 2rem 0;
}

.banner {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: var(--saffron-2); // Correct usage of SCSS variable
  background-clip: text;
  background-size: 12% 25%;
  background-position: 80% 70%;
  height: 100%;
  // animation: background-animation 12s linear infinite;
}

.banner .title {
  font-size: clamp(4.2rem, 10vw, 10rem);
  font-style: italic;
  color: transparent;
  // text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.title::after {
  content: '';
  position: relative;
  display: block;
  width: 50%;
  height: clamp(3px, 2vw, 15px);
  background-color: var(--engineering-orange);
  left: 35%;
}

section {

  margin-top: 2rem;
}



.team-wrapper {
  height: 100%;
  width: 100%;
  padding: 2rem;
}

.team {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.team h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: var(--engineering-orange);
}

.team-members {
  display: grid;
  gap: 2rem;
  padding: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.member {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  gap: 1rem;
  padding: 1rem;
  background: var(--umatt-c-white);
  border-radius: 10px;
  cursor: pointer;
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.member::after,
.member::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  border-radius: 10px;
  padding: 10px;
  background: conic-gradient(
    from var(--angle),
    #ff6f61,
    #ffcc00,
    #66ff66,
    #66ccff,
    #ff66cc,
    #ff6f61
  );
  z-index: -1;
}

.member:hover::after,
.member:hover::before {
  background: conic-gradient(
    from var(--angle),
    transparent 80%,
    #ff6f61,
    #ffcc00,
    #66ff66,
    #66ccff,
    #ff66cc,
    #ff6f61
  );
  animation: spin 3s linear infinite;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
}

.member::before {
  filter: blur(20px);
  opacity: 0.5;
}

.member img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}




.content {
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  align-items: center;
 
  margin:0 2rem;
  gap: clamp(1rem, 5vw, 2rem);
  
  padding: 3rem;
  // backdrop-filter: blur(100px);
  border-radius: 10px;
  height: 100%;
  width: 100%;
  z-index: -1;
 
}
.content::before{
  content: '';
  position: absolute;
  left:-15%;
  height: 100vh;
  width: 100vw;
  border-radius: 10px;
  padding: 10px;
  backdrop-filter: blur(10px);
  z-index: -1;
}

.content .description {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.pos {
  font-size: clamp(1.2rem, 5vw, 2rem);
  color: var(--engineering-orange);
}

.name {
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: 700;
}

.content img {
  width: 100%;
  max-height: 80%;
  border-radius: 10px;
}

@keyframes spin {
  0% {
    --angle: 0deg;
  }
  100% {
    --angle: 360deg;
  }
}

@keyframes background-animation {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 100%;
  }
}
</style>