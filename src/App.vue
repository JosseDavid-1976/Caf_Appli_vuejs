<template>
    <div id="app">
        <img src="src/images/david_monkon.jpg">
        <h1>{{ titre }}</h1>
        <h1>{{yourchoice}}</h1>
        <button @click="onMachinesListClick">Consulter la liste des machines</button>
        <button @click="onMapClick">Voir la carte</button>
        <!--<ListeMachine></ListeMachine>-->
        <!--<MachinesMap></MachinesMap>-->

        <div>
            <router-link to="/list">Consulter la liste des machines</router-link>
            <router-link to="/map">Voir la carte</router-link>


            <router-view></router-view>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data() {
            return {
                titre: "Un p'tit caf dans ta gueule vuejs",
                yourchoice: 'Que voulez vous faire ?'
            }
        },
        methods: {
            onMachinesListClick() {
                window.alert("Pif Paf ");
            },
            onMapClick() {
                window.alert("Pouf Paf Pif ");
            }
        },
        // components: {
        //        'ListeMachine': MachinesList,
        //         'MachinesMap': MachinesMap
        // }


    }
</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    img {
        width: 200px;
        height: 200px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
