<template>

</template>

<script>
    export default {
        name: "customer-create-or-edit",
        data: function () {
            return {
                hasEmail: true,
                birthYear: null,
                calculatedAge: null
            }
        },
        watch: {
            birthYear: function() {
                if(this.birthYear.toString().length === 4) {
                    this.calculatedAge = new Date().getFullYear() - this.birthYear;
                }
                else
                    this.calculatedAge = null;
            } 
        }
    }
</script>

<style scoped>

</style>

