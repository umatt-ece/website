<script setup>
import { ref } from 'vue';
const Title = ref('Why Join Us?');
const Text = ref('We are a group of students passionate about agriculture and engineering. We are dedicated to designing and building a tractor to compete in the annual ASABE competition. We are always looking for new members to join our team and help us achieve our goals. If you are interested in joining us, click the button below to learn more.');
const Image = ref('/src/assets/images/competition-group-photo-2024.jpg');


</script>

<template>
    <section class="join-container">
        <div class="join">
            <div class="join-img">
                <img :src="Image" alt="group-photo" />
            </div>
            <div class="join-content">
                <div class="content__title">
                    <h2>{{ Title }}</h2>
                </div>
                <div class="content__text">
                    <p>{{ Text }}</p>
                </div>
                <div class="content__btn">
                    <router-link to="/join" class="btn">Learn More</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.join-container {
    margin: 2rem 0;
    padding: 2rem;
}
.join{
    display: grid;
    position: relative;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 2rem;
    max-width: 1400px;
    /* direction: rtl; */
}
.join-img{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height:350px;
    overflow: hidden;

}
.join-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.content__title{
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 1rem;
}
.content__text{
    margin-bottom: 1rem;
}
.content__btn{
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn{
    padding: 1rem 2rem;
    background-color: var(--umatt-c-gold);
    color: var(--umatt-c-white);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.btn:hover{
    background-color: var(--umatt-c-white);
    color: var(--umatt-c-gold);
}
.btn:active{
    transform: scale(0.98);
}
.join-img img{
    width: 100%;
    min-height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

</style>