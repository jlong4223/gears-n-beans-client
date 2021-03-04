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
  <div id="map">
    <MapHolder />
  </div>
  <div class="images">
    <div>
      <img
        src="https://e360.yale.edu/assets/site/_1500x1500_fit_center-center_80/GettyImages-1146667212_ColombiaCoffee_web.jpg"
        alt="farm"
      />
    </div>
    <div>
      <img
        src="https://grist.org/wp-content/uploads/2019/07/gettyimages-699105609-e1563570012920.jpg?w=1024&h=576&crop=1"
        alt="farm"
      />
    </div>
    <div>
      <img
        src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/4ecb86cbc87f3f9504fffa1b94cf931693e4ab89/big-c3535b4050c2d49f330b0fd0b5b41cba.jpg"
        alt="farm"
      />
    </div>
  </div>
  <div class="images">
    <div>
      <img
        src="https://www.gettingstamped.com/wp-content/uploads/2013/10/Coffee-Farm-Work-Salento-Colombia-7.jpg"
        alt="farm"
      />
    </div>
    <div>
      <img
        src="https://fs.buttercms.com/resize=height:600/quality=v:80/auto_image/compress/Eee6jOhVT4SYGqnAOQbc"
        alt="farm"
      />
    </div>
    <div>
      <img
        src="https://cdn.theculturetrip.com/wp-content/uploads/2017/07/14726580846_5927dcbb2f_k.jpg"
        alt="farm"
      />
    </div>
  </div>
</template>

<script>
import MapHolder from "./MapHolder";
export default {
  name: "About",
  components: {
    MapHolder,
  },
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
img {
  width: 300px;
  border-radius: 5px;
}
.images {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;
}
.images div {
  margin: 5px;
}

#map {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
  margin-bottom: 30px;
}

@media screen and (max-width: 750px) {
  .images {
    flex-direction: column;
  }
  .images div {
    margin-top: 10px;
  }
  #about h2 {
    font-size: 22px;
  }
  #about,
  #roast {
    height: 300px;
  }
  #roast h3 {
    font-size: 20px;
  }
  h2,
  h3 {
    width: 280px;
  }
}
</style>
