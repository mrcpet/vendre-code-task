<template>
    <div class="employee-list">
        <h1>Employees</h1>
        <ul>
            <EmployeeCard v-for="employee in employees" :key="employee.id" :employee="employee" />
        </ul>
    </div>
</template>

<script>
import axios from "axios"
import EmployeeCard from "./EmployeeCard.vue"

export default {
    name: "EmployeeList",
    props: {
        url: String, 
    },
    components: {
        EmployeeCard
    },
    data() {
        return {
            employees: []
        }
    },
    created() {
        this.getEmployees();
    },
    methods: {
        async getEmployees() {
            try {
                const response = await axios.get(this.url)
                this.employees = response.data.data
            } catch (error) {
                console.log(error.message)
            }
        }
    }
}
</script>

<style scoped>
h1 {
    margin: 2.5rem 0;
    border-bottom: 1px solid #eee;
    display: inline-block;
}

ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

a {
    color: #42b983;
}
</style>