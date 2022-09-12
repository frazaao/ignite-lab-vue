<template>
  <main class="flex-1">
    <div class="bg-black flex justify-center">
      <div
        class="bg-gray-800 h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"
      ></div>
    </div>

    <div class="mx-8 my-8 xl:max-w-[1200px] xl:mx-auto xl:px-8">
      <div class="flex">
        <div>
          <h1 class="text-2xl text-gray-100 font-bold">
            Aula 01 - Criando o projeto e realizando o setup inicial
          </h1>

          <p class="font-lg text-gray-300 my-4">
            Nessa aula vamos dar início ao projeto criando a estrutura base da
            aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também
            realizar o setup do nosso projeto no GraphCMS criando as entidades
            da aplicação e integrando a API GraphQL gerada pela plataforma no
            nosso front-end utilizando Apollo Client.
          </p>
        </div>
        <div class="min-w-[250px] mx-4 flex flex-col gap-4">
          <a
            href="#"
            class="py-4 px-2 w-full flex items-center justify-center gap-2 rounded bg-green-500 text-white uppercase text-sm hover:bg-green-700 transition-colors font-bold"
          >
            <Icon name="Discord" :size="20" color="white" />
            <span>Comunidade no discord</span>
          </a>

          <a
            href="#"
            class="lightningButton py-4 px-2 w-full flex items-center justify-center gap-2 rounded border border-blue-500 text-blue-500 text-sm hover:bg-blue-500 hover:text-gray-700 transition-colors uppercase font-bold"
          >
            <Icon class="lightningIcon" name="Lightning" :size="20" />
            <span>Acesse o desafio</span>
          </a>
        </div>
      </div>

      <div class="flex items-center mt-6">
        <img
          src="https://github.com/frazaao.png"
          alt="Imagem de perfil de Frazaao"
          class="w-16 rounded-full border-2 border-blue-500"
        />

        <div class="ml-4">
          <span class="text-gray-100 text-2xl font-bold">Matheus Frazão</span>
          <p class="text-gray-300">Desenvolvedor Fullstack Pleno no SENAI</p>
        </div>
      </div>

      <div class="flex flex-1 items-stretch gap-8 mt-16">
        <a
          href="#"
          class="flex bg-gray-700 hover:bg-gray-600 rounded overflow-hidden transition-colors"
        >
          <div class="py-10 px-6 bg-green-700 flex items-center justify-center">
            <Icon name="Download" :size="40" color="white" />
          </div>
          <div class="flex flex-col pr-10 justify-center ml-6 py-4">
            <span class="text-2xl text-gray-100 font-bold">
              Material complementar
            </span>
            <p class="text-gray-300 mt-2">
              Acesse o material complementar para acelerar o seu desenvolvimento
            </p>
          </div>
          <div class="py-10 px-6 flex items-center justify-center">
            <Icon name="ArrowRight" :size="24" color="white" />
          </div>
        </a>

        <a
          href="#"
          class="flex bg-gray-700 hover:bg-gray-600 rounded overflow-hidden transition-colors"
        >
          <div class="py-10 px-6 bg-green-700 flex items-center justify-center">
            <Icon name="Image" :size="40" color="white" />
          </div>
          <div class="flex flex-col pr-10 justify-center ml-6">
            <span class="text-2xl text-gray-100 font-bold">
              Wallpapers exclusivos
            </span>
            <p class="text-gray-300 mt-2">
              Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
              máquina
            </p>
          </div>
          <div class="py-10 px-6 flex items-center justify-center">
            <Icon name="ArrowRight" :size="24" color="white" />
          </div>
        </a>
      </div>

      <hr class="mt-16 border-gray-600" />
      <div class="w=full my-6 flex justify-between items-center">
        <div class="flex items-center gap-6">
          <Icon name="Rocketseat" />
          <span class="text-gray-300">
            Rocketseat - Todos os direitos reservados
          </span>
        </div>
        <span class="text-gray-300"> Políticas de privacidade </span>
      </div>
    </div>
  </main>
</template>

<script>
import Icon from "../Icon/index.vue";
import palette from "../../../palette";

export default {
  name: "VideoComponent",
  components: { Icon },
  data() {
    const state = {
      colors: palette.colors,
    };

    return state;
  },
};
</script>

<style scoped lang="postcss">
.lightningIcon::v-deep path {
  @apply stroke-blue-500 transition-colors;
}

.lightningButton:hover .lightningIcon::v-deep path {
  @apply stroke-gray-900;
}
</style>
