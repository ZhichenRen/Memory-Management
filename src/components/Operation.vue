<template>
  <div
    class="container px-6 mx-auto border-black border-2 rounded-2xl text-center"
  >
    <div class="px-0.5 mx-auto mb-3 mt-3">
      <div
        class="
          text-xl
          mb-3
          py-2
          max-w-xs
          mx-auto
          bg-gray-300
          shadow-md
          items-center
          rounded-xl
        "
      >
        已执行{{ instruction_number }}条指令
      </div>
      <div
        class="
          text-xl
          mb-3
          py-2
          max-w-xs
          mx-auto
          bg-gray-300
          shadow-md
          items-center
          rounded-xl
        "
      >
        下一条指令地址<br />{{
          instruction_address == -1 ? "无已执行指令" : instruction_address
        }}
      </div>
    </div>
    <button
      class="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-1
        px-5
        rounded-full
        mb-3
      "
      @click="this.$emit('set_algorithm', 'FIFO')"
    >
      FIFO
    </button>
    <br />
    <button
      class="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-1
        px-5
        rounded-full
        mb-3
      "
      @click="this.$emit('set_algorithm', 'LRU')"
    >
      LRU
    </button>
    <div class="text-xl mb-3 mx-auto">当前算法:{{ algorithm }}</div>
    <button
      class="text-white font-bold py-1 px-5 rounded-full mb-3"
      @click="executeOnce"
      :disabled="execute_type == '停止执行'"
      :class="{
        'bg-blue-500 hover:bg-blue-700': execute_type == '连续执行',
        'bg-gray-300': execute_type == '停止执行',
      }"
    >
      单条执行
    </button>
    <br />
    <div class="grid grid-cols-2">
      <button
        v-if="execute_type == '停止执行'"
        class="
          bg-blue-500
          hover:bg-blue-700
          text-white
          font-bold
          py-1
          px-3
          rounded-full
          mb-3
          mx-1
        "
        @click="normalSpeed"
      >
        ×1
      </button>
      <button
        v-if="execute_type == '停止执行'"
        class="
          bg-blue-500
          hover:bg-blue-700
          text-white
          font-bold
          py-1
          px-3
          rounded-full
          mb-3
          mx-1
        "
        @click="twoTimesSpeed"
      >
        ×2
      </button>
      <button
        v-if="execute_type == '停止执行'"
        class="
          bg-blue-500
          hover:bg-blue-700
          text-white
          font-bold
          py-1
          px-3
          rounded-full
          mb-3
          mx-1
        "
        @click="fiveTimesSpeed"
      >
        ×5
      </button>
      <button
        v-if="execute_type == '停止执行'"
        class="
          bg-blue-500
          hover:bg-blue-700
          text-white
          font-bold
          py-1
          px-3
          rounded-full
          mb-3
          mx-1
        "
        @click="tenTimesSpeed"
      >
        ×10
      </button>
    </div>
    <button
      class="text-white font-bold py-1 px-5 rounded-full mb-3"
      :class="{
        'bg-blue-500 hover:bg-blue-700': execute_type == '连续执行',
        'bg-red-500 hover:bg-red-700': execute_type == '停止执行',
      }"
      @click="continueExecute"
    >
      {{ execute_type }}
    </button>
    <br />
    <button
      class="text-white font-bold py-1 px-5 rounded-full mb-3"
      @click="this.$emit('reset')"
      :disabled="execute_type == '停止执行'"
      :class="{
        'bg-blue-500 hover:bg-blue-700': execute_type == '连续执行',
        'bg-gray-300': execute_type == '停止执行',
      }"
    >
      复位
    </button>
    <div
      class="
        text-xl
        mb-3
        py-2
        max-w-xs
        mx-auto
        bg-gray-300
        shadow-md
        items-center
        rounded-xl
      "
    >
      换页率：{{ missing_rate }}%
    </div>
  </div>
</template>

<script>
export default {
  name: "Operation",
  props: {
    miss: Number,
    total: Number,
    algorithm: String,
    instruction_address: Number,
    execute_type: String,
    instruction_number: Number,
  },
  data() {
    return {
      interval: Object,
      period: Number,
    };
  },
  setup() {},
  created() {
    this.period = 1000;
  },
  methods: {
    executeOnce: function () {
      // console.log(this.period);
      if (this.instruction_number >= 320) {
        if (this.execute_type == "停止执行") {
          alert("指令执行完毕！");
          this.$emit("set_execute_type", "连续执行");
          clearInterval(this.interval);
        }
        return;
      }
      this.$emit("execute", this.period);
    },
    continueExecute: function () {
      if (this.execute_type == "连续执行") {
        // alert("开启连续执行！");
        this.$emit("set_execute_type", "停止执行");
        this.interval = setInterval(this.executeOnce, this.period);
      } else {
        // alert("结束连续执行！");
        this.$emit("set_execute_type", "连续执行");
        clearInterval(this.interval);
        this.period = 1000;
      }
    },
    normalSpeed: function () {
      this.period = 1000;
      clearInterval(this.interval);
      this.interval = setInterval(this.executeOnce, this.period);
    },
    twoTimesSpeed: function () {
      this.period = 500;
      clearInterval(this.interval);
      this.interval = setInterval(this.executeOnce, this.period);
    },
    fiveTimesSpeed: function () {
      this.period = 200;
      clearInterval(this.interval);
      this.interval = setInterval(this.executeOnce, this.period);
    },
    tenTimesSpeed: function () {
      this.period = 100;
      clearInterval(this.interval);
      this.interval = setInterval(this.executeOnce, this.period);
    },
  },
  computed: {
    missing_rate: {
      get() {
        if (this.total == 0) {
          return 0;
        }
        return Math.floor((this.miss / this.total) * 100);
      },
    },
  },
};
</script>