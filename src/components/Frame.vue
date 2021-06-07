<template>
    <div class="container px-4 mx-auto flex-col border-black border-2 rounded-2xl text-center">
        <div class="text-xl mb-3 mt-3 ">
            Frame {{frame_id}}
            <br>
            <div class="mb-3 py-2 max-w-xs mx-auto shadow-md items-center rounded-xl"
            :class="{'bg-red-400':switch_page==1, 'bg-green-300':switch_page==0}">
                Current Page:<br>{{page_id==-1?"None":page_id}}
            </div>
        </div>
        <ul v-for="address in memory_address" v-bind:key="address.physical_address">
            <div class="mb-3 py-2 max-w-xs mx-auto shadow-md items-center rounded-xl"
            :class="{'bg-gray-300':switch_page==0&&hit!=(address.physical_address%10), 
            'bg-green-300':switch_page==0&&hit==(address.physical_address%10), 'bg-yellow-500':switch_page==1}">
                <div class="text-center text-sm">
                    {{ address.physical_address }}
                </div>
            </div>
        </ul>
    </div>

</template>

<script>
export default {
    name: 'Frame',
    props: {
        frame_id: Number,
        switch_page: Number,
        page_id: Number,
        hit: Number
    },
    data() {
        return {
        }
    },
    setup() {

    },
    computed: {
        memory_address: {
            get(){
                var address_list = [];
                if(this.page_id>=0 && this.page_id<32){
                    for(let i=0;i<10;++i){
                        address_list.push({physical_address: this.page_id*10+i});
                    }
                }
                else{
                    for(let j=0;j<10;++j){
                        address_list.push({physical_address: 'EMPTY'});
                    }
                }
                return address_list;
            }

        }
    }
}
</script>

