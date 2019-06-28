<template>
  <div class="websocket">
    <div class="list">
      <ItemList :id="item.id" :key="item.id"
                @remove="removeItem" v-for="item in list">{{item.value}}</ItemList>
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
      removesList: {},
    };
  },
  mounted() {
    this.socket.onmessage = event => this.findAndKill(event.data);
  },
  methods: {
    socketSend(val, id) {
      this.removesList[val] = id;
      this.socket.send(val);
    },
    removeItem(id) {
      this.socketSend(this.counter, id);
      this.counter += 1;
    },
    findAndKill(counter) {
      const id = this.removesList[counter];

      this.list = this.list.filter(item => item.id !== id);
    },
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
