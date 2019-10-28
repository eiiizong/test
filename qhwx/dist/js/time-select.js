$(function() {
  // 类型 1 为开始日期选定 2为结束日期选定
  var type = 1;
  // 日期选择 DOM
  var time_select = $("#time_select");
  // 点击弹出日期选择的按钮 DOM
  var time_select_btn = $("#time_select_btn");
  // 确定按钮 DOM
  var ok_btn = $("#ok_btn");
  // 年份 DOM
  var yearhtml = $("#year");

  //   月份选择按钮 集合
  var month_btns = $("#months .btn");
  //   开始日期输入框
  var start_time_input = $("#start_time");
  //   结束日期输入框
  var end_time_input = $("#end_time");
  //   月份点击向左箭头
  var reduce_year_btn = $("#reduce_year_btn");
  //   月份点击向右箭头
  var add_year_btn = $("#add_year_btn");

  var start_time = "";
  var end_time = "";
  // 根据当前时间获取当前年月值
  var nowTime = new Date();
  var year = nowTime.getFullYear();
  var month = nowTime.getMonth() + 1;
  // 设置最大和最小年限
  var maxYear = year;
  var minYear = 2000;
  // 开始年月
  var start_year = year - 1;
  var start_month = month;
  // 结束年月
  var end_year = year;
  var end_month = month;
  // 今年最大月份
  var nowMaxMonth = month;
  var btntype = 0;
  // 默认选中为一年时间
  year = year - 1;
  // 选择设置开始日期
  start_time_input.on("click", function() {
    type = 1;
    inputActive();
    year = start_year;
    month = start_month;
    setBtnActive(parseInt(month));
    yearhtml.html(year);
    setInputValue();
    check();
  });
  // 选择设置结束日期 点击事件
  end_time_input.on("click", function() {
    type = 2;
    inputActive();
    year = end_year;
    month = end_month;
    yearhtml.html(year);
    check();
    setBtnActive(parseInt(month));
    setInputValue();
  });
  // input 输入框样式聚焦
  function inputActive() {
    if (type === 1) {
      end_time_input.removeClass("active");
      start_time_input.addClass("active");
    } else {
      start_time_input.removeClass("active");
      end_time_input.addClass("active");
    }
  }

  // 时间选择按钮
  time_select_btn.on("click", function() {
    time_select.show();
  });
  // 确定按钮
  ok_btn.on("click", function() {
    time_select.hide();
    // console.log("start_time:" + start_time);
    // console.log("end_time:" + end_time);
  });
  // 年份点击加
  function add() {
    clearMonthBtnDisaled();
    btntype = 2;
    if (year < maxYear) {
      year++;
      yearhtml.html(year);
      inputValueChange(year, month);
      setInputYearValue(year);
      // console.log(year);
      check();
    }
  }
  // 年份点击减
  function reduce() {
    clearMonthBtnDisaled();
    btntype = 1;
    if (year > minYear) {
      year = year - 1;
      yearhtml.html(year);
      setInputYearValue(year);
      // console.log(year);
      inputValueChange(year, month);
      check();
    }
  }
  // 设置月份按钮高亮
  function setBtnActive(index) {
    for (var i = 0; i < 12; i++) {
      $(month_btns[i]).removeClass("active");
    }
    $(month_btns[index - 1]).addClass("active");
  }

  function inputValueChange(year, month) {
    setInputYearValue(year);
    setInputMonthValue(month);
    setInputValue();
  }
  function setMonthBtnDisaledBefore(index) {
    for (var i = 0; i < index - 1; i++) {
      var item = $(month_btns[i]);
      item.attr("disabled", true);
    }
  }
  function setMonthBtnDisaled(i) {
    for (i; i < 12; i++) {
      var item = $(month_btns[i]);
      item.attr("disabled", true);
    }
  }
  function clearMonthBtnDisaled() {
    if (year < maxYear) {
      for (var i = 0; i < 12; i++) {
        var item = $(month_btns[i]);
        item.removeAttr("disabled", false);
      }
    }
  }
  function setInputMonthValue(value) {
    if (type === 1) {
      start_month = value;
    } else {
      end_month = value;
    }
  }
  function setInputYearValue(value) {
    if (type === 1) {
      start_year = value;
    } else {
      end_year = value;
    }
  }
  function setInputValue() {
    // console.log("正在设置开始日期和结束日期。。。");
    // console.log("start", start_year, start_month);
    // console.log("end", end_year, end_month);
    start_time_input.html(start_year + "." + start_month);
    end_time_input.html(end_year + "." + end_month);
  }
  /*
  1 检测当前年最大月份 所选年月不能超过当前年月最大值
  2 当前所选年份超出最大最小值 不能再点击
  */
  function check() {
    // 检测当前所选年份 所选年份不能超过当前年份
    // 最大年份所选月份不能超过该年最大月份 即不能选择未发生的月份
    if (year >= maxYear) {
      add_year_btn.attr("disabled", true);
      setMonthBtnDisaled(parseInt(nowMaxMonth));
    } else {
      add_year_btn.removeAttr("disabled");
      clearMonthBtnDisaled();
    }
    // 检测当前所选年份 所选年份不能小于最小设置年份
    if (year <= minYear) {
      reduce_year_btn.attr("disabled", true);
    } else {
      reduce_year_btn.removeAttr("disabled");
    }
    // 开始日期选择
    // 开始日期年份不能大于结束日期年份
    if (type === 1) {
      if (start_year >= end_year) {
        add_year_btn.attr("disabled", true);
        // 所选月份不能大于结束日期月份
        setMonthBtnDisaled(parseInt(end_month));
        // 如果大于结束日期月份则重新设置月份
        if (parseInt(start_month) >= parseInt(end_month)) {
          start_month = end_month;
          setInputValue();
          setBtnActive(parseInt(end_month));
        }
      } else {
        add_year_btn.removeAttr("disabled");
      }
    } else {
      // 结束年份不能小于开始年份
      if (end_year <= start_year) {
        reduce_year_btn.attr("disabled", true);
        setMonthBtnDisaledBefore(parseInt(start_month));
        if (parseInt(start_month) >= parseInt(end_month)) {
          end_month = start_month;
          setInputValue();
          setBtnActive(parseInt(end_month));
        }
      } else {
        reduce_year_btn.removeAttr("disabled");
      }
    }
  }
  // 初始化函数
  function init() {
    yearhtml.html(year);
    if (month < 10) {
      month = "0" + month;
    }
    add_year_btn.on("click", add);
    reduce_year_btn.on("click", reduce);
    setInputValue();
    $(month_btns[month - 1]).addClass("active");
    inputActive();
    check();
  }
  init();
  // 月份点击事件注册
  for (var i = 0; i < 12; i++) {
    var item = month_btns[i];
    item.onclick = function() {
      for (var j = 0; j < 12; j++) {
        $(month_btns[j]).removeClass("active");
      }
      $(this).addClass("active");
      var value = $(this).html();
      month = value;
      inputValueChange(year, month);
      check();
    };
  }
});
