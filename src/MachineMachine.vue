<template>
    <div>
        <h1>{{ name }}</h1>
        <h2 :class="{green : status , red : !status }">Status {{afficheStatus}}</h2>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                name: 'What else ?',
                status: false,
                checkedAt: new Date()
            }
            },

       computed : {

                afficheStatus(){
                    if (this.status === true){
                        return "Okey sur Glace";
                    } else {
                        return "Ko 1er Round";
                    }

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
</style>