<template>
    <div class="welcome-text" v-if="loading === false">
      <h2>{{ getDate() }}</h2>
      <h1>{{ getMessage() }}, {{ user.firstName }}</h1>
      <div class="systems">
          <div class="system" v-for="(item, index) in modules" :key="item.id"
               @click="tradePage(item.rota)"
               :style="'animation-delay: '+(index * 0.3)+'s'">
            <div class="title">
              <i :class="item.icone"></i>
              <h2>{{ item.modulo }}</h2>
            </div>
            <span>{{ item.descricao }}</span>
          </div>
      </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import moment from "moment";
import {AXIOS} from "../../../services/api.ts";
import Cookie from 'js-cookie';

export default {
  name: "WelcomeSystems",
  components: {  },

  data () {
    return {
      screen: 'loading',
      modules: {},
      animationDelay: .3,
      loading: false,

    }
  },
  computed: {
    ...mapGetters(
        [
            'user'
        ]
    )
  },
  methods: {
    ...mapMutations([
       'SAVE_SYSTEM'
    ]),
    tradePage: function (route) {
      this.SAVE_SYSTEM({loading: true})
      this.$router.replace(route)


    },
    getDate: function () {
      const date = moment().locale('pt-br')
      const dayName = date.format('dddd')
      const dateFull = date.format('LL')
      const dayFormatted = dayName + ', '+dateFull
      return dayFormatted
    },
    getMessage: function () {
      var today = new Date()
      var hour = today.getHours()
      var msg = ''

      if (hour < 12) {
        msg = 'Bom dia'
      } else if (hour < 18) {
        msg = 'Boa tarde'
      } else {
        msg = 'Boa noite'
      }

      return msg
    },
    getModules: function () {
      AXIOS({
        method: 'GET',
        url: 'portal/aux/modules/access',
        headers: {
          'Authorization': 'Bearer'+Cookie.get('token')
        }
      }).then((res) => {
            this.modules = res.data
          })
    }
  },
  mounted() {
    this.getModules()
    this.SAVE_SYSTEM({loading: false})

  }
}
</script>

<style scoped lang="scss">

.welcome-text {
  @include flex(column, flex-start, center, 0vh);
  width: 100%;
  height: 80%;
  animation: up .4s forwards ease-in-out;
  padding: 2vh 0;




  .systems {
    @include flex(column, flex-start, center, 4vh);
    min-width: 50%;
    max-width: 90%;
    padding: 2vh 2vw;

    .system {
      background-color: #ffffff;
      border-radius: 5px;
      width: 100%;
      height: 10vh;
      opacity: 0;
      animation: .5s ease-in-out left-appears forwards;
      flex: 1;
      border: 1px solid #edeae9;
      @include tr-p;
      @include flex(row, flex-start, center, 2vw);
      padding: 2vh 2vw;

      &:hover {
        border-color: #c9c6c6;
        .title {
          h2 {
            color: $h1-black;
          }
        }

        span {
          color: $h1-black;
        }
      }

      .title {
        @include flex(row, flex-start, center, .5vw);
        min-width: 30%;

        i {
          font-size: 3.4rem;
          color: $primary;
        }

        h2 {
          font-size: 2rem;
          font-weight: 400;
          color: #6e6e6e;
          padding-bottom: 5px;
        }
      }

      span {
        color: #6e6e6e;
        font-size: 1.4rem;

      }
    }
    @keyframes left-appears {
      0% {
        transform: translateX(200px);
      }
      100% {
        opacity: 1;
        transform: translateX(0px);
      }
    }




  }



}

.mode-dark {

  .welcome-text {
    .systems {
      .system {
        background-color: $dark-mode-card;
        border-color: #ffffff20;

        .title {

          h2{
            color: #afafaf;
          }

        }

        span {
          color: #afafaf;
        }

        &:hover {
          .title {
            h2 {
              color: #fff !important;
            }
          }
          span {
            color: #fff;
          }
        }
      }
    }
  }

}

@keyframes up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}



</style>