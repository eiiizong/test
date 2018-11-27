var MyValidator = function() {
	var handleSubmit = function() {
		$('.form-box').validate({
			errorElement: 'span',
			errorClass: 'help-block',
			focusInvalid: false,
			rules: {
				email: {
					required: true
				},
				password1: {
					required: true
				},
				password2: {
					required: true
				},
				code: {
					required: true
				},
				phoneNumber: {
					required: true
				},
				check: {
					required: true
				}
			},
			messages: {
				email: {
					required: "邮箱不能为空！"
				},
				password1: {
					required: "密码不能为空！"
				},
				password2: {
					required: "密码不能为空！"
				},
				code: {
					required: "验证码不能为空！"
				},
				phoneNumber: {
					required: "手机号不能为空！"
				}
			},
			highlight: function(element) {
				$(element).closest('.form-group').addClass('has-error');
			},
			success: function(label) {
				label.closest('.form-group').removeClass('has-error');
				label.remove();
			},
			errorPlacement: function(error, element) {
				element.parent('div').append(error);
			},
			submitHandler: function(form) {
				form.submit();
			}
		});
		$('.form-horizontal input').keypress(function(e) {
			if (e.which == 13) {
				if ($('.form-horizontal').validate().form()) {
					$('.form-horizontal').submit();
				}
				return false;
			}
		});
	}
	return {
		init: function() {
			handleSubmit();
		}
	};
}();
