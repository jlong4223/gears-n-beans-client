<template>
  <div id="about">
    <h2>
      The one stop shop for all your hipster needs. Pedal up, get your pour, and
      have one of our trusted mechanics look over your bike.
    </h2>
  </div>
  <div id="roast">
    <h3>
      We directly source and roast elite coffees from around the world. We are
      dedicated to bringing you closer to the journey and excitement of coffee
      by experiencing it and drinking it together.
    </h3>
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1565895319717-c8cc0dd526db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
  background-repeat: no-repeat;
}
#roast {
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  height: 500px;
}
h2 {
  text-align: center;
  width: 700px;
  background-color: transparent;
  color: white;
  font-size: 45px;
}
h3 {
  text-align: center;
  width: 700px;
  background-color: transparent;
  font-size: 35px;
}
h4 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  width: 150px;
  height: 50px;
  color: white;
}
#homeinfo {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.location {
  display: flex;
  justify-content: center;
}
</style>
