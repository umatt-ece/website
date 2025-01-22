<script setup >
import { ref } from 'vue';


const Title = ref('Who We Are ?');
const Text = ref('The University of Manitoba Association of Tiny Tractors (UMATT) is a student group that represents the interests of mechanical engineering students at the University of Manitoba. We are a student-run organization that provides academic, professional, and social support to our members. Our goal is to enhance the student experience by providing opportunities for personal and professional growth, fostering a sense of community, and promoting the field of Agricultral engineering.');
const Image = ref('/src/assets/images/competition-team-photo-2024.jpg');
</script>
<template>

    <div class="about-container">
        <section class ='about' >
            <div class="about-content">
                <div class="content__title blockquote">
                    <h2>{{ Title }}</h2>
                </div>
                <div class="content__text">
                    <p>{{ Text }}</p>
                </div>
                <div class="content__btn">
                    <router-link to="/about" class="btn">Learn More</router-link>
                </div>
            </div>
            <div class="about-image">
                <img :src="Image" alt="group-photo" />
            </div>
        </section>

    </div>    
</template>

<style scoped lang = "scss">
@use '/src/styles/base.scss' as *;
.about-container {

    padding: 2rem;
 
}
.about{
    display: grid;
    position: relative;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    gap: 2rem;
    max-width: 1400px;

}

.about-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
 


}
.content__title{
    font-size: clamp(1.5rem, 5vw, 2rem);
    color:$yellow;
    margin-bottom: 1rem;
}
.content__text{
    font-size: clamp(.75rem, 3vw, 1.3rem);
    text-align: justify;
    margin-bottom: 1rem;
    color: #f4f4f4
}
.about-image{
    position: relative;
    height:350px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;


}
.about-image img{
    width: 100%;
    min-height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
.content__btn {
  margin-top: 1rem;
  align-self: flex-end; /* Align the button to the right */
}
.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007BFF; /* Custom blue color */
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.btn:hover {
  background-color: #0056b3; /* Darker shade of blue for hover */
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}
.btn:active {
  background-color: #004085; /* Even darker shade of blue for active */
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

</style>