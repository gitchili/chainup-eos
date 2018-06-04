<template>
   <!-- theme change = dark or light etc -->
  <v-app dark>
    <!-- static content  nav, footer, tool bar same for all pages = none dynamic-->
<v-toolbar>
  <v-toolbar-title>MeetUP.EOS</v-toolbar-title>
  <!-- v-spacer v-toolbar uses flexblox-->
  <v-spacer></v-spacer>
  <v-toolbar-items>
    <v-btn>View meetups</v-btn>
  </v-toolbar-items>
</v-toolbar>
    <!-- dynamic content to be displayed lives in a html elemnt named main-->
    <main>
      
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  name: 'App'
}
</script>
