<template>
  <div id="modal">
    <div id="card-modal">
      <div id="close-button">
        <i class="fi fi-rr-cross-small" @click="closePage"></i>
      </div>
      <div class="filters">
        <input type="text" id="search" name="search" placeholder="Buscar condutor, placa..." autocomplete="off"
               v-model="search">
      </div>
      <div id="content-panel">
        <table>
          <thead>
          <tr>
            <th>Condutor</th>
            <th>Grupo</th>
            <th>Veículo</th>
            <th>Fabricante/Modelo</th>
            <th>Data</th>
            <th>Referente</th>
            <th>Quilometragem <br> Relatada</th>
<!--            <th>Distância <br> Percorrida</th>-->
            <th>Status</th>
<!--            <th>Ações</th>-->
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in reports" :key="item.id">
            <td>{{ item.primeiro_nome }} {{ item.segundo_nome }}</td>
            <td>{{ item.grupo }}</td>
            <td>{{ item.tipo }}</td>
            <td>{{ item.fabricante }}/{{ item.modelo }}</td>
            <td>{{ item.data_referencia }}</td>

            <td>{{ item.periodo }}</td>
            <td>{{ item.quilometragem_aprovada }}  <!--|<span class="down"><i class="fi fi-rr-caret-down"></i> 4,20%</span>--></td>
            <!--            <td>87</td>-->
            <td class="status" :class="{ 'approved' : item.aprovador_id !== null, 'pending' : item.aprovador_id === null }">
                <span>
                  {{ item.aprovador_id !== null ? 'Aprovado' : 'Pendente' }}
                </span>
            </td>
            <!--            <td>-->
            <!--              <i class="fi fi-rr-menu-dots" @click="modal = 'report-mng'"></i>-->
            <!--            </td>-->
          </tr>
          </tbody>
        </table>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ReportsStatus",
  props: {
    reports: {
      required: true
    },
    typeStatus: {
      required: true
    }
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    closePage: function () {
      this.$emit('close-modal')
    }
  }
}
</script>

<style scoped lang="scss">


#modal {
  #card-modal {
    width: 95vw;
    height: 95vh;
    background-color: $back-main;

    #close-button {
      height: 8%;
    }

    .filters {
      padding: 3vh 2vw;
      width: 100%;
      @include flex(row, flex-start, center, 0);
      input[type=text] {
        width: 25%;
        padding: 10px 8px;
        border-radius: 5px;
        outline: none;
        border: none;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

        &:focus {
          box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;      }
      }

    }


    #content-panel {
      width: 100%;
      height: 75%;
      max-height: 75%;
      padding: 2vh 2vw;
      overflow: auto;

      table {
        width: 100%;
        border-collapse: collapse;

        thead {
          tr {
            border-bottom: 2px solid #cccccc30;

            th:nth-child(1) {
              text-align: left;
            }
          }
        }



        tbody {
          tr {
            @include tr;


            td:nth-child(1) {
              text-align: left;
            }

            td:nth-last-child(1) {
              i {
                @include tr-p;
                font-size: 1.6rem;

                &:hover {
                  color: $ml-text-h1;
                }
              }
            }

            &:hover {
              background-color: #cccccc60;
            }


            .status {
              span {
                color: #fff;
                padding: 7px 10px;
                font-weight: 400;
                font-size: 1.2rem;
                border-radius: 2px;
              }
            }

            .approved {
              span {
                background-color: #04DBAC;
              }

            }
            .pending {
              span {
                background-color: #FDCB1C;
              }
            }
          }

        }

        thead, tbody {
          tr {
            th {
              width: calc((100% / 8) - 10px);
              font-size: 1.4rem;
              color: $age-bl;
              height: 7vh;
              text-align: center;
              padding: 0 1vw;
            }
            td {
              width: calc((100% / 8) - 10px);
              height: 7vh;
              color: $ml-text-h1;
              font-size: 1.2rem;
              font-weight: 500;
              text-align: center;
              padding: 0 1vw;

              ul {
                li {
                  position: relative;

                  &:hover {
                    .menu-dropdown {
                      display: block;
                    }
                  }

                  .menu-dropdown {
                    position: absolute;
                    right: 4vw;
                    top: -27vh;
                    width: 12vw;
                    background-color: #fff;
                    border-radius: 3px;
                    border: 1px solid #cccccc;
                    @include sh-h;

                    ul {
                      li {
                        text-align: left;
                        padding: 1vh 1vw;
                        @include flex(row, flex-start, center, .5vw);
                        border-bottom: 1px solid #cccccc60;
                        height: 7vh;
                      }

                      li:nth-last-child(1) {
                        border: none;
                      }
                    }
                  }

                  .down {
                    background-color: red;
                  }

                  .up {
                    background-color: blue;
                  }
                }
              }
            }
          }

          tr:nth-child(even) {
            background-color: #cccccc30;

            &:hover {
              background-color: #cccccc60;
            }
          }

        }

        .up {
          color: $red;
        }

        .down {
          color: #04DBAC;
        }
      }
    }

  }
}


</style>