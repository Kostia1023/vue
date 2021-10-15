<template>
    <div class="card">
        <div>
        <label>
            Номер будинку: {{card.houseNumber}}
        </label>
        </div>
        <div>
        <label>
            Кількість газет, що виписується: {{card.listNewspaper.length}}
        </label>
        </div>
        <ol>
            <li v-for="(Newspaper,id) in card.listNewspaper" :key="id">
                {{Newspaper}}
            </li>
        </ol>
        <button @click="onClick">Видалити</button>
    </div>
</template>

<script>
import {mapActions} from "vuex"
    export default {
        name:"PersonCard",
        props: {
            card:{
                type: Object,
                default: ()=>({})
            }
        },
        methods: {
            ...mapActions(["removePersonCard"]),
            onClick() {
                this.removePersonCard(this.card)
            }
        },
    }
</script>

<style lang="css" scoped>
.card{
    width: 200px;
    border: 2px solid black;
    border-radius: 4px;
    margin: 10px;
    text-align: center;

}



</style>