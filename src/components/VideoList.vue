<template>
    <div class="video_wrapper">

        <b-row>
            <b-col
                col-12
                :lg="viewType"
                v-for="video in filteredVideoList"
                :key="video.id"
            >
                <div class="video_item" :class="{list: viewType == '12'}">
                    <div class="img_wrapper">
                        <img :src="video.covers.main" :alt="video.title">
                    </div>
                    <div class="text_wrapper">
                        <div class="video_name" v-html="video.title"></div>

                        <div class="link">
                            <a
                                :href="video.options.link"
                                class="to_video"
                                v-if="video.access">
                                ДИВИТИСЯ
                            </a>
                            <a
                                :href="video.options.link"
                                class="to_pay_video"
                                v-else
                            >
                                Придбати
                            </a>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>


    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return {
            videoList: null
        }
    },
    computed: {
        ...mapGetters([
            'VIDEOS',
            'filteredVideoList',
            'viewType'
        ])
    },
    methods: {
        ...mapActions(['getVideoList'])
    },
    mounted() {
        this.getVideoList()
    }
}
</script>

<style lang="scss" scoped>
.video_item{
    margin-bottom: 30px;
    background: #fff;
    border-radius: 0 0 10px 10px;
    border: 1px solid #c7c7c7;
    &.list{
        display: flex;
        border-radius: 10px;
        overflow: hidden;
        .link{
            justify-content: flex-start;
        }
    }
    .img_wrapper{
        img{
            width: 100%;
        }
    }
    .text_wrapper{
        padding: 15px 15px 25px 15px;
    }
    .video_name{
        font-size: 16px;
        line-height: 24px;
        color: #232323;
        font-weight: 600;
        min-height: 72px;
    }
    .link{
        display: flex;
        width: 100%;
        justify-content: center;
        a{
            text-decoration: none;
            display: flex;
            align-items: center;
            width: 180px;
            height: 34px;
            border-radius: 17px;
            font-size: 14px;
            letter-spacing: 1px;
            position: relative;
            margin-top: 34px;
            padding-left: 35px;
            font-weight: 600;
            text-transform: uppercase;
            transition: all .3s;
            &.to_video{
                border: 1px solid #c7c7c7;
                color: #232323;
                &:hover{
                    border-color: #ed3434;
                    color: #ed3434;
                }
                &::before{
                    content: "";
                    width: 34px;
                    height: 34px;
                    border-radius: 50%;
                    position: absolute;
                    top: -1px;
                    right: -1px;
                    background: url("../assets/right-thin-chevron.png"), #ed3434;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            }
            &.to_pay_video{
                background: url("../assets/right-thin-chevron.png"), #ed3434;
                background-repeat: no-repeat;
                background-position: 90% 50%;
                color: #fff;
                &:hover{
                    background-color: #a11313;
                }
            }
        }
    }
}

@media (max-width: 767px) {
    .video_item{
        max-width: 300px;
        margin: 0 auto 30px auto;
    }
}

</style>