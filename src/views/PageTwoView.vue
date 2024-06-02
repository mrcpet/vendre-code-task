<template>
  <main>
    <EmployeeList :url="'https://reqres.in/api/users?page=2'" />
</main>
</template>

<script>
// @ is an alias to /src
import EmployeeList from '@/components/EmployeeList.vue'

export default {
  name: 'PageTwoView',
  components: {
    EmployeeList,
  }
}
</script>
