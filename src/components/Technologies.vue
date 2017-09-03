<template>
<div>
<h1> Technologies </h1>
<mu-row gutter>
    <mu-col width="100" tablet="50" desktop="33">
      <mu-card >
  <mu-card-media title="Python" >
    <img src="../assets/python-logo.jpg" />
  </mu-card-media>
 
  <mu-card-actions>
   
    <mu-flat-button label="Repositories" to="/technologies/python" />
  </mu-card-actions>  
</mu-card>

    </mu-col>
   <mu-col width="100" tablet="50" desktop="33">
      <mu-card>
  
  <mu-card-media title="Java">
    <img src="../assets/java-logo.jpg" />
  </mu-card-media>
  
  <mu-card-actions>
   
    <mu-flat-button label="Repositories" to="/technologies/java" />
  </mu-card-actions>
</mu-card>

    </mu-col>
    <mu-col width="100" tablet="50" desktop="33">
      <mu-card>
  
  <mu-card-media title="Javascript">
    <img src="../assets/javascript-logo.png" width="200px" height="250px"/>
  </mu-card-media>

  <mu-card-actions>
    <mu-flat-button label="Repositories" to="/technologies/javascript" />
  </mu-card-actions>
</mu-card>

    </mu-col>
   
   </mu-row>
</div>
</template>

<script>
  export default {
    name: 'Technologies'
  }
</script>
