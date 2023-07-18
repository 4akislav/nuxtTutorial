<template>
    <div>
        <h2>About</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quas magni adipisci atque cumque repudiandae incidunt exercitationem eius harum vitae.</p>
    <div>{{ data }}</div>
    </div>
</template>

<script setup>
  const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>