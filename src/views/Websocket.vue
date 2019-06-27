<template>
  <div class="websocket">
    <div class="list">
      <ItemList @remove="removeItem" v-for="item in list" :key="item.id" :id="item.id">{{item.value}}</ItemList>
    </div>
  </div>
</template>

<script>
import ItemList from '@/components/ItemList.vue';

export default {
  name: 'Websocket',
  data() {
    return {
      socket: new WebSocket('ws://echo.websocket.org'),
      counter: 1,
      list: [
        { value: 'Геральт', id: 1 },
        { value: 'Лютик', id: 2 },
        { value: 'Цири', id: 3 },
        { value: 'Йенифер', id: 4 },
        { value: 'Трисс', id: 5 },
        { value: 'Золтан', id: 6 },
        { value: 'Весемир', id: 7 },
        { value: 'Ламберт', id: 8 },
        { value: 'Эскель', id: 9 },
        { value: 'Плотва', id: 10 },
      ],
    };
  },
  mounted() {
    // this.socketSend(1);
    // this.socketSend(2);
    // this.socketSend(3);
    // this.socketSend(4);
  },
  methods: {
    socketSend(val, id) {
      this.socket.send(val);
      return new Promise((resolve, reject) => {
        this.socket.addEventListener('message', (event) => {
          resolve(id);
          // console.log('Message from server ', event.data);
        });
      });
    },
    removeItem(id) {
      this.socketSend(this.counter, id).then(id => this.findAndKill(id));
      this.counter += 1;
    },
    findAndKill(id){
      const index = this.list.findIndex(item => item.id === id);
      this.list.splice(index, 1);
    }
  },
  components: {
    ItemList,
  },
};
</script>

<style scoped lang="scss">
.websocket{
  display: flex;
  .list {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
