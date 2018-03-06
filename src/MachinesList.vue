<template>
    <div>
        <h1>Liste Des Machine Du monde du Café</h1>
        <ul>
            <listemachine v-for="machine in machines"
                          :key="machine.id"
                          v-bind:machine="machine">

            </listemachine>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // name: "MachinesList",

                machines:
                    [{
                        id: 1,
                        name: 'What else ?',
                        status: true,
                        checkedAt: new Date(),
                    },
                        {
                            id: 2,
                            name: 'Broken',
                            status: false,
                            checkedAt: new Date(),
                        }]
            }
        },
    }
</script>

<style scoped>

</style>