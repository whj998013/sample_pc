<style>
.bodyClass {
  font-family: "Droid Sans", sans-serif;
  font-size: 100%;
  background: url(./pic/bg.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>
<style scoped>
.clear {
  clear: both;
} /* clear float */

img {
  max-width: 100%;
}
/*end reset*/
.message.warning {
  background: rgba(255, 255, 255, 0.33);
  -moz-box-shadow: 0 0 0 3px rgba(56, 41, 32, 0.25);
  -webkit-box-shadow: 0 0 0 3px rgba(56, 41, 32, 0.25);
  box-shadow: 0 0 0 3px rgba(56, 41, 32, 0.25);
  margin: 9% auto 0;
  width: 26%;
}
.login-head {
  padding: 2em 0;
  background: #6d4a70;
  position: relative;
}
.login-head h1 {
  color: #fff;
  font-size: 1.5em;
  text-align: left;
  margin: 0 23px;
}
form {
  padding: 3em 2em;
  background: #f2f2f2;
}
form li {
  border: 2px ridge rgba(187, 185, 189, 0.11);
  border-radius: 0.3em;
  -webkit-border-radius: 0.3em;
  -moz-border-radius: 0.3em;
  -o-border-radius: 0.3em;
  list-style: none;
  margin-bottom: 12px;
  background: #f0eef0;
}
.icon {
  background: url(./pic/icons.png) no-repeat 0px 0px;
  height: 30px;
  width: 30px;
  display: block;
  float: right;
  margin: 12px 9px 9px 0px;
}
.user {
  background: url(./pic/icons.png) no-repeat 7px 1px;
}
.lock {
  background: url(./pic/icons.png) no-repeat -22px 1px;
}
input[type="text"],
input[type="password"] {
  font-family: "Droid Sans", sans-serif;
  width: 70%;
  padding: 0.5em 2em 0.5em 1em;
  color: #b8b8b8;
  font-size: 20px;
  outline: none;
  background: none;
  border: none;
}
input[type="text"]:hover,
input[type="password"]:hover {
  color: #9e61a3;
}
.submit h4 a {
  float: left;
  font-size: 16px;
  color: #999;
  font-weight: 400;
  font-family: "Droid Sans", sans-serif;
  margin-top: 15px;
  margin-left: 21px;
}
.submit h4 a:hover {
  color: #8d4294;
}
/*************************/
.submit {
  padding-top: 3em;
}
input[type="button"] {
  float: left;
  color: #fff;
  cursor: pointer;
  font-weight: 900;
  outline: none;
  font-family: "Raleway", sans-serif;
  padding: 12px 0px;
  width: 35%;
  font-size: 18px;
  background: #6c496f;
  border: 2px solid #6c496f;
  border-radius: 0.5em;
  -webkit-border-radius: 0.5em;
  -moz-border-radius: 0.5em;
  -o-border-radius: 0.5em;
}
.message {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2) inset,
    0 1px 0 rgba(255, 255, 255, 0.1) inset, 0 1px 2px rgba(0, 0, 0, 0.4);
  position: relative;
}
.warning {
  text-align: center;
  margin: 14% auto;
  width: 280px;
  background: rgba(82, 97, 97, 0.68);
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
}
.alert-close {
  background: url("./pic/into.png") no-repeat 0px 3px;
  cursor: pointer;
  height: 30px;
  position: absolute;
  right: 12px;
  top: 34px;
  -webkit-transition: color 0.2s ease-in-out;
  -moz-transition: color 0.2s ease-in-out;
  -o-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
  width: 30px;
}
/*-----start-responsive-design------*/
@media (max-width: 1440px) {
  .message.warning {
    margin: 11% auto 0;
    width: 30%;
  }
}
@media (max-width: 1366px) {
  .message.warning {
    margin: 7% auto 0;
    width: 35%;
  }
}
@media (max-width: 1280px) {
  .message.warning {
    margin: 7% auto 0;
    width: 33%;
  }
}
@media (max-width: 1024px) {
  .message.warning {
    margin: 12% auto 0;
    width: 47%;
  }
}
@media (max-width: 768px) {
  .message.warning {
    margin: 13% auto 0;
    width: 65%;
  }
}
</style>
<template>
  <div class="message warning">
    <div class="inset">
      <div class="login-head">
        <h1>请输入用户密码登录系统</h1>
        <div class="alert-close"></div>
      </div>
      <form>
        <ul>
          <li><input type="text" class="text" v-model="name" placeholder="请输入用户名" @keydown="keyDown">
            <p class=" icon user"></p>
          </li>
          <li><input type="password" v-model="pwd" placeholder="请输入密码" @keydown="keyDown" />
            <p class="icon lock"></p>
          </li>
        </ul>

        <div class="submit">
          <input type="button" @click="login" value="登录">
          <div class="clear"> </div>
        </div>
      </form>
    </div>
  </div>

</template>
<script>

export default {
  data: function() {
    return {
      name: "",
      pwd: ""
    };
  },
  methods: {
    keyDown() {
      if (event.keyCode == 13) {
        event.returnValue = false;
        event.cancel = true;
        this.login();
      }
    },
    login() {
      this.$emit("login", { name: this.name, pwd: this.pwd });
    }
  },
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].className = "bodyClass";
  },
  beforeDestroy: function() {
    document.body.removeAttribute("class", "bodyClass");
  }
};
</script>                                 