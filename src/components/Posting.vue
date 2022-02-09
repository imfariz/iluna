<template>
    <div class="flex flex-col items-center bg-white font-poppins my-3
      md:flex-row md:h-5/6 md:my-8">
        <div class="description shadow-vertical h-full z-10 px-5
        md:w-5/12 md:flex md:flex-col md:justify-center">
          <h2 class="text-2xl font-light">{{ posts[position].category }}</h2>
          <h1 class="text-5xl my-6 font-bold">{{ posts[position].title }}</h1>
          <p class="text-lg tracking-wider w-auto text-gray-400 leading-relaxed mb-10 max-w-prose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus quibusdam
            repellatrepellendus itaque maxime, eveniet accusantium fugiat quis nisi quo et
          </p>
          <a href="#" class="bg-black hover:bg-yellow-400 text-white py-3 px-5 w-max">
            Read More
          </a>
        </div>
        <div class="carousel flex justify-center w-1/2 items-center
        md:h-full md:w-7/12 md:px-5">
          <button class="bg-black p-2 h-10 w-10 rounded-full text-white border-2
          hover:text-black hover:bg-white hover:border-slate-400"
          @click="prev(position)">
            <Icon icon="akar-icons:arrow-left" class="text-xl" />
          </button>
          <div class="picture bg-black mx-3 w-3/4 h-full">
            <img :src="posts[position].imagePath"
            alt="{{ posts[position].title }}"
            class="w-full h-full object-cover">
          </div>
          <button class="bg-black p-2 h-10 w-10 rounded-full text-white border-2
          hover:text-black hover:bg-white hover:border-slate-400"
          @click="next(position)">
            <Icon icon="akar-icons:arrow-right" class="text-xl" />
          </button>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'Posting',
  components: {
    Icon,
  },
  data() {
    return {
      cards: [1, 2, 3, 4, 5],
      posts: [{
        title: 'How are you night?',
        category: '00:00 AM',
        imagePath: 'https://images.unsplash.com/photo-1527842891421-42eec6e703ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      }, {
        title: 'Who am i?',
        category: '07:00 AM',
        imagePath: 'https://images.unsplash.com/photo-1514735427526-92956d5e0110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      }, {
        title: "i'am home",
        category: '06:00 PM',
        imagePath: 'https://images.unsplash.com/photo-1636347857128-074251303118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      }],
      position: 0,
    };
  },
  methods: {
    next(data) {
      this.position = (data === this.posts.length - 1) ? 0 : data + 1;
    },
    prev(data) {
      this.position = (data === 0) ? this.posts.length - 1 : data - 1;
    },
  },
};
</script>
