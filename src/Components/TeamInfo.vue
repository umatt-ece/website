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
    bio: 'something nice about that person',
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
    bio: 'something nice about that person',
    name: 'Kameron Ronald'
  },
  {
    title: 'Mechanical Lead',
    alt: 'Mechanical Lead',
    image: '/src/assets/images/headshot-arik.png',
    bio: 'something nice about that person',
    name: 'Arik Mesongnik'
  },
  {
    title: 'Electrical Lead',
    alt: 'Electrical Lead',
    image: '/src/assets/images/headshot-zach.png',
    bio: 'something nice about that person',
    name: 'Zachary DeGraeves'
  },
  {
    title: 'Treasurer',
    alt: 'Treasurer',
    image: '/src/assets/images/headshot-placeholder.png',
    bio: 'something nice about that person',
    name: 'Nicole Choi'
  }
]);

const SoftwareAndElectrical = ref([
  {
    title: 'S&E Lead',
    alt: 'S&E Lead',
    image: '/src/assets/images/headshot-zach.png',
    bio: 'something nice about that person',
    name: 'Zachary DeGraeves'
  },
  {
    title: 'Software Team',
    alt: 'Software Team',
    image: '/src/assets/images/headshot-placeholder.png',
    bio: 'something nice about that person',
    name: 'Some Name'
  },
  {
    title: 'Software Team',
    alt: 'Software Team',
    image: '/src/assets/images/headshot-placeholder.png',
    bio: 'something nice about that person',
    name: 'Some Name'
  },
//   {
//     title: 'Software Team',
//     alt: 'Software Team',
//     image: '/src/assets/images/headshot-placeholder.png',
//     bio: 'something nice about that person',
//     name: 'Some Name'
//   },
//   {
//     title: 'Software Team',
//     alt: 'Software Team',
//     image: '/src/assets/images/headshot-placeholder.png',
//     bio: 'something nice about that person',
//     name: 'Some Name'
//   },
//   {
//     title: 'Electrical Team',
//     alt: 'Electrical Team',
//     image: '/src/assets/images/headshot-placeholder.png',
//     bio: 'something nice about that person',
//     name: 'Some Name'
//   },
//   {
//     title: 'Electrical Team',
//     alt: 'Electrical Team',
//     image: '/src/assets/images/headshot-placeholder.png',
//     bio: 'something nice about that person',
//     name: 'Some Name'
//   }
]);

const Mechanical = ref([
  {
    title: 'Mechanical Lead',
    alt: 'Mechanical Lead',
    image: '/src/assets/images/headshot-arik.png',
    bio: 'something nice about that person',
    name: 'Ariel Mesongnik'
  },
  {
    title: 'Mechanical Team',
    alt: 'Mechanical Team',
    image: '/src/assets/images/headshot-placeholder.png',
    bio: 'something nice about that person',
    name: 'Some Name'
  },
  {
    title: 'Mechanical Team',
    alt: 'Mechanical Team',
    image: '/src/assets/images/headshot-placeholder.png',
    bio: 'something nice about that person',
    name: 'Some Name'
  },
//   {
//     title: 'Mechanical Team',
//     alt: 'Mechanical Team',
//     image: '/src/assets/images/headshot-placeholder.png',
//     bio: 'something nice about that person',
//     name: 'Some Name'
//   },
//   {
//     title: 'Mechanical Team',
//     alt: 'Mechanical Team',
//     image: '/src/assets/images/headshot-placeholder.png',
//     bio: 'something nice about that person',
//     name: 'Some Name'
//   },
//   {
//     title: 'Mechanical Team',
//     alt: 'Mechanical Team',
//     image: '/src/assets/images/headshot-placeholder.png',
//     bio: 'something nice about that person',
//     name: 'Some Name'
//   },
//   {
//     title: 'Mechanical Team',
//     alt: 'Mechanical Team',
//     image: '/src/assets/images/headshot-placeholder.png',
//     bio: 'something nice about that person',
//     name: 'Some Name'
//   }
]);

const AdminSupport = ref([
  {
    title: 'Some Lead',
    alt: 'Some Lead',
    image: '/src/assets/images/headshot-placeholder.png',
    bio: 'something nice about that person',
    name: 'Some Name'
  },
  {
    title: 'Some Team',
    alt: 'Some Team',
    image: '/src/assets/images/headshot-placeholder.png',
    bio: 'something nice about that person',
    name: 'Some Name'
  },
  {
    title: 'Some Team',
    alt: 'Some Team',
    image: '/src/assets/images/headshot-placeholder.png',
    bio: 'something nice about that person',
    name: 'Some Name'
  },
//   {
//     title: 'Some Team',
//     alt: 'Some Team',
//     image: '/src/assets/images/headshot-placeholder.png',
//     bio: 'something nice about that person',
//     name: 'Some Name'
//   },
//   {
//     title: 'Some Team',
//     alt: 'Some Team',
//     image: '/src/assets/images/headshot-placeholder.png',
//     bio: 'something nice about that person',
//     name: 'Some Name'
//   },
//   {
//     title: 'Some Team',
//     alt: 'Some Team',
//     image: '/src/assets/images/headshot-placeholder.png',
//     bio: 'something nice about that person',
//     name: 'Some Name'
//   },
//   {
//     title: 'Some Team',
//     alt: 'Some Team',
//     image: '/src/assets/images/headshot-placeholder.png',
//     bio: 'something nice about that person',
//     name: 'Some Name'
//   }
]);

const AllMembers = FacultyAdvisor.value.concat(CouncilMembers.value,SoftwareAndElectrical.value, Mechanical.value, AdminSupport.value);

</script>

<template>
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
              <p class="bio">  {{ slotProps.item.bio }}</p>
            </div>
            <img :src="slotProps.item.image" :alt="slotProps.item.alt" />
          </div>
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
        </template>
      </Galleria>
    <div class="section-wrapper">
        <section id = 'team-info' class="faculty-section">
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

@use '@/styles/base.scss' as *;
    
.section-wrapper{
    height:100vh;
    overflow-y: auto;

    scroll-snap-type:y mandatory;
    // overflow-y:scroll;

  
}
section{
    padding:4rem;
    height: 100vh;
    scroll-snap-align: start;
    overflow: hidden;

}
.team-wrapper {
  height: 100%;
  width: 100%;
  margin: 2rem;
  
}

.team {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: clamp(300px, 50vw, 500px);
}

.team h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  font-weight: 700;
  color: var(--engineering-orange);
}

.team-members {
  display: grid;
  gap: 2rem;
  padding: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}

.member {
  display: flex;
  position: relative;
  flex-direction: column;
  position: relative;
  height: 100%;
  gap: 1rem;
  padding: 1rem;
  background: $dark-grey;
  border-radius: 10px;
  cursor: pointer;
  aspect-ratio: 1;
}

.member h3 {
    position: absolute;
    bottom:-1.4rem;
    right:-1.5rem;
    color:white;
    font-weight: 700;

 
}
.member p {
 position: absolute;
    top:-1.3rem;
    left:-2rem;
    font-weight: 900;
    color:white;
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
  border-radius: 10px;
  height: 100%;
  width: 80%;
  z-index: -1;
 
}
.content::before{
  content: '';
  position: absolute;
  left:-25%;
  height: 100vh;
  width: 120vw;
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