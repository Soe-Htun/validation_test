<template>
  <div class="about">
    <el-form class="name" :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item  label="Gmail:" prop="name">
        <el-input v-model="ruleForm.name" placeholder="Enter gmail address"></el-input>
      </el-form-item>
      <el-form-item label="Password:" prop="password">
        <el-input v-model="ruleForm.password" placeholder="Enter gmail address"></el-input>
      </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name:'login',
  data(){
    return{
      ruleForm:{
        name:'',
        password:''
      },
      rules:{
        name:[{
          required:'true',
          message:"Please enter message"
        }],
        password:[{
          required:'true',
          message:"Please enter password"
        }]
      }
    }
  },
  methods: {
    submitForm(formName){
      if(this.$refs[formName].validate(() =>{
        if( this.ruleForm.name==='soe' && this.ruleForm.password==="soe123"){
          this.$router.replace({name:"home"})
        }
        else{
          console.log("Incorrect email or password");
        }
      }));
    }
  },
}
</script>

<style scoped>
.name{
  width: 200px;
  position: relative;
  top: 50%;
  left: 50%;
  margin: 250px 0px 0px 0px;
}
.name .el-button{
  float: left;
}
</style>