<template>
  <a href="#" @click="downloadPrintScreen('container')">Download</a>
  <div id="container" style="width: 100vw; background-color: #e0e1e7">
    <div id="card" style="width: 40%; height: 100%; background-color: #fff; margin: 0 auto">
      <div id="header" style="width: 100%; height: 23vh; background-image: url('https://agenotifica.s3.sa-east-1.amazonaws.com/age/Prancheta+1+copiar+5.jpg'); background-size: cover; background-repeat: no-repeat">
      </div>
      <div id="main" style="padding: 3vh 2vw 3vh 4vw; margin: 0 auto">
        <div id="section">
          <h1 style="font-size: 1.4rem; color: #104176; font-weight: 600">Prezado {{ $client }}, como vai?</h1>
        </div>
        <br>
        <div id="section-2">
          <p style="color: #82b4ff; font-weight: 500; font-size: .9rem">
            Primeiramente, gostariámos de lhe dar as boas-vindas pela <br>
            sua inclusão no nosso portfólio de clientes <b style="color: #104176">Age Empresas.</b>
          </p>
          <br>
          <p style="color: #82b4ff; font-weight: 500; font-size: .9rem">
            A partir de agora, você terá acesso a uma experiência incrível <br>
            na utilização da nossa <b style="color: #104176">solução de link dedicado</b> ou <b style="color: #104176">banda larga</b> <br>
            <b style="color: #104176">de alta capacidade.</b>
          </p>
        </div>
        <div id="section-3" style="margin: 4vh 0">
          <div id="card-info" style="margin: 0 auto; width: 80%; background-color: #B8D1F6; padding: 2vh 1vw">
            <p style="color: #104176; font-weight: 700; font-size: .8rem">Estes são seus dados: </p>
            <br>
            <p style="color: #104176; font-weight: 700; font-size: .8rem">Razão Social: {{ $client }}</p>
            <br>
            <p style="color: #104176; font-weight: 700; font-size: .8rem">Número do Contrato do cliente: {{ $contract }}</p>
            <br>
            <p style="color: #104176; font-weight: 700; font-size: .8rem">Vigência do Contrato até: {{ $vigence  }} </p>
          </div>
        </div>
        <div id="section-4" style="display: flex; flex-direction: row; gap: 1vw; align-items: center">
          <img src="https://agenotifica.s3.sa-east-1.amazonaws.com/age/Prancheta+1+copiar.jpg" alt="seta" style="width: 2.5vw; height: auto">
          <p style="color: #104176; font-weight: 500; font-size: .8rem">&nbsp;Caso necessite de atendimento, estaremos <br> &nbsp;sempre prontos para atendê-lo através de nossos canais:</p>
        </div>
        <div id="section-5" style="width: 100%; margin: 3vh 0">
          <div id="card-2" style="width: 80%; margin: 0 auto; border: 2px solid #B8D1F6; padding: 2vh 1vw">
            <div id="item" style="margin-bottom: 2vh; display: flex; flex-direction: row; gap: 1vw; align-items: center">
              <img src="https://agenotifica.s3.sa-east-1.amazonaws.com/age/Prancheta+1+copiar+4.jpg" alt="suporte" style="width: 2vw; height: auto">
              <span style="color: #B8D1F6; font-size: .8rem">&nbsp;<b>suporte.empresas@agetelecom.com.br</b></span>
            </div>
            <div id="item" style="margin-bottom: 2vh; display: flex; flex-direction: row; gap: 1vw; align-items: center">
              <img src="https://agenotifica.s3.sa-east-1.amazonaws.com/age/Prancheta+1+copiar+3.jpg" alt="email" style="width: 2vw; height: auto">
              <span style="color: #B8D1F6; font-size: .8rem">&nbsp;<b>noc@agetelecom.com.br</b></span>
            </div>
            <div id="item" style="display: flex; flex-direction: row; gap: 1vw; align-items: center">
              <img src="https://agenotifica.s3.sa-east-1.amazonaws.com/age/Prancheta+1+copiar+2.jpg" alt="whatsapp" style="width: 2vw; height: auto">
              <span style="color: #B8D1F6; font-size: .8rem">&nbsp;<b>Telefone: 4040-4498</b></span>
            </div>
          </div>
        </div>
        <div id="section-6" style="margin: 8vh 0 12vh 0">
          <p style="color: #B8D1F6; text-align: center">Atenciosamente,</p>
          <p style="color: #B8D1F6; text-align: center"><b>Age Empresas</b></p>
        </div>

      </div>
      <div id="footer"
           style="background-image: url('https://agenotifica.s3.sa-east-1.amazonaws.com/age/rodap%C3%A9+(1).jpg');
                 background-repeat: no-repeat; background-size: cover; width: 100%; height: 6vh ">

      </div>
    </div>

  </div>

</template>

<script>



export default {
  name: "TestComponent",
  components: {},
  data() {
    return {
    }
  },
  methods: {
    downloadPrintScreen: function (divId) {

      // Obtém a div que você deseja baixar como imagem
      var divToPrint = document.getElementById(divId);

      // Obtém todas as imagens dentro da div
      var images = divToPrint.getElementsByTagName('img');

      // Contador para rastrear quantas imagens foram carregadas
      var imagesLoaded = 0;

      // Função que é chamada quando uma imagem é carregada
      function onImageLoad() {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
          // Todas as imagens foram carregadas, então crie o canvas e baixe a imagem
          console.log('true')
          createCanvasAndDownload();
        }
      }

      // Percorre todas as imagens e adiciona um listener de 'onload'
      for (var i = 0; i < images.length; i++) {
        images[i].onload = onImageLoad;
      }

      // Função que cria o canvas e baixa a imagem
      function createCanvasAndDownload() {
        // Cria um elemento canvas
        var canvas = document.createElement('canvas');
        canvas.width = divToPrint.offsetWidth;
        canvas.height = divToPrint.offsetHeight;

        // Desenha a div no canvas
        var ctx = canvas.getContext('2d');
        ctx.drawImage(divToPrint, 0, 0);

        // Converte o canvas em uma imagem PNG
        var dataUrl = canvas.toDataURL('image/png');

        // Cria um link para baixar a imagem
        var link = document.createElement('a');
        link.download = 'div_imagem.png';
        link.href = dataUrl;

        // Adiciona o link ao DOM e clica nele para iniciar o download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }


    }

  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">

.container {
  width: 100vw;
  height: 100vh;
  @include flex(column, center, center, 4vh);



}

</style>