
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7fe38B1qZhMC6RF7uUQyFBK', 'player');
// script/player.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    jumpHeight: 0,
    jumpDuration: 0,
    MaxMoveSpeed: 0,
    accel: 0
  },
  setJumpAction: function setJumpAction() {
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionOut());
    return cc.repeatForever(cc.sequence(jumpUp, jumpDown));
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    // unset a flag when key released
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  update: function update(dt) {
    // 根据当前加速度方向每帧更新速度
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } // 限制主角的速度不能超过最大值


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      // if speed reach limit, use max speed with current direction
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    } // 根据当前速度更新主角的位置


    this.node.x += this.xSpeed * dt;
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.jumpAction = this.setJumpAction();
    this.node.runAction(this.jumpAction);
    this.accLeft = false;
    this.accRight = false;
    this.xSpeed = 0;
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    // 取消键盘输入监听
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxwbGF5ZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJqdW1wSGVpZ2h0IiwianVtcER1cmF0aW9uIiwiTWF4TW92ZVNwZWVkIiwiYWNjZWwiLCJzZXRKdW1wQWN0aW9uIiwianVtcFVwIiwibW92ZUJ5IiwidjIiLCJlYXNpbmciLCJlYXNlQ3ViaWNBY3Rpb25PdXQiLCJqdW1wRG93biIsInJlcGVhdEZvcmV2ZXIiLCJzZXF1ZW5jZSIsIm9uS2V5RG93biIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiYSIsImFjY0xlZnQiLCJkIiwiYWNjUmlnaHQiLCJvbktleVVwIiwidXBkYXRlIiwiZHQiLCJ4U3BlZWQiLCJNYXRoIiwiYWJzIiwibWF4TW92ZVNwZWVkIiwibm9kZSIsIngiLCJvbkxvYWQiLCJqdW1wQWN0aW9uIiwicnVuQWN0aW9uIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJLRVlfVVAiLCJvbkRlc3Ryb3kiLCJvZmYiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLElBQUFBLFVBQVUsRUFBQyxDQWhCSDtBQWlCUkMsSUFBQUEsWUFBWSxFQUFDLENBakJMO0FBa0JSQyxJQUFBQSxZQUFZLEVBQUMsQ0FsQkw7QUFtQlJDLElBQUFBLEtBQUssRUFBQztBQW5CRSxHQUhQO0FBeUJMQyxFQUFBQSxhQUFhLEVBQUMseUJBQVU7QUFDcEIsUUFBSUMsTUFBTSxHQUFHVCxFQUFFLENBQUNVLE1BQUgsQ0FBVSxLQUFLTCxZQUFmLEVBQTZCTCxFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLEVBQVMsS0FBS1AsVUFBZCxDQUE3QixFQUF3RFEsTUFBeEQsQ0FBK0RaLEVBQUUsQ0FBQ2Esa0JBQUgsRUFBL0QsQ0FBYjtBQUNBLFFBQUlDLFFBQVEsR0FBR2QsRUFBRSxDQUFDVSxNQUFILENBQVUsS0FBS0wsWUFBZixFQUE2QkwsRUFBRSxDQUFDVyxFQUFILENBQU0sQ0FBTixFQUFTLENBQUMsS0FBS1AsVUFBZixDQUE3QixFQUF5RFEsTUFBekQsQ0FBZ0VaLEVBQUUsQ0FBQ2Esa0JBQUgsRUFBaEUsQ0FBZjtBQUNBLFdBQU9iLEVBQUUsQ0FBQ2UsYUFBSCxDQUFpQmYsRUFBRSxDQUFDZ0IsUUFBSCxDQUFZUCxNQUFaLEVBQW9CSyxRQUFwQixDQUFqQixDQUFQO0FBQ0gsR0E3Qkk7QUErQkxHLEVBQUFBLFNBL0JLLHFCQStCS0MsS0EvQkwsRUErQlc7QUFDWixZQUFPQSxLQUFLLENBQUNDLE9BQWI7QUFDSSxXQUFLbkIsRUFBRSxDQUFDb0IsS0FBSCxDQUFTQyxHQUFULENBQWFDLENBQWxCO0FBQ0ksYUFBS0MsT0FBTCxHQUFlLElBQWY7QUFDQTs7QUFDSixXQUFLdkIsRUFBRSxDQUFDb0IsS0FBSCxDQUFTQyxHQUFULENBQWFHLENBQWxCO0FBQ0ksYUFBS0MsUUFBTCxHQUFnQixJQUFoQjtBQUNBO0FBTlI7QUFRSCxHQXhDSTtBQXlDTEMsRUFBQUEsT0F6Q0ssbUJBeUNJUixLQXpDSixFQXlDVztBQUNaO0FBQ0EsWUFBT0EsS0FBSyxDQUFDQyxPQUFiO0FBQ0ksV0FBS25CLEVBQUUsQ0FBQ29CLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxDQUFsQjtBQUNJLGFBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0E7O0FBQ0osV0FBS3ZCLEVBQUUsQ0FBQ29CLEtBQUgsQ0FBU0MsR0FBVCxDQUFhRyxDQUFsQjtBQUNJLGFBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQTtBQU5SO0FBUUgsR0FuREk7QUFvRExFLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0FBQ2xCO0FBQ0EsUUFBSSxLQUFLTCxPQUFULEVBQWtCO0FBQ2QsV0FBS00sTUFBTCxJQUFlLEtBQUt0QixLQUFMLEdBQWFxQixFQUE1QjtBQUNILEtBRkQsTUFFTyxJQUFJLEtBQUtILFFBQVQsRUFBbUI7QUFDdEIsV0FBS0ksTUFBTCxJQUFlLEtBQUt0QixLQUFMLEdBQWFxQixFQUE1QjtBQUNILEtBTmlCLENBT2xCOzs7QUFDQSxRQUFLRSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLRixNQUFkLElBQXdCLEtBQUtHLFlBQWxDLEVBQWlEO0FBQzdDO0FBQ0EsV0FBS0gsTUFBTCxHQUFjLEtBQUtHLFlBQUwsR0FBb0IsS0FBS0gsTUFBekIsR0FBa0NDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtGLE1BQWQsQ0FBaEQ7QUFDSCxLQVhpQixDQWFsQjs7O0FBQ0EsU0FBS0ksSUFBTCxDQUFVQyxDQUFWLElBQWUsS0FBS0wsTUFBTCxHQUFjRCxFQUE3QjtBQUNILEdBbkVJO0FBcUVMO0FBRUFPLEVBQUFBLE1BQU0sRUFBRSxrQkFBVztBQUNmLFNBQUtDLFVBQUwsR0FBa0IsS0FBSzVCLGFBQUwsRUFBbEI7QUFDQSxTQUFLeUIsSUFBTCxDQUFVSSxTQUFWLENBQW9CLEtBQUtELFVBQXpCO0FBRUEsU0FBS2IsT0FBTCxHQUFlLEtBQWY7QUFDQSxTQUFLRSxRQUFMLEdBQWdCLEtBQWhCO0FBRUEsU0FBS0ksTUFBTCxHQUFjLENBQWQ7QUFFQTdCLElBQUFBLEVBQUUsQ0FBQ3NDLFdBQUgsQ0FBZUMsRUFBZixDQUFrQnZDLEVBQUUsQ0FBQ3dDLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBM0MsRUFBcUQsS0FBS3pCLFNBQTFELEVBQXFFLElBQXJFO0FBQ0FqQixJQUFBQSxFQUFFLENBQUNzQyxXQUFILENBQWVDLEVBQWYsQ0FBa0J2QyxFQUFFLENBQUN3QyxXQUFILENBQWVDLFNBQWYsQ0FBeUJFLE1BQTNDLEVBQW1ELEtBQUtqQixPQUF4RCxFQUFpRSxJQUFqRTtBQUNILEdBbEZJO0FBbUZMa0IsRUFBQUEsU0FuRkssdUJBbUZRO0FBQ1Q7QUFDQTVDLElBQUFBLEVBQUUsQ0FBQ3NDLFdBQUgsQ0FBZU8sR0FBZixDQUFtQjdDLEVBQUUsQ0FBQ3dDLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBNUMsRUFBc0QsS0FBS3pCLFNBQTNELEVBQXNFLElBQXRFO0FBQ0FqQixJQUFBQSxFQUFFLENBQUNzQyxXQUFILENBQWVPLEdBQWYsQ0FBbUI3QyxFQUFFLENBQUN3QyxXQUFILENBQWVDLFNBQWYsQ0FBeUJFLE1BQTVDLEVBQW9ELEtBQUtqQixPQUF6RCxFQUFrRSxJQUFsRTtBQUNILEdBdkZJO0FBeUZMb0IsRUFBQUEsS0F6RkssbUJBeUZJLENBRVIsQ0EzRkksQ0E2Rkw7O0FBN0ZLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICBqdW1wSGVpZ2h0OjAsXHJcbiAgICAgICAganVtcER1cmF0aW9uOjAsXHJcbiAgICAgICAgTWF4TW92ZVNwZWVkOjAsXHJcbiAgICAgICAgYWNjZWw6MCxcclxuICAgIH0sXHJcblxyXG4gICAgc2V0SnVtcEFjdGlvbjpmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBqdW1wVXAgPSBjYy5tb3ZlQnkodGhpcy5qdW1wRHVyYXRpb24sIGNjLnYyKDAsIHRoaXMuanVtcEhlaWdodCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSk7XHJcbiAgICAgICAgdmFyIGp1bXBEb3duID0gY2MubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLCBjYy52MigwLCAtdGhpcy5qdW1wSGVpZ2h0KSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpKTtcclxuICAgICAgICByZXR1cm4gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShqdW1wVXAsIGp1bXBEb3duKSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBvbktleURvd24oZXZlbnQpe1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY0xlZnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbktleVVwIChldmVudCkge1xyXG4gICAgICAgIC8vIHVuc2V0IGEgZmxhZyB3aGVuIGtleSByZWxlYXNlZFxyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgLy8g5qC55o2u5b2T5YmN5Yqg6YCf5bqm5pa55ZCR5q+P5bin5pu05paw6YCf5bqmXHJcbiAgICAgICAgaWYgKHRoaXMuYWNjTGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCAtPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjY1JpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkICs9IHRoaXMuYWNjZWwgKiBkdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6ZmQ5Yi25Li76KeS55qE6YCf5bqm5LiN6IO96LaF6L+H5pyA5aSn5YC8XHJcbiAgICAgICAgaWYgKCBNYXRoLmFicyh0aGlzLnhTcGVlZCkgPiB0aGlzLm1heE1vdmVTcGVlZCApIHtcclxuICAgICAgICAgICAgLy8gaWYgc3BlZWQgcmVhY2ggbGltaXQsIHVzZSBtYXggc3BlZWQgd2l0aCBjdXJyZW50IGRpcmVjdGlvblxyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCA9IHRoaXMubWF4TW92ZVNwZWVkICogdGhpcy54U3BlZWQgLyBNYXRoLmFicyh0aGlzLnhTcGVlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmoLnmja7lvZPliY3pgJ/luqbmm7TmlrDkuLvop5LnmoTkvY3nva5cclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnhTcGVlZCAqIGR0O1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgOmZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuanVtcEFjdGlvbiA9IHRoaXMuc2V0SnVtcEFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24odGhpcy5qdW1wQWN0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnhTcGVlZCA9IDA7XHJcblxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7ICBcclxuICAgIH0sXHJcbiAgICBvbkRlc3Ryb3kgKCkge1xyXG4gICAgICAgIC8vIOWPlua2iOmUruebmOi+k+WFpeebkeWQrFxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=