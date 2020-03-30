"use strict";

window.addEventListener("DOMContentLoaded", function () {
	setTimeout(function () {
		var leftCoinList = coinPush("coin_left");
		var rightCoinList = coinPush("coin_right");
		window.addEventListener("scroll", function () {
			// 코인클래스제거 해야 움직임
			removeClass("coin_left", "active");
			removeClass("coin_right", "active");

			// 코인움직이기
			coinMove("coin_left", leftCoinList);
			coinMove("coin_right", rightCoinList);
			
			// 네온사인
			flicker();
		});
	}, 250);

	/* 코인 배열넣기 */
	function coinPush(classname) {
		var coinBox = document.querySelector(".".concat(classname));
		var coinList = coinBox.querySelectorAll("img");
		var coinArr = [];

		for (var i = 0, len = coinList.length; i < len; i++) {
			coinArr.push(coinList[i].offsetTop);
		}

		return coinArr;
	}

	/* 코인 움직이기 */
	function coinMove(classname, li) {
		var coinBox = document.querySelector(".".concat(classname));
		var coinList = coinBox.querySelectorAll("img");
		var value = window.scrollY;

		for (var i = 0, len = coinList.length; i < len; i++) {
			coinList[i].style.top = li[i] - value / (4 - i) + "px";
		}
	}
	
	/* remove class */
	function removeClass(targetClass, removeClass) {
		var target = document.querySelector(".".concat(targetClass));
		target.classList.remove(removeClass);
	}

	function flicker() {
		var momT = document.querySelector(".event_title").offsetTop;

		if (momT < window.scrollY) {
			document.querySelector(".share").classList.add("flicker");
			document.querySelector(".share").classList.add("on");
		} else if (momT > window.scrollY) {
			document.querySelector(".share").classList.remove("flicker");
		}
	}
});