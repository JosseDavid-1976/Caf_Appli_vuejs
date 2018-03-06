<template>
    <div class="encadrement">
        <h1>{{ machine.name }}</h1>
        <h4>{{ machine.id }}</h4>
        <h3 :class="{green : machine.status , red : !machine.status }">Status {{afficheStatus}}</h3>
        <h5>Last time Checked : {{afficheTime}} </h5>
    </div>
</template>

<script>
    export default {
       props:["machine"],
        // data() {
        //     return {
        //         name: this.machine.name,
        //         id: this.machine.id,
        //         status: this.machine.status,
        //         checkedAt: this.machine.checkedAt,
        //
        //     }
        //     },

       computed : {

                afficheStatus(){
                    if (this.machine.status === true){
                        return "Okey sur Glace";
                    } else {
                        return "Ko 1er Round";
                    }

                },
           afficheTime(){
                  return this.machine.checkedAt.toLocaleString();

           }

            }

    }
</script>

<style scoped>
.red{
    color: red;
}
.green{
        color:green;
    }
    .encadrement{
        border: 2px solid black;
        margin: 10px;
    }
</style>