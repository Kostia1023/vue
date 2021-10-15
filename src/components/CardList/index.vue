<template>
  <div class="flexCenter">
    <div>Фільтрація</div>
    <div><input type="number" v-model.number="searchInput"></div>
    <person-card
      v-for="card in listCard"
      :key="card.id"
      :card="card"
    />
  </div>
</template>

<script>
import PersonCard from "@/components/PersonCard";
import { mapGetters } from "vuex";
export default {
  name: "CardList",
  data() {
      return {
          searchInput: null,
          selected:null
      }
  },
  components: {
    PersonCard,
  },

  computed: {
    ...mapGetters(["getPersonCardList"]),
    listCard(){
        if(this.searchInput == null){
            return this.getPersonCardList 
        }
        return this.getPersonCardList.filter((card)=>{
            return card.houseNumber.toString().toUpperCase().includes(this.searchInput) 
        })
    }
  },
};
</script>

<style lang="css" scoped>
.flexCenter {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>