$(document).ready(function() {
    $("#MyForm").validate({
    rules: {
    'first_name': {
    required: true,
    minlength: 2
    },
    'last_name': {
    required: true,
    minlength: 2
    },
	
	

    country: {
        required: true
    },

     industry :{
    required: true
   
    },

    // checkIfo: {
    //   required: true
    // },
    'email':{
    required: true,
    },
    'job_title':{
    required: true,
    },
	
	'job_role' : {
		required : true,
	},
	
	
    'revenue':{
    required: true,
        },
		
		
    'state':{
    required: true,
    },
	
	
  
    },
    messages: {
    'first_name': "<p style='color:#00DF9A; font-size:15px;padding-top:10px;'>Please Enter  First Name</p>",
    'last_name': "<p style='color:#00DF9A; font-size:15px;padding-top:10px;'>Please Enter Last Name</p>",
    country: {
        required: '<p style="color:#00DF9A; font-size:15px;padding-top:10px;">Please Select  Coutry</p>'
    },
    
    industry: {
        required: '<p style="color:#00DF9A; font-size:15px;padding-top:10px;">Please Select  Industry'
    },
	
	
    'email': "<p style='color:#00DF9A; font-size:15px;padding-top:10px;'>Please Enter Email</p>",
    'job_title': "<p style='color:#00DF9A; font-size:15px;padding-top:10px;'>Please Enter Job Title</p>",
	
	job_role: {
        required: '<p style="color:#00DF9A; font-size:15px;padding-top:10px;">Please Select  Job role'
    },
    revenue  : { 
	required : "<p style='color:#00DF9A; font-size:15px;padding-top:10px;'>Please Enter Revenue</p>"},
	
	 state  : { 
	 required : "<p style='color:#00DF9A; font-size:15px;padding-top:10px;'>Please Select State</p>"
	 },
    //'mobile' : "<p style='color:#00DF9A; font-size:15px;padding-top:10px;'>Please Enter Mobile No </p>",
    // checkIfo : { required : "<p style='color:#00DF9A; font-size:15px;'>**Please checked the box.. </p>"},



    }
    });
    });
