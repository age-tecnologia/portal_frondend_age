<template>
  <div class="edit-report">
    <h1>Relatório - {{ data.name }}</h1>
    <button @click="returnPage">Voltar</button>
    <div class="content-edit">
      <form action="">
        <div class="inputs-text">
          <label for="name">Nome: </label>
          <input autocomplete="off" type="text" name="name" id="name" v-model="data.name" required>
        </div>
        <div class="inputs-text">
          <label for="name-archive">Nome do arquivo: </label>
          <input autocomplete="off" type="text" name="name-archive" id="name-archive" v-model="data.namearchive" required>
        </div>
        <div class="inputs-text">
          <label for="query">Query do relatório: </label>
          <textarea autocomplete="off" v-model="data.query" name="query" required>

          </textarea>
        </div>
        <div class="inputs-text">
          <label for="database">Banco de dados disponíveis: </label>
          <select name="database" id="database" required v-model="data.database">
            <option value="" :selected="data.database !== ''" disabled>--- Nenhuma opção selecionada ---</option>
            <option value="pgsql" :selected="data.database === 'pgsql'">Voalle</option>
            <option value="mysql_take" :selected="data.database === 'mysql_take'">TakeBlip</option>
            <option value="mysql" :selected="data.database === 'mysql'">Portal</option>
          </select>
        </div>
        <div class="inputs-text">
          <label for="period">Tipo de filtro</label>
          <select name="period" id="period" required v-model="data.type">
            <option value="0" :selected="data.isPeriod === 0 || data.isPeriodHour === 0">--- Nenhum filtro ---</option>
            <option value="1" :selected="data.isPeriod === 1" >Data</option>
            <option value="2" :selected="data.isPeriodHour === 1">Data e hora</option>
          </select>
        </div>
        <div class="inputs-text">
          <label for="headers">Colunas do arquivo: </label>
          <input autocomplete="off" type="text" name="headers" id="headers" v-model="data.headers" required placeholder="separar com ;">
        </div>
        <input type="submit" value="Alterar" v-if="this.id !== 0" @click.prevent="editReport">
        <input type="submit" value="Cadastrar" v-else @click.prevent="newReport">
      </form>
    </div>
  </div>
</template>

<script>

import {AXIOS} from "../../../services/api.ts";
import Cookie from "js-cookie";

export default {
  name: "EditReport",
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      data: {
        name: '',
        namearchive: '',
        query: '',
        database: '',
        isPeriod: 0,
        isPeriodHour: 0,
        isCompetence: 0,
        headers: '',
        type: 0
      },
      msg: '',
    }
  },
  methods: {
    getReport: function () {
      if(this.id !== 0) {
        AXIOS({
          method: 'GET',
          url: 'agereport/reports/'+this.id,
          headers: {
            'Authorization': 'Bearer'+Cookie.get('token')
          }
        }).then((res) => {
          this.data.name = res.data.data.nome
          this.data.namearchive = res.data.data.nome_arquivo
          this.data.query = res.data.data.query
          this.data.database = res.data.data.banco_solicitado
          this.data.isPeriod = res.data.data.isPeriodo
          this.data.isPeriodHour = res.data.data.isPeriodoHora
          this.data.headers = res.data.data.cabecalhos

        })
      }
    },
    editReport: function () {
      AXIOS({
        method: 'GET',
        url: `agereport/reports/${this.id}/edit`,
        params: this.data
      }).then((res) => {
        this.nameReport = res.data.data.nome
        this.data.name = res.data.data.nome
        this.data.namearchive = res.data.data.nome_arquivo
        this.data.query = res.data.data.query
        this.data.database = res.data.data.banco_solicitado
        this.data.isPeriod = res.data.data.isPeriodo
        this.data.isPeriodHour = res.data.data.isPeriodoHora
        this.data.headers = res.data.data.cabecalhos

        this.$emit('msg', {
          status: 'sucess',
          msg: res.data.msg
        })
      })
    },
    newReport: function () {
      AXIOS({
        method: 'POST',
        url: 'agereport/reports',
        headers: {
          'Authorization': 'Bearer '+Cookie.get('token')
        },
        data: {
          name: this.data.name,
          namearchive: this.data.namearchive,
          query: this.data.query,
          database: this.data.database,
          isPeriod: this.data.isPeriod,
          isPeriodHour: this.data.isPeriodHour,
          headers: this.data.headers
        }
      }).then((res) => {
        alert(res.data.msg)
      })
    },
    returnPage: function () {
      this.$emit('close-page')
    }
  },
  mounted() {
    this.getReport()
  }
}
</script>

<style scoped lang="scss">

.edit-report {
  padding: 1vh 1vw;

  button {
    margin: 2vh 0 0 0;
    @include btn-dashboard();
    background-color: $primary;
    color: #ffffff;
  }

  .content-edit {
    form {
      padding: 4vh 0;
      @include flex(column, flex-start, initia, 3vh);

      .inputs-text {
        @include flex(column, flex-start, initial, 5px);

        input[type=text] {
          @include inp-form-text;
          width: 50%;
          background-color: #fff;
        }

        textarea {
          @include inp-form-text;
          width: 50%;
          height: 30vh;
        }

        select {
          @include inp-form-text;
          width: 50%;
        }
      }

      input[type=submit] {
        width: 50%;
        padding: 15px 10px;
        @include btn-dashboard();
        background-color: $primary;
        color: #ffffff;
      }
    }
  }
}

</style>