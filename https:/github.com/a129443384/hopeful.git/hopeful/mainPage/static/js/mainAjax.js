$(document).ready(function() {
	//move from main.html
  $(document).on('click', '.getContainer', function() {
    var url = $(this).attr('href');
    var state = {title : 'main' , url1 : url};
  	history.pushState(state, 'main', '/');
    $('#section').load(url);
    return false;
  }); 
  
  $(document).on('click', '.forget', function() {
    var url = $(this).attr('href');
    var state = {title : 'main' , url1 : url};
  	history.pushState(state, 'main', '/');
    $('#loginForm').load(url);
    return false;
  });
  
  //post
  $(document).on('click', '.postContent', function(){
    $(this).ajaxForm(function(returnData) {
      $('#section').html(returnData);
      return false;
    });
  });
  
  //首頁管理post、課程管理post class name = 'adminPostContainer'
  
  
  //adminCourse
  //Get Container
  $(document).on('click', '.adminGetContainer', function(){
    var url = $(this).attr('href');
    var state = {title : 'main' , url1 : url};
	history.pushState(state, 'main', '/');
 	$('#container').load(url);
 	return false;
  });
  
  //searchForm
  $(document).on('click', '#search', function(){
    $(this).ajaxForm ({ 
      success: function(returnData) {
        $('#searchForm').html(returnData);
          return false;
      }
    });
  });
  
  //POST 含進度條
  $(document).on('click', '#adminPostContainerWithBar', function(){
    $(this).ajaxForm ({ 
	  beforeSend: function() 
	  {
	    $('#progress').show();
	    //clear everything
	    $('#bar').width('0%');
	    $('#message').html('');
	    $('#percent').html('0%');
	  },
	  uploadProgress: function(event, position, total, percentComplete) 
	  {
   	    $('#bar').width(percentComplete+'%');
   	    $('#percent').html(percentComplete+'%');
	  },
      success: function(returnData) {
        $('#bar').width('100%');
        $('#percent').html('100%');
        $('#container').html(returnData);
        return false;
      }
    });
  });
  
  //POST Container
  $(document).on('click', '#adminPostContainer', function(){
  $(this).ajaxForm ({ 
	success: function(returnData) {
      $('#container').html(returnData);
	    return false;
	  }
    });
  });
  
  //POST adminCourseSurvey
  $(document).on('click', '#adminCourseSurveySearch', function(){
    $(this).ajaxForm ({ 
	  success: function(returnData) {
	    var startDate = $('#startDate').val();
	    var endDate = $('#endDate').val();
	    if(startDate > endDate){
	      alert('注意開始時間不能晚於結束時間！');
	      return false;
  	    } 	
	    $('#container').html(returnData);
  	    return false;
  	  }  
    });
  });
  
  //POST adminCourseUnit
  $(document).on('click', '#adminCourseAddUnit', function(){
    $(this).ajaxForm ({ 
      beforeSubmit: function () {
        if($('input:checked').length==0){
          alert('錯誤，課程類別至少選擇一項！');
          return false;
        }
      },
      success: function(returnData) {
        $('#container').html(returnData);
        return false;
      }
    });
  });
  
  //POST courseShow courseDiscussion
  $(document).on('click', '.courseDiscussion', function(){
    $(this).ajaxForm ({ 
      success: function(returnData) {
        var url = $(this).attr('href');
        var state = {title:'main', url1:url};
        history.pushState(state, 'showcourse', '/');
        $('#speech').val('');
        $('#exchange').html(returnData);
        return false;
      }
    });
  });
  
  //POST courseSurvey
  $(document).on('click', '#addCourseSurvey', function(){
    $(this).ajaxForm ({ 
      success: function(returnData) {
        $('#addCourseSurvey').html('已評分')
        return false;
      }
    });
  });
  
  //POST adminAnnouncementAdd
  $(document).on('click', '#addAnnouncement', function(){
	$(this).ajaxForm ({ 
	  success: function(returnData){
   	    var startDate = $('#startDate').val();
        var endDate = $('#endDate').val();
        if(startDate > endDate){
          alert('注意開始時間不能晚於結束時間！');
          return false;
        }    
        $('#section').html(returnData);
          return false;
      }
	});
  });
    
  //POST adminAnnouncementModify
  $(document).on('click', '#modifyAnnouncement', function(){
    $(this).ajaxForm ({
      success: function(returnData){
        var startDate = $('#startDate').val();
        var endDate = $('#endDate').val();
        if(startDate > endDate){
          alert('注意開始時間不能晚於結束時間！');
          return false;
        }      	
	    $('#section').html(returnData);
	    return false;
      }
    }); 
  });
  
  //POST adminMemberAdd

  // check for unwanted characters
  $.validator.addMethod('validChars', function (value) {
    var result = true;
    // unwanted characters
    var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
    for (var i = 0; i < value.length; i++) {
      if (iChars.indexOf(value.charAt(i)) != -1) {
        return false;
      }
    }
    return result;
  }, '');

  // check for space
  $.validator.addMethod('noSpace', function (value) {
    return value.indexOf(" ") < 0;
  }, '');
  
  
  // Check if account exists
  $.validator.addMethod('checkAccount', function(account) {
    $.ajax({
      cache:false,
      async:false,
      type: "GET",
      data: "account=" + account,
      url: "/registration?arg1=checkAccount",
      success: function(msg) {
        result = (msg=='FALSE') ? true : false;
      }
    });
    return result;
  }, '');

  // Check if account contains letters and numbers
  $.validator.addMethod('alphaNumeric', function(account) {
    if (/^[a-z0-9]+$/i.test(account))
      return true;
    return false;
  }, '');
  
  // Check if email exists
  $.validator.addMethod('checkEmail', function(email) {
    $.ajax({
      cache:false,
      async:false,
      type: "GET",
      data: "email=" + email,
      url: "/registration?arg1=checkEmail",
      success: function(msg) {
        result = (msg=='FALSE') ? true : false;
      }
    });
    return result;
  }, '');
  
  //adminMessageManage  
  $(document).on('click', '#selectForm', function(){
    $(this).ajaxForm({ 
      success: function(returnData){
        var startDate = $('#startDate').val();
        var endDate = $('#endDate').val();
        if(startDate > endDate){
          alert('注意開始時間不能晚於結束時間！');
          return false;
        }     
        $('#section').html(returnData);
        return false;
      }
    });
  });
  
  $(document).on('click', '#cleanMessagesButton', function() {
    e.preventDefault();
	  if (confirm('確定刪除資料?')){
        $('#cleanMessages').ajaxSubmit({
	      success: function(returnData){
	        $('#section').html(returnData);
	        return false;
	        }
	    });
	  }
  });
  
  //adminPurchase
  $(document).on('click', '#searchPurchase', function(){
    $(this).ajaxForm({ 
	  success: function(returnData){
	    var startDate = $('#startDate').val();
		var endDate = $('#endDate').val();
		if(startDate > endDate){
		  alert('注意開始時間不能晚於結束時間！');
		  return false;
		} 	
	    $('#section').html(returnData);
	      return false;
	  }
	});
  });
  
  //POST adminTeacherAdd 進度條
  $(document).on('click', '.addTeacherForm', function(){
    $(this).ajaxForm({ 
	  beforeSend: function(){
	    $('#progress').show();
	    //clear everything
	    $('#bar').width('0%');
	    $('#message').html('');
	    $('#percent').html('0%');
	  },
	  uploadProgress: function(event, position, total, percentComplete){
   	    $('#bar').width(percentComplete+'%');
   	    $('#percent').html(percentComplete+'%');
	  },
      success: function(returnData){
        $('#bar').width('100%');
        $('#percent').html('100%');
        $('#section').html(returnData);
        return false;
      }
    });
  });
  
  $(document).on('click', '#add', function(){
    $(this).ajaxForm({ 
      beforeSubmit: function(){
        $('#add').attr('action', ''); //防止連點
        return;
      },
      success: function(returnData){
        $('#section').html(returnData);
        return false;
      }
    });
  });
  

  
  //messageShowMore
  $(document).on('click', 'a.more', function(e) {
    var url = $(this).attr('href');
    $('.{{messageResponseMore}}').load(url);
    return false;
  });

  //messageShow
  $(document).on('click', 'a.noProblem', function() {
    if (confirm('確定是沒問題的嗎?')){
	  var url = $(this).attr('href');
	    $('#section').load(url);
	    return false;
	}
	return false;
  });
  
  $(document).on('click', 'a.memberGag', function() {
    if (confirm('是否將會員禁言並刪除文章?')){
	  var url = $(this).attr('href');
	    $('#section').load(url);
	}
	return false;
  });
  
  if (!$('#moreform').attr('class')){
	$('#moreform').attr('class','{{ messageResponseMore }}');
  }
  
  //mainPage 
  $(document).on('click', '.mains', function(e) {
    var url = $(this).attr('href');
    var state = {title : 'main' , url1 : url};
	history.pushState(state, 'main', '/');
    $('#mainVideoDiv').load(url);
    return false;
  });
  //BeforeLogin
  $(document).on('click', '.getfullpage', function(e) {
    var url = $(this).attr('href');
    var state = {title : 'main' , url1 : url};
	history.pushState(state, 'main', '/');
    $('#contentBefore').load(url);
    return false;
  });
});