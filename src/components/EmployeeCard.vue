<template>
    <li class="employee-card">
        <img :src="employee.avatar" alt="profile picture" class="employee-avatar" ref="avatar">
        <h2>{{ fullName }}</h2>
        <a :href="'mailto:' + employee.email"><i class="fas fa-envelope"></i>Contact</a>
    </li>
</template>

<script>
export default {
    name: "EmployeeCard",
    props: {
        employee: {
            type: Object,
            required: true
        }
    },
    computed: {
        fullName() {
            return `${this.employee.first_name} ${this.employee.last_name}`
        }
    },
    mounted() {
        this.checkAvatar();
    },
    methods: {
        checkAvatar() {
            const avatar = this.$refs.avatar;
            const width = 126;
            const height = 128;
            if (avatar.width != width || avatar.height != height) {
                avatar.width = width
                avatar.height = height
            }
        }
        /* i added this function because the avatars were inconsistent, 
        i hard coded the dimensions in css first but decided to do this instead, 
        since most avatars were fine, ideally i wouldve changed the picture */
    }
}
</script>

<style>
.employee-card {
    padding: 1rem;
    color: rgb(83, 51, 237);
}

h2 {
    font-size: 1.125rem;
    font-weight: normal;
}

.employee-avatar {
    border-radius: 50%;
    border: 2px solid transparent;
    transition: border-color 0.2s ease;
}

.employee-avatar:hover {
    border: 2px solid rgb(83, 51, 237);
}

a {
    font-weight: bold;
    color: #42b983;
    text-decoration: none;
    cursor: pointer;
}
.fas {
    margin-right: 0.25rem;
}
</style>