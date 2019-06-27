<template>
    <div class="item-list">
      <slot></slot>
      <button @click="removeSelf" class="remove-btn">Удалить</button>
    </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    id: { type: Number, required: true },
  },
  methods: {
    removeSelf() {
      this.$emit('remove', this.id);
    },
  },
};
</script>

<style scoped lang="scss">
.item-list{
  display: flex;
  margin-bottom: 10px;
  .remove-btn{
    margin-left: 10px;
  }
}
</style>
