<template>
  <footer>
    <div id="homeinfo">
      <div>
        <div class="location">
          <h4>Hours</h4>
        </div>
        <p>
          Monday 8:00am - 1:00pm <br />Tuesday 8:00am - 1:00pm <br />Wednesday
          8:00am - 1:00pm <br />Thursday 8:00am - 1:00pm <br />Friday 8:00am -
          1:00pm <br />Saturday 8:00am - 1:00pm <br />Sunday CLOSED
        </p>
      </div>
      <div>
        <div class="location">
          <h4>Location</h4>
        </div>
        <p>
          Gears N' Beans <br />
          1111 Beans Dr. <br />
          Austin, TX 78745 <br />
          <a :href="`tel:567-259-7413`">(111)-111-1111</a> <br />
          <a :href="`mailto:gears@beans.com`">gears@beans.com</a>
        </p>
      </div>
      <div>
        <div class="location">
          <h4>Follow us</h4>
        </div>
        <p id="icons">
          <a href="https://www.linkedin.com/in/jaredlong-95/" target="_blank"
            ><i class="fab fa-facebook fa-3x"></i></a
          ><br />
          <a href="https://www.linkedin.com/in/jaredlong-95/" target="_blank"
            ><i class="fab fa-twitter-square fa-3x"></i
          ></a>
          <br />
          <a href="https://www.linkedin.com/in/jaredlong-95/" target="_blank"
            ><i class="fab fa-instagram fa-3x"></i
          ></a>
          <br />
        </p>
      </div>
    </div>
    <div id="copyright">
      <h6>
        Copyright &copy; Gears N' Beans {{ `${new Date().getFullYear()}` }} All
        Rights Reserved
      </h6>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
* {
  background-color: #313133;
  color: white;
}
footer {
  height: 300px;
}
h4 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  color: white;
  margin-top: 20px;
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
#copyright {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
i {
  margin-top: 9px;
}
i:hover {
  color: dodgerblue;
}
@media screen and (max-width: 750px) {
  #homeinfo {
    flex-direction: column;
  }
  #copyright {
    margin-top: 0px;
    text-align: center;
  }
  #icons {
    display: flex;
    justify-content: center;
  }
  i {
    padding: 5px;
    margin-top: 2px;
  }
}
</style>
