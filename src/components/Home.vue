<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->

  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <div class="my-auto">
    <div class="text-3xl mb-5 mx-auto text-center mt-3">内存分页模拟</div>
    <div class="grid grid-cols-5 gap-4 ml-8 mr-8 mt-0">
      <Frame
        :frame_id="0"
        :switch_page="switch_page[0]"
        :page_id="page_list[0]"
        :hit="hit[0]"
      />
      <Frame
        :frame_id="1"
        :switch_page="switch_page[1]"
        :page_id="page_list[1]"
        :hit="hit[1]"
      />
      <Frame
        :frame_id="2"
        :switch_page="switch_page[2]"
        :page_id="page_list[2]"
        :hit="hit[2]"
      />
      <Frame
        :frame_id="3"
        :switch_page="switch_page[3]"
        :page_id="page_list[3]"
        :hit="hit[3]"
      />
      <Operation
        :miss="miss"
        :total="total"
        :instruction_address="instruction_address"
        :algorithm="algorithm"
        :execute_type="execute_type"
        @execute="execute"
        :instruction_number="instruction_number"
        @set_execute_type="setExecuteType"
        @set_algorithm="setAlgorithm"
        @reset="reset"
      />
    </div>
  </div>
  <!-- <Test title="HAHA" message="HAHAHA" /> -->
</template>

<script>
import Frame from "./Frame.vue";
import Operation from "./Operation.vue";

export default {
  name: "Home",
  components: {
    Frame,
    Operation,
  },
  data() {
    return {
      page_list: Array,
      switch_page: Array,
      call_in_time: Array,
      priority: Array,
      instruction_address: Number,
      algorithm: String,
      execute_type: String,
      miss: Number,
      total: Number,
      instruction_number: Number,
    };
  },
  mounted() {
    document.title = "Page Management";
  },
  created() {
    this.page_list = [-1, -1, -1, -1];
    this.hit = [-1, -1, -1, -1];
    this.switch_page = [0, 0, 0, 0];
    this.instruction_address = 100;
    this.algorithm = "FIFO";
    this.execute_type = "连续执行";
    this.miss = 0;
    this.total = 0;
    this.priority = [0, 0, 0, 0];
    this.instruction_number = 0;

    var timestamp = new Date();
    this.call_in_time = [];
    for (var i = 0; i < 4; ++i) {
      this.call_in_time.push(timestamp.getTime());
    }
  },
  methods: {
    setAlgorithm(algorithm) {
      this.algorithm = algorithm;
    },
    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
    },
    execute(period) {
      // console.log(period);
      var rand = Math.random();
      var next_instruction = 0;
      if (rand < 0.5) {
        next_instruction = (this.instruction_address + 1) % 320;
      } else if (rand >= 0.5 && rand < 0.75) {
        //random address after current instruction
        next_instruction = this.getRandomIntInclusive(
          this.instruction_address + 1,
          319
        );
      } else {
        //random address before current instruction
        next_instruction = this.getRandomIntInclusive(
          0,
          this.instruction_address - 1
        );
      }

      var page = Math.floor(next_instruction / 10);
      var offset = next_instruction % 10;

      for (var i = 0; i < 4; ++i) {
        this.priority[i]++;
      }

      var miss_page = true;
      //Test if the page is already in main memory
      for (let i = 0; i < this.page_list.length; ++i) {
        if (this.page_list[i] == page) {
          miss_page = false;
          this.priority[i] = 0;
          this.hit[i] = offset;
          setTimeout(() => {
            this.hit[i] = -1;
          }, 0.75 * period);
          break;
        }
      }

      if (miss_page) {
        this.miss++;
        if (this.algorithm == "FIFO") {
          var first_id = 0;
          var first_time = 1000000000000000;
          for (let i = 0; i < 4; ++i) {
            if (this.call_in_time[i] < first_time) {
              first_id = i;
              first_time = this.call_in_time[i];
            }
          }
          this.page_list[first_id] = page;
          this.call_in_time[first_id] = new Date().getTime();
          this.priority[first_id] = 0;
          this.switch_page[first_id] = 1;
          setTimeout(() => {
            this.switch_page[first_id] = 0;
          }, 0.75 * period);
        } else {
          //LRU
          var least_used_id = 0;
          var least_used_times = 0;
          for (let i = 0; i < 4; ++i) {
            if (this.priority[i] >= least_used_times) {
              least_used_id = i;
              least_used_times = this.priority[i];
            }
          }
          this.page_list[least_used_id] = page;
          this.priority[least_used_id] = 0;
          this.switch_page[least_used_id] = 1;
          setTimeout(() => {
            this.switch_page[least_used_id] = 0;
          }, 0.75 * period);
        }
      }
      this.total++;
      this.instruction_address = next_instruction;
      this.instruction_number += 1;
    },
    setExecuteType(type) {
      this.execute_type = type;
    },
    reset() {
      this.instruction_address = 0;
      this.execute_type = "连续执行";
      this.miss = 0;
      this.total = 0;
      this.page_list = [-1, -1, -1, -1];
      this.hit = [-1, -1, -1, -1];
      this.switch_page = [0, 0, 0, 0];
      this.instruction_address = 0;
      this.priority = [0, 0, 0, 0];
      this.instruction_number = 0;

      var timestamp = new Date();
      this.call_in_time = [];
      for (var i = 0; i < 4; ++i) {
        this.call_in_time.push(timestamp.getTime());
      }
    },
  },
};
</script>
