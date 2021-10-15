<template>
  <div class="flexCenter ">
      <div class="border"> 
      <div>
        <label>
          House Number
          <input type="number" v-model.number="houseNumber" />
        </label>
      </div>
      <div>
        <label>
          List Newspaper
          <input type="text" v-model="listNewspaper" />
        </label>
      </div>
      <button @click="onAdd">Add</button>
  </div></div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddPersonCard",

  data() {
    return {
      houseNumber: null,
      listNewspaper: null,
    };
  },

  methods: {
    ...mapActions(["addPersonCard"]),
    onAdd() {
      this.addPersonCard({
        houseNumber: this.houseNumber,
        listNewspaper: this.listNewspaper.split(","),
      });
    },
  },
};
</script>

<style lang="css" scoped>
.flexCenter {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.border{
        width: 200px;
    border: 2px solid black;
    border-radius: 4px;
    margin: 10px;
    text-align: center;

} 
</style>