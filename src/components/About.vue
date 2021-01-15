<template>
  <div id="about">
    <h2>
      The one stop shop for all your hipster needs. Pedal up, get your pour, and
      have one of our trusted mechanics look over your bike.
    </h2>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
#about {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 500px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://images.unsplash.com/photo-1565895319717-c8cc0dd526db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
  background-repeat: no-repeat;
}
h2 {
  text-align: center;
  width: 700px;
  background-color: transparent;
  color: white;
  font-size: 45px;
}
</style>
