<template>
  <main>
    <EmployeeList :url="'https://reqres.in/api/users'" />
  </main>
</template>

<script>
// @ is an alias to /src
import EmployeeList from '@/components/EmployeeList.vue'

export default {
  name: 'EmployeeView',
  components: {
    EmployeeList,
  }
}
</script>
